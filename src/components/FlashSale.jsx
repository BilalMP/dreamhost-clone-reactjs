import React from 'react'
import Container from './Container'

const FlashSale = () => {
    return (
        <Container>
            <div className="flex items-center justify-center px-10 mb-10">
                <div className="w-[50%] ">
                    <h1 className='text-2xl font-bold capitalize'>DreamHost</h1>
                    <h2 className='mt-5 text-4xl font-bold capitalize'>hosting flash <br /> sale</h2>
                    <p className="mt-5 text-sm">For a limited time, launch your website with incredible <br /> savings.</p>
                    <button className='px-5 py-2 mt-5 text-white capitalize border-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500'>see deals</button>
                    <p className='mt-5 text-sm'>Promotional hosting offers are only available for new account registrations. Promotional domain <br /> offers are available to new and current customers.</p>
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
            <p className='px-3 py-1 mx-auto text-base text-blue-600 uppercase bg-blue-100 rounded-xl'>For a limited time only</p>
            <p className="mt-5 text-sm text-center">Up to</p>
            <h1 className="mt-5 text-2xl font-bold text-center text-blue-600">67% Off</h1>
            <p className='my-5 text-lg font-semibold text-center'>Hosting</p>
        </div>
    )
}

const Domain = (props) => {
    return (
        <div className="flex flex-col items-left rounded-lg shadow-xl py-5 px-5 w-[300px] h-[200px] hover:w-[325px] hover:h-[225px]">
            <p className='px-3 py-1 mx-auto text-base text-green-600 uppercase bg-green-100 rounded-xl'>For a limited time only</p>
            <p className="mt-5 text-sm text-center">Up to</p>
            <h1 className="mt-5 text-2xl font-bold text-center text-green-600">92% Off</h1>
            <p className='my-5 text-lg font-semibold text-center'>Domains</p>
        </div>
    )
}

export default FlashSale