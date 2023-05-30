import { LatLngExpression } from "leaflet";

export interface Destination {
  name: string;
  points: number;
  geom: string;
  id?: number;
}
export interface KonkurranseProps {
  destinations: Destination[];
  mapCenter?: LatLngExpression;
  zoom?: number;
  localstorageKey?: string;
}

export type KonkurranseNavn = "tiPaToppHamaroy" | "forforendeTurmal";
