import markerIcon from "./markerIcon";
import { Marker, MarkerProps } from "react-leaflet";

export interface CustomMarkerProps extends MarkerProps {}

export default function CustomMarker({ position, children }: CustomMarkerProps) {
  return (
    <Marker position={position} icon={markerIcon}>
      {children}
    </Marker>
  );
}
