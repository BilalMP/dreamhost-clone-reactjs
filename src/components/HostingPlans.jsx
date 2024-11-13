import React, { useState } from 'react'
import Container from './Container'

const HostingPlans = () => {
    const [selected, setSelected] = useState('Prepaid');
    return (
        <Container>
            <div className="flex flex-col justify-center items-center mt-10">
                <h1 className="font-bold text-5xl">
                    Choose Your Hosting Plan
                </h1>
                <div className="flex p-1 mt-10 bg-gray-200 rounded-full">
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
                <div className="grid grid-cols-3 gap-5 mt-10">
                    <PricingCard
                        title="Shared"
                        subtitle="Starter"
                        description="A great place to start! Shared hosting with an entry level price for new sites, including WordPress."
                        priceText="Starting at"
                        price="$2.95/mo"
                        priceNote="SAVE 63% OVER MONTHLY"
                        features={[
                            "1 Website",
                            "Free Domain Included",
                            "Unlimited Traffic",
                            "WordPress Installer",
                            "FREE Automated WordPress Migrations",
                            "All Website Builder",
                            "AI Business Advisor",
                            "Fast SSD Storage",
                            "Free SSL Certificate",
                            "Add Email as low as $1.67/mo",
                            "97 Day Money-Back Guarantee"
                        ]}
                        buttonText="Sign Up Now"
                        learnMoreText="Learn More About Shared"
                    />
                    <PricingCard
                        title="DreamPress"
                        subtitle=""
                        description="Specifically designed for WordPress — high-performance and hassle-free so you can focus on building your business."
                        priceText="First year at"
                        price="$16.95/mo"
                        priceNote="then $19.99/mo 15% OFF"
                        features={[
                            "1 WordPress Website",
                            "Free Domain Included",
                            "~100k Monthly Visitors",
                            "Unmetered Bandwidth",
                            "30GB SSD Storage",
                            "WordPress Installer",
                            "SSL Certificate Pre-Installed",
                            "Unlimited Email",
                            "24/7 WordPress Support",
                            "All Website Builder",
                            "AI Business Advisor",
                            "FREE Priority Site Migration",
                            "On-Demand Backups & 1-Click Restore",
                            "2 Weeks of Backups",
                            "Fast NGINX Hosting",
                            "1-Click Staging"
                        ]}
                        buttonText="Sign Up Now"
                        learnMoreText="Learn More About DreamPress"
                    />
                    <PricingCard
                        title="VPS"
                        subtitle="2GB | Business"
                        description="For growing small businesses"
                        priceText="Starting at"
                        price="$13.75/mo"
                        priceNote="SAVE 64% OVER MONTHLY"
                        features={[
                            "Unlimited Websites",
                            "Add Domains Easily",
                            "Unlimited Traffic",
                            "Unmetered Bandwidth",
                            "60 GB SSD Storage",
                            "1-Click Install WordPress",
                            "Free SSL Certificate",
                            "Unlimited Email",
                            "AI Business Advisor",
                            "24/7 Support"
                        ]}
                        buttonText="Sign Up Now"
                        learnMoreText="Learn More About VPS"
                    />
                </div>
            </div>
        </Container>
    )
}

export default HostingPlans

const PricingCard = ({ title, subtitle, description, priceText, price, priceNote, features, buttonText, learnMoreText }) => (
    <div className="bg-white rounded-lg shadow-lg m-4 border-t-[30px] border-blue-600 w-[400px] max-h-fit pb-10">
        <div className="flex justify-center items-center mb-4 h-[60px] bg-slate-100 space-x-5">
            <h2 className="text-xl font-bold">{title}</h2>
            <span className="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">{subtitle}</span>
        </div>
        <p className='text-xl font-normal mx-10 my-10 h-[125px] text-center'>{description}</p>
        <p className="text-gray-600 mb-4 flex items-center justify-center flex-col">
            <span className='font-semibold text-xl'>{priceText}</span>
            <span className='text-blue-600 font-bold text-4xl mt-5'>{price}</span>
        </p>
        <div className="flex justify-center items-center mb-5">
            <p className='p-1 text-xs text-blue-900 bg-blue-200 rounded-lg max-w-fitn px-2'>{priceNote}</p>
        </div>
        <ul className="text-gray-700 mb-6 flex flex-col justify-center items-center">
            {features.map((feature, index) => (
                <li key={index} className="mb-2 font-light hover:underline">{feature}</li>
            ))}
        </ul>
        <div className="flex justify-center items-center px-5">
            <button className="bg-blue-500 text-white text-lg font-bold py-2 px-4 w-full rounded mb-4">{buttonText}</button>
        </div>
        <p className="text-blue-500 text-sm text-center font-semibold">{learnMoreText}</p>
    </div>
);