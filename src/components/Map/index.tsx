import ChangeView from "./components/ChangeView";
import { ClickEvent } from "./components/ClickEvent";
import CustomMarker from "./components/CustomMarker";
import LocationPopup from "./components/LocationPopup";
import { LatLngLiteral } from "leaflet";
import { MapContainer, TileLayer } from "react-leaflet";
import { LocationProps } from "src/interfaces/Location";
import { CSSProperties } from "react";
import "./style.scss";
import "leaflet/dist/leaflet.css";

export interface MapProps {
  marks?: LocationProps[];
  currentLocation?: LatLngLiteral;
  onClick?: ({ lat, lng }: LatLngLiteral) => void;
  className?: string;
  containerClassName?: string;
  style?: CSSProperties;
  mark?: LatLngLiteral;
  onEdit?: (value: LocationProps) => void;
}

function Map({
  marks = [],
  currentLocation,
  onClick,
  containerClassName = "",
  className = "",
  style = { height: "100vh", width: "100%" },
  mark,
  onEdit,
}: MapProps) {
  const center = { lat: 51.505, lng: -0.09 };

  return (
    <div className={["Map--container", containerClassName].join(" ")}>
      <MapContainer
        className={className}
        center={currentLocation ?? center}
        zoom={13}
        scrollWheelZoom={false}
        style={style}
      >
        <ChangeView center={center} currentLocation={currentLocation} />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <ClickEvent onClick={onClick} />
        {marks.map((mark, index) => (
          <CustomMarker position={mark.position} key={index}>
            <LocationPopup {...mark} onEdit={onEdit} />
          </CustomMarker>
        ))}
        {mark && <CustomMarker position={mark} />}
      </MapContainer>
    </div>
  );
}
export default Map;
