import React from 'react'
import Container from './Container'
import { FaWordpress } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { GrServerCluster } from "react-icons/gr";
import { SlGlobe } from "react-icons/sl";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
const LatestDeals = () => {
    return (
        <Container>
            <div className='flex flex-col items-center mb-10'>
                <h1 className='capitalize text-2xl font-bold mb-10'>the latest deals from dreamHost</h1>
                <div className="grid grid-cols-4 gap-6">
                    <Card>
                        <FaWordpress className='text-blue-600 w-[50px] h-[50px] mb-2' />
                        <h2 className="text-lg capitalize font-bold mb-2">wordpress hosting</h2>
                        <div className="flex justify-left items-center">
                            <p className="text-gray-600 flex mr-4">Starting @ $16.95/mo</p>
                            <GoArrowRight />
                        </div>
                    </Card>
                    <Card>
                        <GrServerCluster className='text-blue-600 w-[50px] h-[50px] mb-2' />
                        <h2 className="text-lg capitalize font-bold mb-2">website hosting</h2>
                        <div className="flex justify-left items-center">
                            <p className="text-gray-600 flex mr-4">Starting @ $2.59/mo</p>
                            <GoArrowRight />
                        </div>
                    </Card>
                    <Card>
                        <SlGlobe className='text-blue-600 w-[50px] h-[50px] mb-2' />
                        <h2 className="text-lg capitalize font-bold mb-2">.COM domain names</h2>
                        <div className="flex justify-left items-center">
                            <p className="text-gray-600 flex mr-4">Starting @ $9.99/mo</p>
                            <GoArrowRight />
                        </div>
                    </Card>
                    <Card>
                        <MdKeyboardDoubleArrowRight className='text-blue-600 w-[50px] h-[50px] mb-2' />
                        <h2 className="text-lg capitalize font-bold mb-2">free wordpress</h2>
                        <div className="flex justify-left items-center">
                            <p className="text-gray-600 flex mr-4">Migrations</p>
                            <GoArrowRight />
                        </div>
                    </Card>
                </div>
            </div>
        </Container>
    )
}

const Card = ({ children }) => {
    return (
        <div className="bg-gray-50 rounded-2xl shadow-md flex flex-col items-left px-5 w-[300px] h-[200px] justify-center">
            {children}
        </div>
    )
}
export default LatestDeals