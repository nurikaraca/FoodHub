import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { FaTwitterSquare } from "react-icons/fa";


const Footer = () => {
    return (
        <div className='w-full py-16 px-6 h-[560px] '>
            <div className="w-full border-y border-slate-300/20 "></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto  h-[480px] w-full ">
                <div className="md:p-10  w-full flex flex-col justify-between  ">
                    <h1 className="pt-10 text-4xl font-bold backdrop-blur-3xl ">Food<span className="font-normal">Hub</span></h1>
                    <div className="flex flex-col md:flex-row gap-6  pb-2">
                        <Image
                            src={"/store/google-play.png"}
                            alt='google play'
                            width={190}
                            height={55}
                        />
                        <Image
                            src={"/store/play-store.png"}
                            alt='google play'
                            width={190}
                            height={55}
                        />
                    </div>

                </div>
                {/*  Links */}
                <div className="col-span-2 flex justify-end items-start text-xl ">
                    <div className="grid grid-cols-2 gap-20 md:pt-20">
                        <div className="flex flex-col gap-5  ">
                            <Link href="/help" className="hover:underline">
                                Get Help
                            </Link>
                            <Link href="/gift-cards" className="hover:underline">
                                Buy gift cards
                            </Link>
                            <Link href="/add-restaurant" className="hover:underline">
                                Add your restaurant
                            </Link>
                            <Link href="/deliver" className="hover:underline">
                                Sign up to deliver
                            </Link>
                            <Link href="/business-account" className="hover:underline">
                                Create a business account
                            </Link>
                            <Link href="/promotions" className="hover:underline">
                                Promotions
                            </Link>

                        </div>

                        <div className="flex flex-col gap-5 ">
                            <Link href="/restaurants-near-me" className="hover:underline">
                                Restaurants near me
                            </Link>
                            <Link href="/cities" className="hover:underline">
                                View all cities
                            </Link>
                            <Link href="/countries" className="hover:underline">
                                View all countries
                            </Link>
                            <Link href="/pickup-near-me" className="hover:underline">
                                Pickup near me
                            </Link>
                            <Link href="/about" className="hover:underline">
                                About FoodHub
                            </Link>
                            <Link href="/groceries" className="hover:underline">
                                Shop groceries
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full border-y border-slate-300/20 mt-52 md:mt-2"></div>

            <div className="grid grid-cols-1 md:grid-cols-[20%_80%] gap-6 max-w-7xl mx-auto  h-40  w-full  mt-4">
                <div className="flex gap-5  items-center px-5  ">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebookSquare className=" text-3xl hover:text-gray-300" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitterSquare className=" text-3xl hover:text-gray-300" />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <LuInstagram className=" text-3xl hover:text-gray-300" />
                    </a>
                </div>
                <div className="flex flex-col  h-full justify-center px-5    ">
                    <div className="flex flex-col md:flex-row  gap-5 text-medium justify-end  w-full my-10">
                        <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
                        <Link href="/terms" className="hover:underline">Terms</Link>
                        <Link href="/pricing" className="hover:underline">Pricing</Link>
                        <Link href="/do-not-sell" className="hover:underline ">Do not sell or share my personal information</Link>
                    </div>

                    <div className="flex flex-col md:flex-row   gap-5  text-medium  justify-end w-full ">
                        <p>
                            This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
                        <p>© 2025 FoodHub Technologies Inc. </p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer