import Map from "../Map";
import Button from "../Widgets/Button";
import { LatLngLiteral } from "leaflet";
import { LocationFormProps, LocationProps } from "src/interfaces/Location";
import { memo, useEffect, useState } from "react";
import "./style.scss";

interface Props {
  location?: LatLngLiteral;
  onSubmit: (value: LocationProps) => void;
  afterSubmit?: () => void;
  editObject?: LocationProps;
}

function LocationForm({ location, onSubmit: onSubmitForm, editObject, afterSubmit = () => {} }: Props) {
  const InitialData = { id: undefined, title: "", type: "1", logo: "", position: undefined };
  const [data, setData] = useState<LocationFormProps>(InitialData);
  console.log(editObject);

  useEffect(() => {
    if (location) {
      setData({ ...data, position: location });
    } else if (editObject) {
      setData(editObject);
    } else {
      setData(InitialData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location, editObject]);

  const setValue = (name: string, value: any) => {
    setData({ ...data, [name]: value });
  };
  const TypeList = [
    { label: "Business", value: 1 },
    { label: "Entertainment", value: 2 },
  ];
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmitForm({
      id: data.id ? data.id : new Date().getTime(),
      title: data.title,
      logo: data.logo,
      position: data.position!,
      type: data.type,
    });
    afterSubmit();
  };
  return (
    <form className="locationForm" onSubmit={onSubmit}>
      <div className="locationForm__row">
        <label>Location Name:</label>
        <input value={data.title} onChange={(e) => setValue("title", e.target.value)} required />
      </div>
      <div className="locationForm__row">
        <label>Location on map:</label>
        <Map
          containerClassName="locationForm__map"
          currentLocation={data.position}
          mark={data.position}
          style={{ width: "50%", height: "12rem" }}
          onClick={({ lat, lng }) => (editObject ? setValue("position", { lat, lng }) : () => {})}
        />
      </div>
      <div className="locationForm__row">
        <label>Location type:</label>
        <select value={data.type} onChange={(e) => setValue("type", e.target.value)}>
          {TypeList.map((type, index) => (
            <option value={type.value} key={index}>
              {type.label}
            </option>
          ))}
        </select>
      </div>
      <div className="locationForm__row">
        <label>Logo:</label>
        <input value={data.logo} type="file" />
      </div>
      <div>
        <div className="locationForm__footer">
          <Button className="locationForm__btn" type="submit">
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
}
export default memo(LocationForm);
