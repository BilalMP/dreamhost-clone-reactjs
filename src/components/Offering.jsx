import React from 'react'
import Container from './Container'
const Offering = () => {
    return (
        <Container>
            <div className="flex items-center justify-center px-10 my-10">
                <div className="w-1/2">
                    <h1 className="text-xl font-bold">Offering Hosting <br />Services for Businesses of All <br />Sizes</h1>
                    <p className='mt-10 text-sm'>No matter how small or large your business, <br /> DreamHost caters to individuals and groups <br /> alike for your unique hosting scenario.</p>
                </div>
                <div className="w-1/2">
                    <div className="flex flex-col">
                        <img src="./offering_hosting_2.webp" alt="offering hosting 2" className='w-[300px] h-[250px] ml-[300px] rounded-2xl translate-x-5 translate-y-10' />
                        <img src="./offering_hosting.webp" alt="offering hosting 2" className='w-[400px] h-[350px] rounded-2xl translate-x-5' />
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Offering