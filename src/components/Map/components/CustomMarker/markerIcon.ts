import L from "leaflet";
import markerIconSVG from "src/assets/svg/location_icon.svg";

const markerIcon = L.icon({
  iconUrl: markerIconSVG,
  iconRetinaUrl: markerIconSVG,
  iconAnchor: undefined,
  shadowUrl: undefined,
  shadowSize: undefined,
  shadowAnchor: undefined,
  iconSize: [30, 30],
  className: "leaflet-marker-icon",
});
export default markerIcon;
