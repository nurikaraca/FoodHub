
import { Input, Button, Alert } from "@heroui/react";
import {  useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
interface AddressFormProps {
  onCancel: () => void;
  address: string;
  coordinates: { lat: number; lng: number } | null;
}
const AddressForm = ({ onCancel, address, coordinates }: AddressFormProps) => {
  const [title, setTitle] = useState("");
  const [building, setBuilding] = useState("");
  const [floor, setFloor] = useState("");
  const [apartmentNo, setApartment] = useState("");
  const [addressDirections, setAddressDirections] = useState("");


  const handleSave = () => {
    localStorage.setItem("savedAddress", JSON.stringify({
      title,
      address,
      coordinates,
      building,
      floor,
      apartmentNo,
      addressDirections,
    })
  );

  

};

  return (
    <div className="h-full w-full">
      <div className=" -top-[92px] -left-8 p-4 absolute" >
        <IoIosArrowBack onClick={onCancel} />
      </div>

      <div className="">
        <div className=" mb-7 flex gap-2 max-w-xl">
          <Alert
            color="secondary"
            title={`85% of canceled orders are canceled due to incorrect location.`}
            variant="faded"
          />

        </div>

        <Input
          label="Title (Home,Work,etc.)"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="max-w-xl mb-4 "
          type="text"
          size="lg"
          variant="bordered"
          classNames={{
            inputWrapper: "bg-white data-[focus=true]:bg-white data-[hover=true]:bg-white shadow-none rounded-md",
            input: "text-medium ",
            innerWrapper: "bg-[#ffffff]",
            label: "text-black "
          }}
        />
        <Input
          label="Address"
          value={address}
          onChange={(e) => setTitle(e.target.value)}
          className="max-w-xl mb-4 "
          type="text"
          size="lg"
          variant="bordered"
          classNames={{
            inputWrapper: "bg-white data-[focus=true]:bg-white data-[hover=true]:bg-white shadow-none rounded-md",
            input: "text-medium ",
            innerWrapper: "bg-[#ffffff]",
            label: "text-black "
          }}
        />

        <div className="grid grid-cols-3 gap-3">
          <Input
            label="Building"
            value={building}
            onChange={(e) => setBuilding(e.target.value)}
            className="max-w-44 mb-4 "
            type="text"
            size="lg"
            variant="bordered"
            classNames={{
              inputWrapper: "bg-white data-[focus=true]:bg-white data-[hover=true]:bg-white shadow-none rounded-md",
              input: "text-medium ",
              innerWrapper: "bg-[#ffffff]",
              label: "text-black "
            }}
          />
          <Input
            label="Floor"
            value={floor}
            onChange={(e) => setFloor(e.target.value)}
            className="max-w-44 mb-4 "
            type="text"
            size="lg"
            variant="bordered"
            classNames={{
              inputWrapper: "bg-white data-[focus=true]:bg-white data-[hover=true]:bg-white shadow-none rounded-md",
              input: "text-medium ",
              innerWrapper: "bg-[#ffffff]",
              label: "text-black "
            }}
          />
          <Input
            label="Apt.No"
            value={apartmentNo}
            onChange={(e) => setApartment(e.target.value)}
            className="max-w-44 mb-4"
            type="text"
            size="lg"
            variant="bordered"
            classNames={{
              inputWrapper: "bg-white data-[focus=true]:bg-white data-[hover=true]:bg-white shadow-none rounded-md",
              input: "text-medium ",
              innerWrapper: "bg-[#ffffff]",
              label: "text-black "
            }}
          />

        </div>

        <Input
          required
          label="Address directions"
          value={addressDirections}
          onChange={(e) => setAddressDirections(e.target.value)}
          className="max-w-xl mb-4 "
          type="text"
          size="lg"
          variant="bordered"
          classNames={{
            inputWrapper: "bg-white data-[focus=true]:bg-white data-[hover=true]:bg-white shadow-none rounded-md",
            input: "text-medium ",
            innerWrapper: "bg-[#ffffff]",
            label: "text-black "
          }}
        />
        <Button
          variant="shadow"
          color="secondary"
          size="lg"
          fullWidth
          className="max-w-xl mb-4"
          onPress={handleSave}
        >
          Save
        </Button>


      </div>
    </div>
  );
};

export default AddressForm;