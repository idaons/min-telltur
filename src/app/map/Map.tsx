"use client";

// This is a Client Component. It receives data as props and
// has access to state and effects just like Page components
// in the `pages` directory.

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Box, Heading, Link, Spinner } from "@chakra-ui/react";

import "leaflet/dist/leaflet.css";
import styles from "./map.module.css";
import Leaflet, { LatLngBoundsExpression } from "leaflet";
import { convertPoint } from "@/pointToLatLon";
import { tiPaToppHamaroyDestinations } from "@/tiPaToppHamaroyDestinations";
import { useLocalStorageState } from "@/useLocalStorageState";
import { KonkurranseNavn, KonkurranseProps } from "@/types";
import { useHost } from "@/useHost";
import { turmal55ForforendeDestinations } from "@/turmal55ForforendeDestinations";
import { Liste } from "@/app/Liste";
import { Info } from "@/app/Info";

/*
const LeafIcon = Leaflet.Icon.extend({
  options: {
    className: styles.markerIcon,
    iconSize: [38, 38],
    //    iconAnchor: [22, 94],
    //    shadowAnchor: [4, 62],
    //    popupAnchor: [-3, -76],
  },
});
 */

const visitedIcon = Leaflet.icon({
  iconUrl: "/CheckmarkCircleFill.svg",
  className: styles.markerIcon,
  iconSize: [30, 30],
});

const notVisitedIcon = Leaflet.icon({
  iconUrl: "/NotVisited2.svg",
  className: `${styles.markerIcon} ${styles.notVisitedIcon}`,
  iconSize: [25, 25],
});

const INITIAL_BOUNDS: LatLngBoundsExpression = [
  [59.89843428245928, 10.651118],
  [59.9534114, 10.81431433498766],
];

const konkurranseMap: Record<KonkurranseNavn, KonkurranseProps> = {
  tiPaToppHamaroy: { destinations: tiPaToppHamaroyDestinations },
  forforendeTurmal: { destinations: turmal55ForforendeDestinations, zoom: 5 },
};

const useKonkurranse = (): KonkurranseNavn => {
  const host = useHost() ?? "N/A";
  return hostToKonkurranseMap[host] ?? "tiPaToppHamaroy"; // Default fallback til tiPaToppHamarøy
};

const hostToKonkurranseMap: Record<string, KonkurranseNavn> = {
  "https://turer-tipatopphamroy.vercel.app/": "tiPaToppHamaroy",
  "https://turer-55forforendeturmal.vercel.app": "forforendeTurmal",
};

const Map = () => {
  const konkurranse = useKonkurranse();
  console.log(konkurranse);
  const [visited, setVisited] = useLocalStorageState<string[]>(konkurranse, []);

  const onCheckboxChange = (turmal: string) => {
    if (visited.includes(turmal)) {
      setVisited(visited.filter((it) => it !== turmal));
    } else {
      setVisited([...visited, turmal]);
    }
  };

  const turmal = konkurranseMap[konkurranse];

  return (
    <>
      <MapContainer
        center={turmal.mapCenter ?? [68.081251, 15.650711]}
        zoom={turmal.zoom ?? 10}
        scrollWheelZoom={false}
        className={styles.map}
        bounds={INITIAL_BOUNDS}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {turmal.destinations.map((item) => {
          const point = convertPoint(item.geom);
          if (!item.geom) return;
          return (
            <Marker
              key={item.name}
              position={point}
              icon={visited.includes(item.name) ? visitedIcon : notVisitedIcon}
            >
              <Popup>
                <b>{item.name}</b>
                <div>{item.points} poeng</div>

                <label className={styles.checkbox}>
                  <input
                    type="checkbox"
                    checked={visited.includes(item.name)}
                    onChange={() => onCheckboxChange(item.name)}
                  />
                  Besøkt
                </label>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
      <Box
        position="fixed"
        display="grid"
        gap=".25em"
        bottom="0"
        left="0"
        zIndex="1000"
        background="white"
        color="black"
        padding=".35rem"
        fontFamily="sans-serif"
        opacity=".5"
      >
        {konkurranse?.includes("tiPaToppHamaroy") ? (
          <>
            <Heading fontSize="1rem">
              Turmål,{" "}
              <Link href="https://www.telltur.no/friluftsrad/salten">
                Ti på topp Hamarøy
              </Link>
            </Heading>
            <Info />

            <Liste />
          </>
        ) : (
          <>
            {" "}
            <Heading fontSize="1rem">
              Konkurranse:{" "}
              <Link href="https://www.telltur.no/friluftsrad/salten">
                55 Forførende Turmål
              </Link>
            </Heading>
          </>
        )}
      </Box>
    </>
  );
};

export default Map;
