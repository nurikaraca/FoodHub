"use client";
import Image from "next/image";
import { Card, CardHeader, CardBody } from "@heroui/react";
import { Button } from "@heroui/react";

const services = [
  {
    title: "Feed your employees",
    description: "Create a business account",
    image: "/business1.jpg",
    button: "Get Started",
  },
  {
    title: "Your restaurant, delivered",
    description: "Add your restaurant",
    image: "/restaurant.jpg",
    button: "Learn More",
  },
  {
    title: "Deliver with FoodHub",
    description: "Sign up to deliver",
    image: "/food-delivery.jpg",
    button: "Sign Up",
  },
];

const BusinessSection = () => {
  return (
    <div className="w-full py-16 px-6 ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto  ">
        {services.map((service, index) => (
          <Card key={index} className="p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
            <CardHeader className="flex flex-col items-center text-center">
              <Image src={service.image} alt={service.title} width={800} height={400} />
              <h2 className="text-4xl font-bold mt-4 text-slate-900">{service.title}</h2>
            </CardHeader>
            <CardBody className="text-center">
              <a href=" #" className="text-gray-600 underline">{service.description}</a>
              
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BusinessSection;
