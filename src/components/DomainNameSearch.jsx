import React from 'react'
import Container from './Container'
import { CiSearch } from "react-icons/ci";

const DomainNameSearch = () => {
    return (
        <div className='bg-black text-white'>
            <Container>
                <div className="flex flex-col justify-center items-center my-[80px]">
                    <h1 className="text-2xl font-bold">
                        Domain Name Search
                    </h1>
                    <p className='font-light text-sm mt-5'>
                        Search for new domains and register your name before someone else does.
                    </p>
                    <form className='flex justify-center items-center mt-5'>
                        <input type="text" placeholder='Find ypur perfect domains name ...' className='bg-black text-white text-sm px-5 py-3 border-2 border-white placeholder:text-white rounded-l-lg w-[500px]'/>
                        <button className='flex justify-center items-center bg-blue-600 text-white text-xl px-5 py-3 border-2 border-l-0 border-white rounded-r-lg'><CiSearch /></button>
                    </form>
                    <p className='font-light text-md mt-5'>
                        .COM domains are just $9.99/yr and include a FREE Private Registration
                    </p>
                </div>
            </Container>
        </div>
    )
}

export default DomainNameSearch