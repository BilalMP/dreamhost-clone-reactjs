import React from 'react'
import Container from './Container'
import { PiCursorClickFill } from "react-icons/pi";
import { FaRegCalendar } from "react-icons/fa6";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { FaNotesMedical } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";
import { BsStars } from "react-icons/bs";

const WebsiteFeatures = () => {
    return (
        <Container>
            <div className="grid grid-cols-3 gap-10 my-[50px] mx-10">
                <Card icon={<PiCursorClickFill className='text-blue-600 w-[50px] h-[50px]' />} title="One- Click Install" description="Install via the WordPress Install Assistant in the DreamHost control panel." />
                <Card icon={<FaRegCalendar className='text-blue-600 w-[50px] h-[50px]' />} title="AI Website Generation" description="Create a personalized WordPress website in less than 60 seconds by providing a few details to the AI."/>
                <Card icon={<MdOutlinePeopleAlt className='text-blue-600 w-[50px] h-[50px]' />} title="Site Assistant" description="Personalized WordPress dashboard with smart tasks so the next steps are always clear." />
                <Card icon={<FaNotesMedical className='text-blue-600 w-[50px] h-[50px]' />} title="AI Content Creator" description="Create and edit copy with the help of AI directly inside the WordPress editor. Generate AI images or select from millions of free stock images." />
                <Card icon={<CgWebsite className='text-blue-600 w-[50px] h-[50px]' />} title="Design Library" description="Choose from hundreds of beautifully designed, WordPress-native block patterns and page templates." />
                <Card icon={<BsStars className='text-blue-600 w-[50px] h-[50px]' />} title="AI-Powered Help Center" description="Knowledge base, tours, and chatbot help right where it’s needed - in the WordPress dashboard." />
            </div>
        </Container>
    )
}

export default WebsiteFeatures


const Card = ({ icon, title, description }) => {
    return (
        <div className="flex flex-col justify-start items-start">
            {icon}
            <h1 className='text-lg font-bold'>{title}</h1>
            <p className='font-normal w-[400px]'>{description}</p>
        </div>
    )
}