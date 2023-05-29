"use client";

// This is a Client Component. It receives data as props and
// has access to state and effects just like Page components
// in the `pages` directory.

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styles from "./map.module.css";
import Leaflet, { LatLngBoundsExpression, LatLngExpression } from "leaflet";
import { convertPoint } from "@/pointToLatLon";
import { Destination, tiPaToppHamaroyDestinations } from "@/TiPaToppHamaroy";
import { useLocalStorageState } from "@/useLocalStorageState";
import { useHost } from "@/useHost";

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

type Konkuranse = "tiPaToppHamaroy" | "55forførendeTurmål";

const hostToKonkuranseMap: Record<string, Konkuranse> = {
  "https://turer-tipatopphamroy.vercel.app/": "tiPaToppHamaroy",
  annenURl: "55forførendeTurmål",
};

const konkuranseToMarksersMap: Record<Konkuranse, Destination[]> = {
  tiPaToppHamaroy: tiPaToppHamaroyDestinations,
  "55forførendeTurmål": tiPaToppHamaroyDestinations, // TODO riktig locations her
};

const useKonkuranse = (): Konkuranse => {
  const host = useHost() ?? "N/A";

  return hostToKonkuranseMap[host] ?? "tiPaToppHamaroy"; // Default fallback til tiPaToppHamarøy
};

const Map = () => {
  const konkuranse = useKonkuranse();
  const mapCenter: LatLngExpression = [68.081251, 15.650711];
  const [visited, setVisited] = useLocalStorageState<string[]>(konkuranse, []);

  const onCheckboxChange = (turmal: string) => {
    if (visited.includes(turmal)) {
      setVisited(visited.filter((it) => it !== turmal));
    } else {
      setVisited([...visited, turmal]);
    }
  };

  return (
    <>
      <MapContainer
        center={mapCenter}
        zoom={10}
        scrollWheelZoom={false}
        className={styles.map}
        bounds={INITIAL_BOUNDS}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {konkuranseToMarksersMap[konkuranse].map((item) => {
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
    </>
  );
};

export default Map;
