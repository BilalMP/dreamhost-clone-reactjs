import React from 'react'
import Container from './Container'

const PersonaliseLaunch = () => {
    return (
        <Container>
            <div className="flex justify-center items-center mt-10 mx-10">
                <div className="right w-1/2 mr-10">
                    <h1 className='text-6xl font-bold'>Install, Personalize, Launch</h1>
                    <p className='mt-5 font-normal text-lg w-[550px]'>
                        Zero to production at the speed of light. Get your WordPress site up and running with just one click. Install Liftoff Website Builder through the DreamHost control panel’s WordPress Install Assistant, and have your site ready in under a minute. No delays, no complex setups — just a streamlined process that brings your vision to life faster than ever thought possible before.
                    </p>
                </div>
                <div className="left w-1/2">
                    <img src="/power.webp" alt="power" />
                </div>
            </div>
        </Container>
    )
}

export default PersonaliseLaunch