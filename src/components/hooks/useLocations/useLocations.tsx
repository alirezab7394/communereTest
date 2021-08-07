import { LocationsContext } from "src/components/Providers/LocationsProvider";
import { useContext } from "react";

export default function useLocations() {
  const context = useContext(LocationsContext);
  return context;
}
