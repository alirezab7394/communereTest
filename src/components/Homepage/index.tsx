import LocationForm from "../LocationForm";
import Map from "../Map";
import Modal from "../Widgets/Modal";
import useLocations from "../hooks/useLocations/useLocations";
import { LatLngLiteral } from "leaflet";
import { LocationProps } from "src/interfaces/Location";
import { useState } from "react";

export default function Homepage() {
  const { locations, onSubmit } = useLocations();
  const [location, setLocation] = useState<LatLngLiteral | undefined>(undefined);
  const [editObject, setEditObject] = useState<LocationProps | undefined>(undefined);
  const onMapClick = ({ lat, lng }: LatLngLiteral) => {
    setLocation({ lat, lng });
  };
  const onEdit = (value: LocationProps) => {
    setEditObject(value);
  };
  const closeModal = () => {
    if (editObject) setEditObject(undefined);
    if (location) setLocation(undefined);
    setLocation(undefined);
  };
  return (
    <div>
      <Map marks={locations} onClick={onMapClick} onEdit={onEdit} />
      <Modal show={!!location || !!editObject} title="Share location" onClose={() => closeModal()}>
        <LocationForm location={location} onSubmit={onSubmit} afterSubmit={closeModal} editObject={editObject} />
      </Modal>
    </div>
  );
}
