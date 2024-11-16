import React from 'react'
import Container from './Container'
import { IoIosArrowRoundDown } from "react-icons/io";

const DomainPricing = () => {
    return (
        <div className='bg-slate-100'>
            <Container>
                <div className="flex flex-col justify-center items-center my-[80px]">
                    <h1 className='capitalize font-bold text-5xl mb-10'>Straightforward Domain Pricing</h1>
                    <p classname='font-light text-sm'>
                        400+ TLDs as unique as your business.
                    </p>
                    <div className="grid grid-cols-3 gap-5 mt-10">
                        <Card imageUrl="/logo.biz.color.svg" description="$14.99/1st year" />
                        <Card imageUrl="/download.png" description="$39.99/1st year" />
                        <Card imageUrl="/logo.online.color.svg" description="$1.99/1st year" />

                        <Card imageUrl="/logo.club.color.svg" description="$9.99/1st year" />
                        <Card imageUrl="/logo.xyz.color.svg" description="$1.99/1st year" />
                        <Card imageUrl="/logo.shop.color.svg" description="$0.99/1st year" />

                        <Card imageUrl="/logo.me.color.svg" description="$2.99/1st year" />
                        <Card imageUrl="/logo.us.color.svg" description="$9.99/1st year" />
                        <Card imageUrl="/logo.store.color.svg" description="$2.99/1st year" />

                        <Card imageUrl="/logo.blog.color.svg" description="$4.99/1st year" />
                        <Card imageUrl="/logo.tech.color.svg" description="$9.99/1st year" />
                        <Card imageUrl="/logo.design.color.svg" description="$39.99/1st year" />

                        <Card imageUrl="/logo.art.color.svg" description="$2.99/1st year" />
                        <Card imageUrl="/logo.cloud.color.svg" description="$1.99/1st year" />
                        <Card imageUrl="/logo.click.color.svg" description="$1.99/1st year" />
                    </div>
                </div>
                <div className="flex items-center justify-center mt-5 mb-10">
                    <button className='flex items-center justify-center px-5 py-2 capitalize border-2 border-black rounded-lg'>
                        <span>See All Domains Prices</span>
                        <IoIosArrowRoundDown className='ml-3 text-lg' />
                    </button>
                </div>
            </Container>
        </div>
    )
}

export default DomainPricing

const Card = ({ imageUrl, description }) => {
    return (
        <div className="bg-white w-[400px] h-[250px] text-black flex justify-center items-center flex-col">
            <img src={imageUrl} alt="Logo" className='w-[100px]' />
            <p className="text-xs font-light mt-10">{description}</p>
        </div>
    )
}