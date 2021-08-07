import { LatLngLiteral } from "leaflet";

export interface LocationProps {
  position: LatLngLiteral;
  title: string;
  type: string;
  logo: string;
  id: number;
}
export interface LocationFormProps {
  title: string;
  type: string;
  logo: string;
  position?: LatLngLiteral;
  id: undefined | number;
}
