import React from 'react'
import { CiSearch } from "react-icons/ci";
import Container from './Container';
const Search = () => {
    return (
        <Container>
            <div className='flex items-center justify-center mb-10'>
                <form className="flex justify-between items-center rounded-md shadow-md w-[40%] mr-10">
                    <input type="text" placeholder='Find your perfect domain name ...' className='px-4 py-2
                    rounded-l-lg focus:outline-none w-[85%]'/>
                    <CiSearch className='bg-blue-600 text-white px-4 py2 rounded-r-lg w-[15%] h-full text-lg' />
                </form>
                <div className="flex items-center ml-4 space-x-4 rounded-md shadow-md h-[70px] bg-slate-100">
                    <Card>
                        <span className='font-bold text-blue-600'>.biz</span>
                        <span className="text-gray-600">$14.99</span>
                    </Card>
                    <Card>
                        <span className='font-bold text-green-600'>io</span>
                        <span className="text-gray-600">$39.99</span>
                    </Card>
                    <Card>
                        <span className='font-bold text-gray-600'>.online</span>
                        <span className="text-gray-600">$1.99</span>
                    </Card>
                    <Card>
                        <span className='font-bold text-gray-600'>.club</span>
                        <span className="text-gray-600">$9.99</span>
                    </Card>
                    <Card>
                        <span className='font-bold text-gray-600'>.xyz</span>
                        <span className="text-gray-600">$1.99</span>
                    </Card>
                    <Card>
                        <span className='font-bold text-blue-900'>.com</span>
                        <span className="text-gray-600">$9.99</span>
                    </Card>
                </div>
            </div>
        </Container>
    )
}

const Card = ({ children }) => {
    return (
        <div className="flex items-center px-4 py-2 space-x-1 border-r-2">
            {children}
        </div>
    )
}
export default Search