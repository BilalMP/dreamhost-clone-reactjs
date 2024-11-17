import React from 'react'

const ProServicesHeader = () => {
    return (
        <div className="flex justify-start items-center space-x-5 bg-black text-white px-[50px] h-[50px]">
            <div className="hover:text-blue-500 text-sm">Pro Services</div>
            <div className="hover:text-blue-500 text-sm">Design</div>
            <div className="hover:text-blue-500 text-sm">Marketing</div>
            <div className="hover:text-blue-500 text-sm">Management</div>
            <div className="hover:text-blue-500 text-sm">Development</div>
        </div>
    )
}

export default ProServicesHeader