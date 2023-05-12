"use client";

// This is a Client Component. It receives data as props and
// has access to state and effects just like Page components
// in the `pages` directory.

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styles from "./map.module.css";
import Leaflet, { LatLngBoundsExpression, LatLngExpression } from "leaflet";
import { convertPoint } from "@/pointToLatLon";
import { tiPaToppHamaroy } from "@/TiPaToppHamaroy";
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
  className: styles.markerIcon,
  iconSize: [30, 30],
});

const INITIAL_BOUNDS: LatLngBoundsExpression = [
  [59.89843428245928, 10.651118],
  [59.9534114, 10.81431433498766],
];

const Map = () => {
  const mapCenter: LatLngExpression = [68.081251, 15.650711];

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
        {tiPaToppHamaroy.map((item) => {
          const point = convertPoint(item.geom);
          if (!item.geom) return;
          return (
            <Marker
              key={item.name}
              position={point}
              icon={
                process.env.NODE_ENV === "development"
                  ? item.visited
                    ? visitedIcon
                    : notVisitedIcon
                  : notVisitedIcon
              }
            >
              <Popup>
                <b>{item.name}</b>
                <div>{item.poeng} poeng</div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </>
  );
};

export default Map;
