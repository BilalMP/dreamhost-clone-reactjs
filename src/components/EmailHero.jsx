import React from 'react'
import Container from './Container'
import { MdOutlineMail } from "react-icons/md";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { MdBlock } from "react-icons/md";
import { FiFilter } from "react-icons/fi";
import { IoIosArrowRoundDown } from "react-icons/io";

const EmailHero = () => {
    return (
        <div className='bg-black text-white py-10'>
            <Container>
                <div className="flex justify-center items-center">
                    <div className="left w-1/2">
                        <p className='p-1 text-xs text-purple-900 bg-purple-400 rounded-lg max-w-fit'>Starting at $2.59/mo</p>
                        <h1 className='text-5xl font-bold'>
                            Professional Email @yourdomain
                        </h1>
                        <div className="flex justify-start items-start gap-5 mt-10">
                            <Card icon={<MdOutlineMail />} description="Huge 25GB Storage per Mailbox" />
                            <Card icon={<AiOutlineLoading3Quarters />} description="Mobile and Desktop Sync" />
                            <Card icon={<MdBlock />} description="Ad-Free Webmail Built In" />
                            <Card icon={<FiFilter />} description="Spam, Virus, and Phishing Filters" />
                        </div>
                        <div className="flex items-center justify-start my-5 space-x-5 mt-10">
                            <button className='px-4 py-2 font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700'>
                                Get Started
                            </button>
                            <button className='flex items-center justify-center px-4 py-2 font-bold text-white border-2 border-white rounded-lg'>
                                View Plans
                                <IoIosArrowRoundDown className='text-2xl text-white' />
                            </button>
                        </div>
                    </div>
                    <div className="right w-1/2">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/bka99GFvC0Y?si=VMWnj9Xst8t5Yrzl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen ></iframe>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default EmailHero

const Card = ({ icon, description }) => {
    return (
        <div className="gap-3 flex flex-col justify-start items-start">
            {icon}
            <p className='font-light text-xs'>{description}</p>
        </div>
    )
}