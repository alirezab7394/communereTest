import { LatLngLiteral } from "leaflet";
import { useMap } from "react-leaflet";
import { useEffect } from "react";

interface Props {
  currentLocation?: LatLngLiteral;
  center: LatLngLiteral;
}
export default function ChangeView({ center, currentLocation }: Props) {
  const map = useMap();
  // on center change
  useEffect(() => {
    if (currentLocation) {
      if (currentLocation?.lat !== center.lat || currentLocation?.lng !== center.lng) {
        map.setView(currentLocation);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentLocation]);
  return null;
}
