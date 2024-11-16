import React from 'react'

const DomainHeader = () => {
    return (
        <div className="flex justify-start items-center space-x-5 bg-black text-white px-[50px] h-[50px]">
            <div className="hover:text-blue-500 text-sm">Domains</div>
            <div className="hover:text-blue-500 text-sm">Domain Extensions</div>
            <div className="hover:text-blue-500 text-sm">Privacy Protection</div>
            <div className="hover:text-blue-500 text-sm">Domain Transfers</div>
        </div>
    )
}

export default DomainHeader