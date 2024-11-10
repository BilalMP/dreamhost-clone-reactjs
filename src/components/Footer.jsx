import React from 'react'
import Container from './Container'
import { BsTwitterX } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import FooterCol1 from "../data/FooterCol1";
import FooterCol2 from "../data/FooterCol2";
import FooterCol3 from "../data/FooterCol3";
import FooterCol4 from "../data/FooterCol4";
import FooterCol5 from "../data/FooterCol5";

const Footer = () => {
    return (
        <footer className="bg-black text-white py-10">
            <Container>
                <div className="grid grid-cols-6 mx-10">
                    <div className="flex flex-col justify-start">
                        <h1 className='font-bold text-lg'>DreamHost</h1>
                        <p className="mt-4 text-sm">Connect with us</p>
                        <div className="flex space-x-5 mt-3 mb-5">
                            <BsTwitterX className='m-0' />
                            <IoLogoYoutube />
                            <FaFacebook />
                            <FaInstagram />
                        </div>
                        <p className="text-sm mb-4">Copyright © 2024 <br />DreamHost, LLC</p>
                    </div>
                    <div className="flex flex-col justify-start">
                        <h3 className="font-bold mb-4 uppercase">PRODUCTS</h3>
                        <ul>
                            {FooterCol1.map((item, index) => (
                                <li className='text-xs mb-3 hover:underline cursor-pointer' key={index}>{item.name}</li>
                            ))
                            }
                        </ul>
                    </div>
                    <div className="col-span-1">
                        <h3 className="font-bold mb-4">COMPANY</h3>
                        <ul>
                            {FooterCol2.map((item, index) => (
                                <li className='text-xs mb-3 hover:underline cursor-pointer' key={index}>{item.name}</li>
                            ))
                            }
                        </ul>
                    </div>
                    <div className="col-span-1">
                        <h3 className="font-bold mb-4">LEGAL</h3>
                        <ul>
                            {FooterCol3.map((item, index) => (
                                <li className='text-xs mb-3 hover:underline cursor-pointer' key={index}>{item.name}</li>
                            ))
                            }
                        </ul>
                    </div>
                    <div className="col-span-1">
                        <h3 className="font-bold mb-4">RESOURCES</h3>
                        <ul>
                            {FooterCol4.map((item, index) => (
                                <li className='text-xs mb-3 hover:underline cursor-pointer' key={index}>{item.name}</li>
                            ))
                            }
                        </ul>
                    </div>
                    <div className="col-span-1">
                        <h3 className="font-bold mb-4">LOGIN</h3>
                        <ul>
                            {FooterCol5.map((item, index) => (
                                <li className='text-xs mb-3 hover:underline cursor-pointer' key={index}>{item.name}</li>
                            ))
                            }
                        </ul>
                    </div>
                </div>
            </Container>
        </footer >
    )
}

export default Footer