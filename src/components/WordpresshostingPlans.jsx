import React, { useState } from 'react'
import Container from './Container'
import { FaWordpressSimple } from "react-icons/fa";
import { IoIosArrowRoundDown } from "react-icons/io";

const WordpresshostingPlans = () => {
    const [selected, setSelected] = useState('Prepaid');
    return (
        <Container>
            <div className="flex justify-center items-center flex-col mt-[50px]">
                <h1 className='capitalize text-4xl font-bold'>wordpress hosting plans</h1>
                <p className='font-light text-sm mt-7'>Fast, secure, and optimized for WordPress.</p>
                <div className="flex bg-gray-200 rounded-full p-1 mt-10">
                    <button
                        className={`px-4 py-2 rounded-full focus:outline-none ${selected === 'Monthly' ? 'bg-blue-500 text-white' : 'text-black'}`}
                        onClick={() => setSelected('Monthly')}
                    >
                        Monthly
                    </button>
                    <button
                        className={`px-4 py-2 rounded-full focus:outline-none ${selected === 'Prepaid' ? 'bg-blue-500 text-white' : 'text-black'}`}
                        onClick={() => setSelected('Prepaid')}
                    >
                        Prepaid
                    </button>
                </div>
                <div className="flex justify-center items-center space-x-10 mt-10">
                    <PricingCard
                        title="WordPress Business"
                        subtitle="WORDPRESS FOR NEW SITES"
                        description="The most affordable way to get all the basics for your WordPress website - perfect if you're new to WordPress."
                        price="$2.59/mo"
                        priceInfo="SAVE UP TO 68% WITH A 3-YEAR PLAN"
                        buttonText="Sign Up Now"
                        learnMoreText="Learn More About WordPress Business"
                        borderColor="border-blue-500"
                        textColor="text-blue-500"
                        bgColor="bg-blue-500"
                        bgPriceinfo="bg-blue-200"
                        textColorPriceInfo="text-blue-700"
                    />
                    <PricingCard
                        title="DreamPress"
                        subtitle="MANAGED WORDPRESS"
                        description="Fast, optimized WordPress Hosting with professional staging, daily & on-demand backups, custom caching + email."
                        price="$16.95/mo"
                        priceInfo="then $19.99/mo"
                        buttonText="Sign Up Now"
                        learnMoreText="Learn More About DreamPress"
                        borderColor="border-green-500"
                        textColor="text-green-500"
                        bgColor="bg-green-500"
                        bgPriceinfo="bg-green-200"
                        textColorPriceInfo="text-green-700"
                    />
                    <PricingCard
                        title="VPS WordPress"
                        subtitle="POWER MANY SITES"
                        description="The ideal way to support 5 WordPress websites. A high-performance platform with isolated resources and more backend control."
                        price="$10.00/mo"
                        priceInfo="SAVE UP TO 50% WITH A 3-YEAR PLAN"
                        buttonText="Sign Up Now"
                        learnMoreText="Learn More About VPS"
                        borderColor="border-purple-500"
                        textColor="text-purple-500"
                        bgColor="bg-purple-500"
                        bgPriceinfo="bg-purple-200"
                        textColorPriceInfo="text-purple-700"
                    />
                </div>
                <div className="flex justify-center items-center mt-10">
                    <button className='flex justify-center items-center border-2 border-black px-5 py-2 rounded-lg capitalize'>
                        <span>jump to more features and tech specs</span>
                        <IoIosArrowRoundDown className='text-lg ml-3'/>
                    </button>
                </div>
            </div>
        </Container>
    )
}

const PricingCard = ({ title, subtitle, description, price, priceInfo, buttonText, learnMoreText, borderColor, textColor, bgColor, bgPriceinfo, textColorPriceInfo }) => (
    <div className={`border-t-4 ${borderColor} rounded-lg shadow-lg p-6 text-center w-[300px] h-[550px]`}>
        <div className="mb-4 flex justify-center items-center">
            <FaWordpressSimple className={`text-4xl ${textColor}`} />
        </div>
        <h2 className="text-xl font-bold mb-2 capitalize">{title}</h2>
        <h3 className="text-sm font-semibold mb-4 uppercase">{subtitle}</h3>
        <p className="text-gray-600 mb-4 font-normal h-[150px]">{description}</p>
        <p className="text-sm font-semibold mb-3">Starting at</p>
        <p className={`text-3xl font-bold ${textColor} mb-1`}>{price}</p>
        <div className="flex justify-center items-center">
            <p className={`text-xs text-gray-500 mb-4 ${textColorPriceInfo} ${bgPriceinfo} px-2 py-1 mt-3 rounded-lg max-w-fit`} >{priceInfo}</p>
        </div>
        <button className={`w-full py-2 ${bgColor} text-white font-bold rounded mb-4`}>{buttonText}</button>
        <a href="#" className="text-sm text-blue-500">{learnMoreText}</a>
    </div>
);
export default WordpresshostingPlans