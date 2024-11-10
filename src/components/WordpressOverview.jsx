import React from 'react'

const WordpressOverview = () => {
    return (
        <div className="flex items-start justify-center bg-slate-200">
            <div className="flex space-x-8">
                <div className="flex flex-col items-start p-4 bg-white w-[300px] hover:bg-slate-300 border-b-4 border-blue-700">
                    <span className="px-2 py-1 text-xs font-semibold text-purple-700 bg-purple-200 rounded-full">OVERVIEW</span>
                    <h2 className="mt-2 text-xl font-bold">Plans Overview</h2>
                    <p className="text-gray-600">All of our WordPress Plans</p>
                    <div className="w-full mt-2 active-tab"></div>
                </div>
                <div className="flex flex-col items-start p-4 bg-white w-[300px] hover:bg-slate-300">
                    <span className="px-2 py-1 text-xs font-semibold text-purple-700 bg-purple-200 rounded-full">$2.59/MO</span>
                    <h2 className="mt-2 text-xl font-bold">WordPress Basic</h2>
                    <p className="text-gray-600">Affordable & Reliable</p>
                </div>
                <div className="flex flex-col items-start p-4 bg-white w-[300px] hover:bg-slate-300">
                    <span className="px-2 py-1 text-xs font-semibold text-purple-700 bg-purple-200 rounded-full">$16.95/MO</span>
                    <h2 className="mt-2 text-xl font-bold">DreamPress</h2>
                    <p className="text-gray-600">Managed WordPress Experience</p>
                </div>
                <div className="flex flex-col items-start p-4 bg-white w-[300px] hover:bg-slate-300">
                    <span className="px-2 py-1 text-xs font-semibold text-purple-700 bg-purple-200 rounded-full">$10.00/MO</span>
                    <h2 className="mt-2 text-xl font-bold">VPS WordPress</h2>
                    <p className="text-gray-600">High-performing isolated resources</p>
                </div>
            </div>
        </div>
    )
}

export default WordpressOverview