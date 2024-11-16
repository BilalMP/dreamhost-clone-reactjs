import React from 'react'
import Container from './Container'

const WebsiteBuilderPlan = () => {
    return (
        <Container>
            <div className="flex justify-center items-center flex-col mt-10">
                <h1 className='font-bold text-6xl capitalize'>WordPress + Website Builder Plans</h1>
                <p className='font-light text-md mt-5'>Hosting included along with a money-back guarantee.</p>
            </div>
            <div className="grid grid-cols-3 gap-5">
                <PricingCard
                    title="Shared Starter"
                    description="Great for new WordPress sites or small sites without much traffic that are just getting started."
                    priceText="Starting at"
                    price="$2.95/mo"
                    priceNote="SAVE 63% OVER MONTHLY"
                    features={[
                        "1 Website",
                        "Free Domain Included",
                        "-",
                        "AI Website Builder",
                        "AI Business Advisor",
                        "Quick-Start Inspirations Wizard",
                        "Premium Starter Sites",
                        "Post & Page Builder",
                        "SEO Recommender"
                    ]}
                    buttonText="Sign Up Now"
                    textColor="text-blue-600"
                    bgColor="bg-blue-200"
                    borderColor="border-blue-600"
                    buttonBgColor="bg-blue-600"
                />
                <PricingCard
                    title="Shared Unlimited"
                    description="Perfect for supporting lots of WordPress sites, larger sites, and even includes email hosting @ your domain"
                    priceText="First year at"
                    price="$16.95/mo"
                    priceNote="then $19.99/mo 15% OFF"
                    features={[
                        "Unlimited Websites",
                        "Free Domain Included",
                        "Email Included",
                        "AI Website Builder",
                        "AI Business Advisor",
                        "Quick-Start Inspirations Wizard",
                        "Premium Starter Sites",
                        "Post & Page Builder",
                        "SEO Recommender"
                    ]}
                    buttonText="Sign Up Now"
                    textColor="text-purple-600"
                    bgColor="bg-purple-200"
                    borderColor="border-purple-600"
                    buttonBgColor="bg-purple-600"
                />
                <PricingCard
                    title="VPS Business"
                    description="For growing small businesses"
                    priceText="Starting at"
                    price="$13.75/mo"
                    priceNote="SAVE 64% OVER MONTHLY"
                    features={[
                        "2 GB RAM",
                        "60 GB SSD Storage",
                        "Unlimited Websites",
                        "Unlimited Traffic",
                        "Free SSL Certificate",
                        "Unlimited Email @ Your Domain",
                        "AI Business Advisor",
                    ]}
                    buttonText="Sign Up Now"
                    textColor="text-black"
                    bgColor="bg-gray-200"
                    borderColor="border-black"
                    buttonBgColor="bg-black"
                />
            </div>
        </Container>
    )
}

export default WebsiteBuilderPlan

const PricingCard = ({ title, description, priceText, price, priceNote, features, buttonText, textColor, bgColor, borderColor, buttonBgColor }) => (
    <div className={`rounded-lg shadow-lg m-4 border-t-[30px] w-[400px] ${borderColor} pb-10 h-[800px]`}>
        <div className="flex justify-center items-center h-[100px] ">
            <h2 className="text-xl font-bold">{title}</h2>
        </div>
        <p className='text-lg font-light mx-10 my-5 h-[100px] text-center'>{description}</p>
        <p className="text-gray-600 mb-4 flex items-center justify-center flex-col">
            <span className='font-semibold text-xl'>{priceText}</span>
            <span className={`${textColor} font-bold text-4xl mt-5`}>{price}</span>
        </p>
        <div className="flex justify-center items-center mb-5">
            <p className={`p-1 text-xs ${textColor} ${bgColor} rounded-lg max-w-fit px-2`}>{priceNote}</p>
        </div>
        <ul className="text-gray-700 mb-6 flex flex-col justify-start items-center h-[275px]">
            {features.map((feature, index) => (
                <li key={index} className="mb-2 font-light hover:underline">{feature}</li>
            ))}
        </ul>
        <div className="flex justify-center items-center px-5">
            <button className={`${buttonBgColor} text-white text-lg font-bold py-2 px-4 w-full rounded mb-4`}>{buttonText}</button>
        </div>
    </div>
);