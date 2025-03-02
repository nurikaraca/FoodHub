
import { MapContainer, TileLayer, ZoomControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import LocationPicker from "./LocationPicker";
import RecenterMap from "./RecenterMap";

interface Coordinates {
  lat: number;
  lng: number;
}

interface MapComponentProps {
  mapKey: string;
  selectedCoordinates: Coordinates | null;
  defaultCoordinates: Coordinates;
  setSelectedAddress: (address: string) => void;
  setSelectedCoordinates: (coords: Coordinates) => void;
}

const MapComponent: React.FC<MapComponentProps> = ({
  mapKey,
  selectedCoordinates,
  defaultCoordinates,
  setSelectedAddress,
  setSelectedCoordinates,
}) => {
  return (
    <MapContainer
      key={mapKey}
      center={selectedCoordinates || defaultCoordinates}
      zoom={33}
      zoomControl={false}
      className="w-full h-[430px] z-30"
    >
      <ZoomControl position="bottomleft" />
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />
      <LocationPicker setAddress={setSelectedAddress} setCoordinates={setSelectedCoordinates} />
      <RecenterMap coordinates={selectedCoordinates} />
    </MapContainer>
  );
};

export default MapComponent;