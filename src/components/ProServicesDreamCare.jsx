import React from 'react'
import Container from './Container'
import { MdOutlineAccessTime } from "react-icons/md";
import { FiBell } from "react-icons/fi";
import { AiOutlineStock } from "react-icons/ai";
import { CiLock } from "react-icons/ci";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { FaRegStickyNote } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

const ProServicesDreamCare = () => {
    return (
        <div className='bg-black text-white'>
            <Container>
                <div className="flex justify-center items-center py-10">
                    <div className="left w-1/2">
                        <img src="/section-introducing.webp" alt="section introducing" className='rounded-xl' />
                    </div>
                    <div className="right w-1/2 flex flex-col justify-start items-start">
                        <h1 className='text-5xl font-bold'>
                            Introducing DreamCare
                        </h1>
                        <p className='text-lg font-light mt-5'>
                            From A to Z, whether you want help branding your business, designing and building your website, or getting more visitors, we’re standing by.
                        </p>
                        <div className="grid grid-cols-2 mt-10 gap-5">
                            <Card icon={<MdOutlineAccessTime className='text-3xl text-blue-600' />} title="24/7 Uptime Monitoring" />
                            <Card icon={<FiBell className='text-3xl text-blue-600' />} title="Managed Software Updates" />
                            <Card icon={<AiOutlineStock className='text-3xl text-blue-600' />} title="Monthly Site Report" />
                            <Card icon={<CiLock className='text-3xl text-blue-600' />} title="Monthly Security Review" />
                            <Card icon={<IoShieldCheckmarkOutline className='text-3xl text-blue-600' />} title="DreamShield Protection" />
                            <Card icon={<FaRegStickyNote className='text-3xl text-blue-600' />} title="Proactive Response SLA (optional)" />
                        </div>
                        <p className='font-medium mt-10 text-2xl'>
                            Starting at just $49/mo
                        </p>
                        <button className='bg-blue-600 text-white flex justify-center items-center px-5 py-2 rounded-lg mt-5 space-x-3'>
                            <p className='text-xl font-bold capitalize'>Learn More</p>
                            <FaArrowRight className='text-xl' />
                        </button>
                    </div>
                </div>

            </Container>
        </div>
    )
}

export default ProServicesDreamCare

const Card = ({ icon, title }) => {
    return (
        <div className="flex justify-start items-start space-x-5">
            {icon}
            <p className='font-bold text-lg text-white'>{title}</p>
        </div>
    )
}