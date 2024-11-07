import React from 'react'
import { Link } from 'react-router-dom'
import { PiBookmarkSimpleFill } from "react-icons/pi";
import { BsArrowRight } from "react-icons/bs";
import Container from './Container';
const Header = () => {
    return (
        <div className='bg-blue-600'>
            <Container>
                <div className="text-white flex justify-between items-center h-[50px]">
                    <div className="flex items-center justify-center">
                        <Link to="/" className="flex items-center justify-center">
                            <PiBookmarkSimpleFill />
                            <span>Hosting Flash Sale: Starting at $2.59/mo for a limited time</span>
                            <BsArrowRight className='ml-3' />
                        </Link>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Link to="/" className='hover:underline'>Affiliates</Link>
                        <Link to="/" className='hover:underline'>Knowldge Base</Link>
                        <Link to="/" className='hover:underline'>News</Link>
                        <Link to="/" className='hover:underline'>Support</Link>
                        <Link to="/" className='hover:underline'>English</Link>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Header