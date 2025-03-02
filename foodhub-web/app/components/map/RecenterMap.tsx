
import { useMap } from "react-leaflet";
import { useEffect } from "react";
interface CoordinatesProps {

  coordinates: { lat: number; lng: number } | null;
}
const RecenterMap:React.FC<CoordinatesProps> = ({ coordinates }) => {
  const map = useMap();
  useEffect(() => {
    if (coordinates) {
      map.setView([coordinates.lat, coordinates.lng], 15);
    }
  }, [coordinates]);
  return null;
};

export default RecenterMap;