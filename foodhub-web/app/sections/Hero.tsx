


"use client";
import { Button, Input, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@heroui/react";
import { FaLocationDot } from "react-icons/fa6";
import { useState } from "react";
import dynamic from "next/dynamic";
import { useDispatch } from "react-redux";
import { setLocation } from "../../lib/features/address/addressSlice";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "../../lib/store";
const Map = dynamic(() => import("../components/map/Map"), { ssr: false });

// 📌 Map bileşenini dinamik olarak yükle
//const Map = dynamic(() => import("../components/Map"), { ssr: false });

import { useEffect } from "react"; 

const Hero = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const address = useSelector((state: RootState) => state.address.address);
  const coordinates = useSelector((state: RootState) => ({
    lat: state.address.latitude,
    lng: state.address.longitude,
  }));

  const dispatch = useDispatch();
  const router = useRouter();

  const defaultLocation = {
    address: "",
    latitude: 41.0082,
    longitude: 28.9784,
  };


  useEffect(() => {
    if (isOpen && !address) {
      dispatch(setLocation(defaultLocation));
    }
  }, [isOpen, address, dispatch]);

  const handleOpenModal = () => {
    onOpen(); 
  };

  return (
    <div
      className="h-screen bg-cover bg-center flex items-center justify-center text-center"
      style={{ backgroundImage: "url('hero4.jpg')" }}
    >
      <div className="w-[60rem] flex flex-row flex-wrap gap-4 items-center justify-center translate-y-[150px] md:translate-y-[320px]">
    
        <Input
          className="w-full sm:w-[400px] md:w-[500px] lg:w-[520px] mx-2"
          classNames={{
            inputWrapper: "h-[50px] md:h-[80px]",
            input: "text-2xl p-8",
          }}
          placeholder="Enter delivery address"
          type="text"
          value={address}
          onClick={handleOpenModal}
          startContent={<FaLocationDot className="text-2xl text-default-900 pointer-events-none flex-shrink-0" />}
        />    
      <Modal size="2xl" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 items-center ">Add Delivery Address</ModalHeader>
              <ModalBody>
                {/* 📌 Harita */}
                <div className="mt-4 w-full h-[510px]">
                  <Map />
                </div>
              </ModalBody>

  
              
            </>
          )}
        </ModalContent>
      </Modal>
    </div>

    </div>
  );
};

export default Hero;
















