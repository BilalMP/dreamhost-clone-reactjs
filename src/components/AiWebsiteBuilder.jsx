import React from 'react'
import Container from './Container'
const AiWebsiteBuilder = () => {
    return (
        <Container>
            <div className="mx-10 mt-10">
                <h1 className="font-bold capitalize text-6xl">liftoff AI <br /> website builder</h1>
                <p className="text-base font-light mt-5">Launch a professional WordPress website in minutes – effortlessly <br /> customize, optimize, and grow with Liftoff.</p>
                <button className='capitalize rounded-lg border-2 px-5 py-2 mt-5 bg-blue-700 text-white'>blast off!</button>
                <img src="ai-website-builder.webp" alt="Ai website builder" className='rounded-none mt-10 border-none'/>
            </div>
        </Container>
    )
}

export default AiWebsiteBuilder