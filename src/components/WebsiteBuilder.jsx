import React from 'react'
import Container from './Container'
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
const WebsiteBuilder = () => {
    return (
        <Container>
            <div className="flex justify-center items-center mt-10 rounded-lg shadow-xl px-10 py-10">
                <div className="left w-1/3">
                    <HiOutlineClipboardDocumentList  className='text-6xl text-green-300'/>
                    <h1 className='capitalize text-2xl font-bold mt-5'>WP website builder</h1>
                    <p className='text-sm mt-5'>No code required! Build your site confidently with design tools that simplify Wordpress</p>
                    <div className="flex justify-left items-center mt-5">
                        <p className='font-bold'>Starting at $10.00/mo</p>
                        <MdOutlineArrowRightAlt className='ml-2 text-3xl text-green-300' />
                    </div>
                </div>
                <div className="right w-2/3 ml-10">
                    <h1 className='text-3xl font-bold'>The Ease of a <br /> Drag-andDrop <span className='text-green-300'>Website <br /> Builder</span> for your WordPress</h1>
                    <p className='text-sm mt-5 font-light'>Build your site confidently with design tools that <br /> simplify Wordpress</p>
                </div>
            </div>
            <div className="flex justify-center items-center mt-5">
                <button className='capitalize rounded-lg border-2 px-5 py-2 mt-5 border-black font-medium'>View Full plan comparison</button>
            </div>
        </Container>
    )
}

export default WebsiteBuilder