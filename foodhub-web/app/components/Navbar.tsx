"use client"


import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@heroui/react";

import { useEffect, useState } from 'react';

export default function CustomNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar maxWidth={'full'} isBlurred={false} className={` fixed w-full transition-colors duration-300 text-4xl  ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`} >
      <NavbarBrand className="pl-10">
        
        <p className="text-4xl font-bold backdrop-blur-3xl ">Food<span className="font-normal">Hub</span></p>
      </NavbarBrand>
      {/* <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link aria-current="page" href="#">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent> */}
      <NavbarContent justify="end"   >
        <NavbarItem className="hidden lg:flex">
          <Link href="#" className="text-2xl">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}


