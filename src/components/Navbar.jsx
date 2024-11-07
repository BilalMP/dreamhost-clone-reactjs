import React from 'react'
import Container from './Container'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <Container>
                <div className="flex items-center justify-between mt-10">
                    <div className="flex items-center justify-start">
                        <Link to="/" className='capitalize text-2xl mr-10'>dreamHost</Link>
                        <ul className=" flex space-x-10 text-lg">
                            <li className='capitalize'>Wordpress</li>
                            <li className='capitalize'>hostings</li>
                            <li className='capitalize'>domains</li>
                            <li className='capitalize'>emails</li>
                            <li className='capitalize'>pro services</li>
                            <li className='capitalize'>blog</li>
                        </ul>
                    </div>
                    <div className="flex items-center space-x-10">
                        <Link to="/" className='hover:bg-slate-100 px-5 py-2 hover:rounded-lg'>Login</Link>
                        <Link to="/" className='bg-blue-600 text-white px-5 py-2 rounded-lg capitalize'>get Started</Link>
                    </div>
                </div>
            </Container>
        </nav>
    )
}

export default Navbar