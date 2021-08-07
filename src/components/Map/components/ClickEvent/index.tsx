import { LatLngLiteral } from "leaflet";
import { useMapEvent } from "react-leaflet";

interface Props {
  onClick?: ({ lat, lng }: LatLngLiteral) => void;
}
export function ClickEvent({ onClick = () => {} }: Props) {
  useMapEvent("click", (e) => {
    onClick({ lat: e.latlng.lat, lng: e.latlng.lng });
  });

  return null;
}
