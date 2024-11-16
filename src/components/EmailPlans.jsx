import React from 'react'
import Container from './Container'
import { TfiEmail } from "react-icons/tfi";

const EmailPlans = () => {
    return (
        <Container>
            <div className="flex justify-center items-center py-10 gap-5">
                <div className="left w-1/3 flex items-center justify-center flex-col mr-10">
                    <h1 className="text-4xl font-bold mb-4">Affordable Email Plans</h1>
                    <div className="flex justify-center items-center mb-4 mx-10">
                        <TfiEmail className='font-bold text-blue-600 text-[200px] mr-10' />
                        <div>
                            <h2 className="text-2xl font-bold">No website?</h2>
                            <h2 className="text-2xl font-bold">No problem.</h2>
                            <p className="text-gray-600 mt-5 font-light">DreamHost email works with any domain name you own -- even if it's registered, hosted, or parked somewhere else.</p>
                        </div>
                    </div>
                </div>
                <Card borderColor="border-blue-600" imageLogo={<TfiEmail className='font-bold text-blue-600 text-[50px]' />} title="Email" subscription="MONTHLY" description="Powerful, yet simple, reliable email @ your domain, with no need to change your hosting plan!" priceText="Starting at" price="$1.99/mo" priceColor="text-blue-600" priceNote="per mailbox" statement="No Commitments or Contracts" statementBgColor="bg-blue-200" features={["25GB Storage per Mailbox", "Mobile and Desktop Sync", "Ad-Free Webmail"]} buttonText="Sign Up Now" textColor="text-white" bgColor="bg-blue-600" />
                <Card borderColor="border-black" imageLogo={<TfiEmail className='font-bold text-blue-600 text-[50px]' />} title="Email" subscription="YEARLY" description="Powerful, yet simple, reliable email @ your domain, with no need to change your hosting plan!" priceText="Starting at" price="$1.67/mo" priceColor="text-black" priceNote="per mailbox" statement="SAVE 16% OVER MONTHLY" statementBgColor="bg-slate-200" features={["25GB Storage per Mailbox", "Mobile and Desktop Sync", "Ad-Free Webmail"]} buttonText="Sign Up Now" textColor="text-white" bgColor="bg-blue-600" />
            </div>
        </Container>
    )
}

export default EmailPlans

const Card = ({ borderColor, imageLogo, title, subscription, description, priceText, price, priceColor, priceNote, statement, statementBgColor, features, buttonText, textColor, bgColor }) => {
    return (
        <div className={`border-t-8 ${borderColor} rounded-lg shadow-xl p-6 w-[400px]`}>
            <div className="flex flex-col justify-center items-center">
                {imageLogo}
                <h3 className="text-xl font-bold mb-2 mt-3">{title}</h3>
                <span className="text-sm font-semibold px-2 py-1 rounded-full mb-4 uppercase border-2 border-black">{subscription}</span>
                <p className="text-center mb-4 mx-10">{description}</p>
                <p className="text-center mb-4 mt-5 font-bold text-xl">{priceText}</p>
                <p className={`text-3xl font-bold ${priceColor} mb-2`}>{price}</p>
                <p className={`text-center ${priceColor} mb-4 font-bold text-md`}>{priceNote}</p>
                <p className={`px-3 py-1 text-xs uppercase rounded-lg max-w-fit text-center ${priceColor} ${statementBgColor}`}>{statement}</p>
                <ul className="text-gray-600 text-center mt-6">
                    {
                        features.map((feature, index) => (
                            <li key={index} className="mb-2 font-light hover:underline">{feature}</li>
                        ))
                    }
                </ul>
                <button className={`${bgColor} ${textColor} font-bold py-2 px-4 rounded-full mt-5`}>{buttonText}</button>
            </div>
        </div>
    )
}