import React from 'react'
import Container from './Container'

const WordpressHelp = () => {
    return (
        <Container>
            <div className="flex flex-col justify-center items-center mt-[60px]">
                <h1 className='text-4xl font-bold'>We're Always Here to Help...</h1>
                <div className="grid grid-cols-2 gap-10 mt-10 mx-[70px]">
                    <Card
                        imageUrl="wordpress_team-30260c9b93139dd66c0e948065073085.jpg"
                        title="Dedicated WordPress Team"
                        description="Intensively-trained and even consisting of WordPress core contributors, DreamHost's dedicated support team knows the platform inside and out."
                    />
                    <Card
                        imageUrl="in_house-0f7ca109eb5f9645a17a94afc2aeaed0.jpg"
                        title="100% In-House"
                        description="Outsourcing customer service? Not our thing. Our experts take your concerns as seriously you do, diligently providing personalized solutions."
                    />
                    <Card
                        imageUrl="availability-bf13defa1572ffe8a0ab9ae890a4e29f.jpg"
                        title="24/7 Availability"
                        description="Whether you're running an online store or managing a blog, it's important that you can get help = day or night. That's why DreamHost support is always available."
                    />
                    <Card
                        imageUrl="email_or_chat-6bde8001c41e882ceec7a8fd84e5c4d0.jpg"
                        title="Email or Chat"
                        description="DreamHost's award-winning support team is just a few clicks away! Submit a request for your issue or start a live chat - we're here to help you out."
                    />
                </div>
            </div>
        </Container>
    )
}

const Card = ({ imageUrl, title, description }) => {
    return (
        <div className="flex flex-col justify-start mt-5">
            <img src={imageUrl} alt={title} className='w-[500px] h-[300px]' />
            <h1 className='mt-5 text-2xl font-bold capitalize'>{title}</h1>
            <p className='text-sm font-light w-[500px] mt-5'>{description}</p>
        </div>
    )
}
export default WordpressHelp