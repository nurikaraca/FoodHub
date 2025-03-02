
import React, { useState } from "react";
import SearchBar from "./AddressSearchBar";
import MapComponent from "./MapComponent";
import AddressForm from "./AddressForm";
import { Button } from "@heroui/button";

const Map = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [mapKey, setMapKey] = useState("default");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [selectedAddress, setSelectedAddress] = useState("");
  const [selectedCoordinates, setSelectedCoordinates] = useState<{ lat: number; lng: number } | null>(null);

  const defaultCoordinates = { lat: 41.0082, lng: 28.9784 };

  // Kullanıcının mevcut konumunu al
  const handleFindMyLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          setSelectedCoordinates({ lat: latitude, lng: longitude });

          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
          );
          const data = await response.json();
          if (data.display_name) {
            setSelectedAddress(data.display_name);
          }

          setMapKey(`${latitude}-${longitude}`);
        },
        (error) => {
          console.error("Location could not be retrieved:", error);
        }
      );
    } else {
      console.error("Your browser does not support location information.");
    }
  };

  // "Address search and getting suggestions"
  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSelectedAddress(query);
    if (!query) {
      setSuggestions([]);
      return;
    }

    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${query}`
      );
      const data = await response.json();
      if (!Array.isArray(data) || data.length === 0) {
        console.warn("Address not found.");
        setSuggestions([]);
        return;
      }
      setSuggestions(data.map((item) => item.display_name));
    } catch (error) {
      console.error("Address query error:", error);
    }
  };

  // Select address
  const handleSelectAddress = async (e: string) => {
    setSelectedAddress(e);
    setSuggestions([]);

    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${selectedAddress}`
      );
      const data = await response.json();
      if (!Array.isArray(data) || data.length === 0) {
        console.warn("Address not found.");
        return;
      }
      const lat = Number(data[0].lat);
      const lng = Number(data[0].lon);
      setSelectedCoordinates({ lat, lng });
      setMapKey(`${lat}-${lng}`);
    } catch (error) {
      console.error("Address selection error:", error);
    }
  };

  // Open the form when the confirm button is pressed
  const handleConfirm = () => {
    setIsFormOpen(true);
  };

  

  return (
    <div className="relative w-full">
      <SearchBar
        selectedAddress={selectedAddress}
        handleInputChange={handleInputChange}
        handleFindMyLocation={handleFindMyLocation}
        suggestions={suggestions}
        handleSelectAddress={handleSelectAddress}
      />
      <MapComponent
        mapKey={mapKey}
        selectedCoordinates={selectedCoordinates}
        defaultCoordinates={defaultCoordinates}
        setSelectedAddress={setSelectedAddress}
        setSelectedCoordinates={setSelectedCoordinates}
      />
      {!isFormOpen && (
        <Button
          variant="shadow"
          color="secondary"
          size="lg"
          fullWidth
          className="absolute m-3"
          onPress={handleConfirm}
        >
          Use this address
        </Button>
      )}
      {isFormOpen && (
        <div className="h-full w-full absolute top-0 left-0 bg-white z-50 p-4">
          <AddressForm  onCancel={() => setIsFormOpen(false)} coordinates={selectedCoordinates} address={selectedAddress}/>
        </div>

      )}
    </div>
  );
};

export default Map;