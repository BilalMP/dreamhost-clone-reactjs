import React from 'react'
import Container from './Container'
const AiWebsiteBuilder = () => {
    return (
        <Container>
            <div className="mx-10 mt-10">
                <h1 className="text-6xl font-bold capitalize">liftoff AI <br /> website builder</h1>
                <p className="mt-5 text-base font-light">Launch a professional WordPress website in minutes – effortlessly <br /> customize, optimize, and grow with Liftoff.</p>
                <button className='px-5 py-2 mt-5 text-white capitalize bg-blue-700 border-2 rounded-lg'>blast off!</button>
                <img src="ai-website-builder.webp" alt="Ai website builder" className='mt-10 border-none rounded-none' />
            </div>
        </Container>
    )
}

export default AiWebsiteBuilder