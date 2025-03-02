

"use client";
import {  } from "@heroui/react";
import { Navbar as NavbarComponents, NavbarBrand, NavbarContent, NavbarItem, Link, Button,  Input, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@heroui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../lib/store";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import dynamic from "next/dynamic";
import { setLocation } from "../../lib/features/address/addressSlice";
import Map from "../components/map/Map";


export default function Navbar() {
   
    const [isScrolled, setIsScrolled] = useState(false);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const address = useSelector((state: RootState) => state.address.address);
    const coordinates = useSelector((state: RootState) => ({
      lat: state.address.latitude,
      lng: state.address.longitude,
    }));
  
    const dispatch = useDispatch();

    

  const handleConfirm = () => {
    if (coordinates.lat && coordinates.lng) {
      dispatch(setLocation({ address, latitude: coordinates.lat, longitude: coordinates.lng }));
      
    }
  };
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
        
        
        <NavbarComponents
            maxWidth={"full"}
            isBlurred={false}
            className={`fixed w-full transition-colors duration-300  ${isScrolled ? "bg-white shadow-md" : "bg-transparent"
                }`}
            data-testid="navbar"
        >
            {/* Sol: Logo */}
            <NavbarBrand className=" " >
                <Link href="/" color="secondary" className="text-md sm:text-xl  lg:text-4xl font-bold backdrop-blur-3xl" role="heading">
                    Food<span className="font-normal">Hub</span>
                </Link>
            </NavbarBrand>

            {/* Ortada: Adres + Arama Çubuğu + Sepet (Eğer adres varsa göster) */}
            {address && (
                <NavbarContent justify="center" className="flex-1  w-full ">
                    {/* Adres Bilgisi */}
                    <NavbarItem className="relative hidden lg:flex  w-40  xl:w-80  overflow-x-hidden text-medium font-semibold  bg-gray-100 px-4 py-2 rounded-lg ">
                    <MdOutlineLocationOn className="text-2xl text-default-900 pointer-events-none flex-shrink-0" />
                        <span className="text-[12px] truncate pr-2">{address}</span>
                    <FaChevronDown className="absolute  right-0 top-1/2 -translate-y-1/2  bg-transparent text-2xl text-default-900 cursor-pointer flex-shrink-0 " onClick={onOpenChange} />
                    </NavbarItem>

                    {/* Arama Kutusu */}
                    <NavbarItem className="flex-1 md:mx-4   min-w-[7rem] min-[440px]:w-[12rem]   min-[500px]:w-[16rem]  min-[600px]:w-[20rem]  min-[600px]:text-medium  sm:w-[23rem]  xl:w-[27rem] 2xl:w-[40rem]   min-[1700px]:w-[55rem]   text-sm md:text-xl  ">
                        <input
                            type="text"
                            placeholder="Search Foodhub"
                            className="w-full px-1 md:px-4 py-2 border rounded-lg"
                        />
                    </NavbarItem>

                    {/* Sepet İkonu */}
                    <NavbarItem>
                        <FaShoppingCart className="text-sm md:text-2xl cursor-pointer" />
                    </NavbarItem>
                </NavbarContent>
            )}

            {/* Sağ: Login & Sign Up */}
             <NavbarContent justify="end" className={ "-pl-16   " } >
                <NavbarItem className="hidden lg:flex ">
                    <Link href="#" className="text-xs md:text-xl">
                        Login
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="primary" href="#" variant="ghost" className="text-xs  sm:text-lg md:text-xl ">
                        Sign Up
                    </Button>
                </NavbarItem>
            </NavbarContent> 
           
        </NavbarComponents>
    {/* 📌 Map*/}
    <Modal size="5xl" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Konum Seç</ModalHeader>
              <ModalBody>
                {/* 📌 Harita */}
                {/* <div className="mt-4 w-full h-[570px]">
                  <Map
                    address={address || defaultLocation.address}
                    setAddress={(addr : any) => dispatch(setLocation({
                      address: addr,
                      latitude: coordinates.lat || defaultLocation.latitude,
                      longitude: coordinates.lng || defaultLocation.longitude,
                    }))}
                    setCoordinates={({ lat, lng }) => dispatch(setLocation({
                      address,
                      latitude: lat,
                      longitude: lng
                    }))}
                    coordinates={coordinates.lat ? coordinates : { lat: defaultLocation.latitude, lng: defaultLocation.longitude }}
                  />
                </div> */}
              </ModalBody>

            
             
            </>
          )}
        </ModalContent>
      </Modal>
        </>
    );
}


