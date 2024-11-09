import React from 'react'
import Container from './Container'
import { GoArrowRight } from "react-icons/go";
import { CgWebsite } from "react-icons/cg";
import { FaChartLine } from "react-icons/fa6";

const MoveFaster = () => {
    return (
        <Container>
            <div className="flex justify-center items-center my-10 px-10">
                <div className="left w-1/2">
                    <h1 className='font-bold text-4xl'>Ready to move <br />faster?</h1>
                    <p className='font-light mt-5'>
                        We make it easy to tap into 20+ years of experience – our <br />
                        web experts will tackle whatever you need for a <br />
                        successful site.
                    </p>
                    <button className='font-semibold mt-5 bg-blue-700 text-white rounded-lg px-5 py-2 flex justify-start items-center space-x-5 hover:bg-blue-500'>
                        <span>Learn more</span>
                        <GoArrowRight />
                    </button>
                </div>
                <div className="right w-1/2 grid grid-cols-2 gap-10">
                    <WebDesign />
                    <SiteManagement />
                    <SEOMarketing />
                    <WebDevelopment />
                </div>
            </div>
        </Container>
    )
}

const WebDesign = () => {
    return (
        <div className="flex flex-col shadow-xl rounded-2xl p-5">
            <CgWebsite className='text-blue-700 w-[100px] h-[50px]' />
            <div className="flex justify-between items-center mx-7 mt-5">
                <p className='font-semibold'>Web <br /> Design</p>
                <GoArrowRight />
            </div>
        </div>
    )
}

const SiteManagement = () => {
    return (
        <div className="flex flex-col shadow-xl rounded-2xl p-5">
            <CgWebsite className='text-green-700 w-[100px] h-[50px]' />
            <div className="flex justify-between items-center mx-7 mt-5">
                <p className='font-semibold'>Site <br /> Management</p>
                <GoArrowRight />
            </div>
        </div>
    )
}

const SEOMarketing = () => {
    return (
        <div className="flex flex-col shadow-xl rounded-2xl p-5">
            <FaChartLine className='text-purple-700 w-[100px] h-[50px]' />
            <div className="flex justify-between items-center mx-7 mt-5">
                <p className='font-semibold'>SEO <br /> Marketing</p>
                <GoArrowRight />
            </div>
        </div>
    )
}

const WebDevelopment = () => {
    return (
        <div className="flex flex-col shadow-xl rounded-2xl p-5">
            <CgWebsite className='text-blue-700 w-[100px] h-[50px]' />
            <div className="flex justify-between items-center mx-7 mt-5">
                <p className='font-semibold'>Web <br /> Development</p>
                <GoArrowRight />
            </div>
        </div>
    )
}
export default MoveFaster