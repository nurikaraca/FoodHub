
import { Input, Button } from "@heroui/react";
import { IoIosSearch } from "react-icons/io";
import { MdMyLocation } from "react-icons/md";

interface AddressSearchBarProps {
  selectedAddress: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleFindMyLocation: () => void;
  suggestions: string[];
  handleSelectAddress: (address: string) => void;
}

const AddressSearchBar: React.FC<AddressSearchBarProps> = ({
  selectedAddress,
  handleInputChange,
  handleFindMyLocation,
  suggestions,
  handleSelectAddress,
}) => {
  return (
    <div className="absolute top-4 left-1/2 -translate-x-1/2 flex flex-col md:flex-row gap-2 w-[90%] md:w-[600px] z-50">

    <div className="relative w-full ">
      <Input
        size="lg"
        className="w-full text-sm"
        placeholder="Search street or post code"
        value={selectedAddress}
        onChange={handleInputChange}
        startContent={<IoIosSearch className="text-2xl bg-transparent flex-shrink-0" />}
        endContent={
          <Button className="text-md w-full" onPress={handleFindMyLocation}>
            <MdMyLocation className="bg-transparent" size={25} />
            Find my location
          </Button>
        }
        type="text"
        classNames={{ inputWrapper: "bg-white", input: "text-medium" }}
        />
      {suggestions.length > 0 && (
        <ul className="absolute z-50 w-full bg-white border rounded shadow-md">
          {suggestions.map((suggestion, index) => (
            <li
            key={index}
            className="p-2 cursor-pointer hover:bg-gray-200"
            onClick={() => handleSelectAddress(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
      </div>
  );
};

export default AddressSearchBar;

