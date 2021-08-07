import { Popup } from "react-leaflet";
import Button from "src/components/Widgets/Button";
import { LocationProps } from "src/interfaces/Location";
import "./styles.scss";

interface Props extends LocationProps {
  onEdit?: (value: LocationProps) => void;
}
export default function LocationPopup({ type, logo, position, title, id, onEdit = () => {} }: Props) {
  return (
    <Popup>
      <div className="locationPopup">
        <div className="locationPopup__title">{title}</div>
        <div>
          <Button className="locationPopup__btn" onClick={() => onEdit({ id, position, type, title, logo })}>
            Edit
          </Button>
        </div>
      </div>
    </Popup>
  );
}
