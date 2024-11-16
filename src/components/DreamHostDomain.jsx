import React from 'react'
import Container from './Container'

const DreamHostDomain = () => {
    return (
        <div className='bg-black text-white mb-10'>
            <Container>
                <div className="flex flex-col justify-center items-center my-10">
                    <h1 className="text-5xl font-bold">
                        Why DreamHost for Domains?
                    </h1>
                    <p className='font-light text-sm mt-5'>
                        We've got features that others don't.
                    </p>
                </div>
                <CardLeft imageUrl="/private_reg_group.webp" headingTextNormal="FREE" headingTextSecondary="Private Registration" headingTextColor="text-purple-800" description="We believe you should be able to control how much of your personal information is shared online. Our WHOIS Domain Privacy is included at NO COST (for the life of your domain) and will renew automatically." />
                <CardRight imageUrl="/subdomains_group.webp" headingTextNormal="FREE" headingTextSecondary="Subdomains" headingTextColor="text-green-800" description="Need a bunch of subdomains for your site? No worries. Enjoy UNLIMITED subdomains with Shared, VPS, and Dedicated hosting." />
                <CardLeft imageUrl="/domain_transfers_group_mt.webp" headingTextNormal="Domain Transfers" headingTextSecondary="Made Easy" headingTextColor="text-blue-800" description="Consolidate all of your domains under one account by transferring to DreamHost. Enjoy all of the above benefits, and stop wasting money on private registration fees." />
                <CardRight imageUrl="/simple_domain_group.webp" headingTextNormal="Simple" headingTextSecondary="Domain Management" headingTextColor="text-orange-800" description="A single page in our panel makes it possible to manage domains, edit DNS records, setup domain forwarding, and more. If you get stuck, our support is here 24/7 for you." />
            </Container>
        </div>
    )
}

export default DreamHostDomain

const CardLeft = ({ headingTextNormal, headingTextSecondary, headingTextColor, description, imageUrl }) => {
    return (
        <div className="flex justify-center items-center mx-10 mb-10">
            <div className="left w-1/2 mr-10 flex justify-center items-center">
                <div className="w-[500px]">
                    <h1 className='text-xl font-bold'>
                        <span className='mr-3'>{headingTextNormal}</span>
                        <span className={`${headingTextColor}`}>{headingTextSecondary}</span>
                    </h1>
                    <p className='font-light text-sm'>
                        {description}
                    </p>
                </div>
            </div>
            <div className="right w-1/2 flex justify-center items-center">
                <img src={imageUrl} alt="Dreamhost Domains" className='w-[500px]'/>
            </div>
        </div>
    )
}

const CardRight = ({ headingTextNormal, headingTextSecondary, headingTextColor, description, imageUrl }) => {
    return (
        <div className="flex justify-center items-center mx-10 mb-10">
            <div className="left w-1/2 flex justify-center items-center">
                <img src={imageUrl} alt="Dreamhost Domains" className='w-[500px]' />
            </div>
            <div className="right w-1/2 mr-10 flex justify-center items-center">
                <div className="w-[500px]">
                    <h1 className='text-xl font-bold'>
                        <span className='mr-3'>{headingTextNormal}</span>
                        <span className={`${headingTextColor}`}>{headingTextSecondary}</span>
                    </h1>
                    <p className='font-light text-sm'>
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}