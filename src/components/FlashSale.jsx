import React from 'react'
import Container from './Container'

const FlashSale = () => {
    return (
        <Container>
            <div className="flex justify-center items-center mb-10 px-10">
                <div className="w-[50%] ">
                    <h1 className='capitalize text-2xl font-bold'>DreamHost</h1>
                    <h2 className='capitalize text-4xl font-bold mt-5'>hosting flash <br /> sale</h2>
                    <p className="text-sm mt-5">For a limited time, launch your website with incredible <br /> savings.</p>
                    <button className='capitalize rounded-lg border-2 px-5 py-2 mt-5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white'>see deals</button>
                    <p className='text-sm mt-5'>Promotional hosting offers are only available for new account registrations. Promotional domain <br /> offers are available to new and current customers.</p>
                </div>
                <div className="w-[50%] flex justify-center items-center space-x-10">
                    <Hosting />
                    <Domain />
                </div>
            </div>
        </Container>
    )
}

const Hosting = (props) => {
    return (
        <div className="flex flex-col items-left rounded-lg shadow-xl py-5 px-5 w-[300px] h-[200px] hover:w-[325px] hover:h-[225px]">
            <p className='uppercase text-base text-blue-600 bg-blue-100 rounded-xl px-3 py-1 mx-auto'>For a limited time only</p>
            <p className="text-sm text-center mt-5">Up to</p>
            <h1 className="text-2xl text-blue-600 font-bold text-center mt-5">67% Off</h1>
            <p className='text-lg font-semibold text-center my-5'>Hosting</p>
        </div>
    )
}

const Domain = (props) => {
    return (
        <div className="flex flex-col items-left rounded-lg shadow-xl py-5 px-5 w-[300px] h-[200px] hover:w-[325px] hover:h-[225px]">
            <p className='uppercase text-base text-green-600 bg-green-100 rounded-xl px-3 py-1 mx-auto'>For a limited time only</p>
            <p className="text-sm text-center mt-5">Up to</p>
            <h1 className="text-2xl text-green-600 font-bold text-center mt-5">92% Off</h1>
            <p className='text-lg font-semibold text-center my-5'>Domains</p>
        </div>
    )
}

export default FlashSale