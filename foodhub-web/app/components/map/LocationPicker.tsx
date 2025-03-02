
import { useMapEvents } from "react-leaflet";
import L from "leaflet";
import { Marker } from "react-leaflet";
import { useState } from "react";

interface Coordinates {
  lat: number;
  lng: number;
}

interface LocationPickerProps {
  setAddress: (address: string) => void;
  setCoordinates: (coords: Coordinates) => void;
}

const LocationPicker:React.FC<LocationPickerProps> = ({ setAddress, setCoordinates }) => {
  const [position, setPosition] = useState<Coordinates | null>(null);

  useMapEvents({
    click: async (e) => {
      const { lat, lng } = e.latlng;
      setPosition({ lat, lng });
      setCoordinates({ lat, lng });

    
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
      );
      const data = await response.json();
      if (data.display_name) {
        setAddress(data.display_name);
      }
    },
  });

  return position ? (
    <Marker
      position={position}
      icon={L.icon({
        iconUrl: "/marker-icon.png",
        iconSize: [32, 32],
        iconAnchor: [16, 32],
      })}
    />
  ) : null;
};

export default LocationPicker;