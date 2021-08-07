import { LocationProps } from "src/interfaces/Location";
import React, { createContext, useState } from "react";

interface Props {
  children: React.ReactNode;
}
export interface LocationsContextProps {
  locations: LocationProps[];
  onSubmit: (value: LocationProps) => void;
}
export const LocationsContext = createContext<LocationsContextProps>({
  locations: [],
  onSubmit: () => {},
});
export default function LocationsProvider({ children }: Props) {
  const [list, setList] = useState<LocationProps[]>([]);
  const onSubmit = (value: LocationProps) => {
    const index = list.findIndex((item) => item.id === value.id);
    if (index >= 0) {
      let temp = [...list];
      temp[index] = value;
      setList(temp);
    } else setList([...list, value]);
  };
  return <LocationsContext.Provider value={{ locations: list, onSubmit }}>{children}</LocationsContext.Provider>;
}
