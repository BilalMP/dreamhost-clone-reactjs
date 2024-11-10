import React from 'react'

const Accordian = ({ title, content, isOpen, onToggle }) => {
    return (
        <div className="border-b border-gray-300">
            <div className="flex items-center justify-between p-4 cursor-pointer" onClick={onToggle}>
                <h2 className="text-lg font-semibold">{title}</h2>
                <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>&#9660; </span>
            </div>
            {isOpen && (
                <div className="p-4 bg-gray-100">
                    <p>{content}</p>
                </div>
            )}
        </div>
    )
}

export default Accordian