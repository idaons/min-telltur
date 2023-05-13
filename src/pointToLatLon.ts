import proj4 from "proj4";
import { LatLngExpression } from "leaflet";
// Define source and destination coordinate reference systems (CRS)
const sourceCRS = "EPSG:3857";
const destCRS = "EPSG:4326"; // WGS84

export function convertPoint(point: string) {
  // Define the point in Web Mercator

  const regex = /POINT\((\d+.\d+) (\d+.\d+)\)/g;
  const test = point.match(regex);
  const match = regex.exec(point);
  if (!match || match.length < 2) {
    throw new Error("converting to lat/long failed");
  }
  //const point3857 = [1735092.0897735602, 10473753.703991326];
  const point3857 = [+match[1], +match[2]];
  // Convert the point to WGS84 (latitude and longitude)
  const point4326 = proj4(sourceCRS, destCRS, point3857);

  // Output the latitude and longitude of the point
  const latitude = point4326[1];
  const longitude = point4326[0];
  //console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

  return [latitude, longitude] as LatLngExpression;
}
