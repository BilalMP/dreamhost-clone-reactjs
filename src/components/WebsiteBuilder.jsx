import React from 'react'
import Container from './Container'
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
const WebsiteBuilder = () => {
    return (
        <Container>
            <div className="flex items-center justify-center px-10 py-10 mt-10 rounded-lg shadow-xl">
                <div className="w-1/3 left">
                    <HiOutlineClipboardDocumentList className='text-6xl text-green-300' />
                    <h1 className='mt-5 text-2xl font-bold capitalize'>WP website builder</h1>
                    <p className='mt-5 text-sm'>No code required! Build your site confidently with design tools that simplify Wordpress</p>
                    <div className="flex items-center mt-5 justify-left">
                        <p className='font-bold'>Starting at $10.00/mo</p>
                        <MdOutlineArrowRightAlt className='ml-2 text-3xl text-green-300' />
                    </div>
                </div>
                <div className="w-2/3 ml-10 right">
                    <h1 className='text-3xl font-bold'>The Ease of a <br /> Drag-andDrop <span className='text-green-300'>Website <br /> Builder</span> for your WordPress</h1>
                    <p className='mt-5 text-sm font-light'>Build your site confidently with design tools that <br /> simplify Wordpress</p>
                </div>
            </div>
            <div className="flex items-center justify-center mt-5">
                <button className='px-5 py-2 mt-5 font-medium capitalize border-2 border-black rounded-lg'>View Full plan comparison</button>
            </div>
        </Container>
    )
}

export default WebsiteBuilder