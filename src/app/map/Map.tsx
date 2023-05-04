"use client";

// This is a Client Component. It receives data as props and
// has access to state and effects just like Page components
// in the `pages` directory.
/*
export default function HomePage({ recentPosts }) {
    return (
        <div>
            {recentPosts.map((post) => (
                <div key={post.id}>{post.title}</div>
            ))}
        </div>
    );
}
 */

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styles from "./map.module.css";
import Leaflet, {
  LatLngBoundsExpression,
  icon,
  map,
  circleMarker,
} from "leaflet";
import SvgComponent from "@/app/map/BeenThere";

const visitedIcon = Leaflet.icon({ iconUrl: "/CheckmarkCircleFill.svg" });
const notVisitedIcon = Leaflet.icon({ iconUrl: "/NotVisited.svg" });
const INITIAL_BOUNDS: LatLngBoundsExpression = [
  [59.89843428245928, 10.651118],
  [59.9534114, 10.81431433498766],
];

const Map = () => {
  const position = [68.089869, 15.586681];

  return (
    <>
      <MapContainer
        center={position}
        zoom={10}
        scrollWheelZoom={false}
        className={styles.map}
        bounds={INITIAL_BOUNDS}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/*
                  <Marker position={position} icon={markerIcon}>
          <Popup>Hjelsengåsen Oppeid. 2 poeng.</Popup>
        </Marker>
          */}
        {tiPaToppHamaroy.map((item) => (
          <Marker
            position={item.position}
            icon={item.visited ? visitedIcon : notVisitedIcon}
          >
            <Popup>
              <b>{item.name}</b>
              <div>{item.poeng} poeng</div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
};

export default Map;
