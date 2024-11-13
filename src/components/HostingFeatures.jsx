import React from 'react'
import Container from './Container'
import { CiCalendar } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { PiCursorClickThin } from "react-icons/pi";
import { FaServer } from "react-icons/fa";
import { ImFloppyDisk } from "react-icons/im";
import { FaAward } from "react-icons/fa6";

const HostingFeatures = () => {
    return (
        <Container>
            <div className="flex flex-col md:flex-row p-8">
                <div className="md:w-1/3 mb-8 md:mb-0 border-r-4 border-blue-600">
                    <h1 className="text-4xl font-bold mb-4">Hosting Features<br />For Your Big Ideas</h1>
                    <p className="text-lg text-gray-400">These features come standard in all of our hosting plans.</p>
                </div>
                <div className="divider mx-8 hidden md:block"></div>
                <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div >
                        <div className='flex justify-start items-center space-x-3 mb-5'>
                            <CiCalendar className='text-blue-600 text-lg font-bold'/>
                            <h2 className="text-xl font-bold mb-2">
                                Custom Control Panel
                            </h2>
                        </div>
                        <p className="text-gray-400 font-normal">Our intuitive control panel gives you admin access to all of your DreamHost products. Easily update domain information, add users, adjust email settings, gain access to promotions and more.</p>
                    </div>
                    <div>
                        <div className='flex justify-start items-center space-x-3 mb-5'>
                            <CiHeart className='text-blue-600 text-lg font-bold' />
                            <h2 className="text-xl font-bold mb-2">
                                Real-Life Human Beings
                            </h2>
                        </div>
                        <p className="text-gray-400">Tech veterans, geeks, and nerds are all standing by to optimize your experience. Whether you get in touch with our support, read our knowledge base, or start a thread in our community forum -- getting answers is easy.</p>
                    </div>
                    <div>
                        <div className='flex justify-start items-center space-x-3 mb-5'>
                            <PiCursorClickThin className='text-blue-600 text-lg font-bold' />
                            <h2 className="text-xl font-bold mb-2">
                                1-Click Installer
                            </h2>
                        </div>
                        <p className="text-gray-400">Dead-simple installation of web apps like WordPress.</p>
                    </div>
                    <div>
                        <div className='flex justify-start items-center space-x-3 mb-5'>
                            <FaServer className='text-blue-600 text-lg font-bold' />
                            <h2 className="text-xl font-bold mb-2">
                                100% Uptime Guarantee
                            </h2>
                        </div>
                        <p className="text-gray-400">With multiple datacenter locations, redundant cooling, emergency generators, and constant monitoring, we are able to offer our 100% Uptime Guarantee.</p>
                    </div>
                    <div>
                        <div className='flex justify-start items-center space-x-3 mb-5'>
                            <ImFloppyDisk className='text-blue-600 text-lg font-bold' />
                            <h2 className="text-xl font-bold mb-2">
                                Solid State Drives (SSDs)
                            </h2>
                        </div>
                        <p className="text-gray-400">With SSDs, your website, caching, and database queries are faster (200% faster than HDDs by our calculations).</p>
                    </div>
                    <div>
                        <div className='flex justify-start items-center space-x-3 mb-5'>
                            <FaAward className='text-blue-600 text-lg font-bold' />
                            <h2 className="text-xl font-bold mb-2">
                                Award-Winning Support
                            </h2>
                        </div>
                        <p className="text-gray-400">No question is too simple, or too complex for our team of experts. Our in-house support staff and service team are here for you 24/7, 365.</p>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default HostingFeatures