import React from 'react'
import Container from './Container'
import { FaArrowRight } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

const ProServicesSuccess = () => {
    return (
        <div className='bg-black text-white pb-10'>
            <Container>
                <div className="flex flex-col justify-center items-center mt-10">
                    <h1 className='text-6xl font-bold'>Everything for Your Site to Succeed</h1>
                    <p className='font-light text-md mt-2'>
                        Whether you want help branding your business, designing your site, or <br />
                        getting more visitors, our experts are here to help.
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-5 mt-10">
                    <Card imageUrl="/istockphoto-1663279091-612x612.jpg" icon={<CgWebsite className='text-6xl' />} title="Web Design & Branding" description="Level up with a professional logo, corporate branding, or a one-of-a-kind custom website."/>
                    <Card imageUrl="/istockphoto-1883285965-612x612.jpg" icon={<CgWebsite className='text-6xl' />} title="Site Management" description="Websites take work – offload backend tasks and free yourself up to focus back on your business."/>
                    <Card imageUrl="/istockphoto-1954640243-612x612.jpg" icon={<CgWebsite className='text-6xl' />} title="Web Development" description="Get the pros to tackle (literally) whatever you need – available on demand or via monthly retainer."/>
                    <Card imageUrl="/istockphoto-2042526830-612x612.jpg" icon={<CgWebsite className='text-6xl' />} title="Web Marketing" description="Tried-and-true services like SEO and social media management to help the right people find your site."/>
                </div>
            </Container>
        </div>
    )
}

export default ProServicesSuccess
const Card = ({ imageUrl, title, icon, description }) => {
    return (
        <div className='rounded-lg shadow-xl h-[400px] bg-cover bg-center px-10 py-10 relative' style={{ backgroundImage: ` url(${imageUrl})` }}>
            <div className='bottom-10 absolute'>
                {icon}
                <p className='font-bold text-lg mt-5'>{title}</p>
                <p className='font-normal w-[75%] mt-5'>{description}</p>
                <button className='flex justify-center items-center mt-5 space-x-5'>
                    <p className='text-lg font-bold '>Learn More</p>
                    <FaArrowRight />
                </button>
            </div>
        </div>
    )
}