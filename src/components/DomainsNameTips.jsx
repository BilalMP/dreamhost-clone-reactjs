import React from 'react'
import Container from './Container'
import { CiSearch } from "react-icons/ci";
import { FaRegKeyboard } from "react-icons/fa";
import { MdOutlineNoteAlt } from "react-icons/md";

const DomainsNameTips = () => {
    return (
        <Container>
            <div className="flex justify-center items-center my-10">
                <div className="left w-1/2 flex justify-center items-center flex-col">
                    <h1 className='font-bold text-5xl w-[500px]'>
                        Some Tips on Getting a Great Domain Name
                    </h1>
                    <p className='font-light text-sm mt-5'>
                        After selling over a million domains, we've learned a few things.
                    </p>
                </div>
                <div className="right w-1/2 flex justify-center items-center">
                    <img src="/some_tips_group.webp" alt="some tips" className='w-[500px]' />
                </div>
            </div>

            <div className="grid grid-cols-3 mx-10">
                <Card image={<CiSearch className='w-[50px] h-[50px] text-blue-600' />} title="Use our Domains Search Tool" description="Get domain availabilities, prices, and even suggestions by using our Domains Search Tool." />
                <Card image={<FaRegKeyboard className='w-[50px] h-[50px] text-green-600'/>} title="Keep it Concise" description="The maximum length of a domain name is 253 characters. The sites most of us visit are way less. Keep it simple to stay memorable." />
                <Card image={<MdOutlineNoteAlt className='w-[50px] h-[50px] text-purple-600'/>} title="Reserve Your Name" description="Personal domain names are a good +1 to your owned domains. Use your own name as a property to forward visitors to sites you want associated with yourself." />
            </div>
        </Container>
    )
}

export default DomainsNameTips

const Card = ({ image, title, description }) => {
    return (
        <div className="flex flex-col justify-start items-start w-[400px] h-[200px]">
            {image}
            <h1 className='font-bold text-lg'>{title}</h1>
            <p className='font-light text-md mt-3'>{description}</p>
        </div>
    )
}