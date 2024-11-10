import React from 'react'
import Container from './Container'
import { MdArrowRightAlt } from "react-icons/md";

const PowerfulFeaturesWordpress = () => {
    return (
        <Container>
            <div className="mt-10 ">
                <h1 className='text-3xl font-boldm'>Powerful Features with Every <br /> Wordpress hosting Plan</h1>
                <p className='mt-10 font-light'>
                    All of DreamHost's WordPress hosting plans include robust features and add-ons designed to make sure it's easy for you to find success at each step of your online journey. Not only that, we work closely with WordPress.org so you'll always have the newest version of WordPress available in your DreamHost control panel.
                </p>
                <span className='flex items-center justify-start mt-10 ml-5 font-semibold text-blue-700 capitalize'>
                    See all our plans
                    <MdArrowRightAlt />
                </span>
            </div>
            <div className="grid grid-cols-3 gap-10 mt-10">
                <Card
                    imageUrl="winning_support-c206ac0e270775eac620abdfc7929e8c.jpg"
                    title="Award-Winning Support"
                    description="Our in-house and U.S-based experts are on standby for friendly, pro-level support 24/7, 365. No question is too simple or too complex. 2017 Best Support by PCMag.com."
                />
                <Card
                    imageUrl="easy_to_use-0d6e58561873acc341f80f46f174f4f3.jpg"
                    title="Easy-to-Use Panel"
                    description="Get admin access to everything needed to power your website full throttle. Easily create new email accounts, add Let's Encrypt SSL, forward domains, add users, and install WordPress in seconds."
                />
                <Card
                    imageUrl="free_email-578fc28819c21a17b055aa09d965b6a4.jpg"
                    title="Free Email, SSL and Domain"
                    description="We provide a free 'Let's Encrypt' SSL certificate, a domain name from DreamHost with a custom, personalized email address for your domain."
                />
            </div>
        </Container>
    )
}

const Card = ({ imageUrl, title, description }) => {
    return (
        <div className="flex flex-col justify-start">
            <img src={imageUrl} alt={title} />
            <h1 className='my-5 font-bold text-left '>{title}</h1>
            <p className='text-sm font-light'>{description}</p>
        </div>
    )
}
export default PowerfulFeaturesWordpress