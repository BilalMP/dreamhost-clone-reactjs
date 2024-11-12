import React, { useState } from 'react'
import Container from './Container'
import { MdDone } from "react-icons/md";
import { GoDash } from "react-icons/go";
import { IoIosArrowRoundUp } from "react-icons/io";

const WordpressCompare = () => {
    const [selected, setSelected] = useState('Prepaid');
    return (
        <>
            <Container>
                <div className="my-[70px] mx-10 mr-[150px]">
                    <h1 className='text-5xl font-bold capitalize'>Compare All WordPress Hosting Plans</h1>
                    <p className='mt-5 text-xl font-semibold'>We get it - choosing a hosting plan for your WordPress site isn't easy.</p>
                    <p className='mt-5 font-light'>
                        Even if you can identify all the pros and cons, you may not be sure if you're making the right choice. Should you start with a basic Shared WordPress plan or go for something more powerful but which also handles a lot of the technical side of things for you?
                    </p>
                    <p className='mt-5 font-light'>
                        With DreamPress, our Managed WordPress solution, you don't need to be an expert in WordPress hosting. That's why we're here! Our team handles performance tweaks, we monitor the server for security threats, perform automated backups and WordPress updates, and much more.
                    </p>
                </div>
            </Container>
            <div className="">
                <table className="min-w-full text-xs font-light">
                    <thead className='px-10 bg-gray-100'>
                        <tr>
                            <th>
                                <div className="flex flex-col items-start justify-start ml-5">
                                    <h1 className="font-bold text-md">Features</h1>
                                    <div className="flex justify-start p-1 py-1 text-xs border-2 border-black rounded-full px- max-w-fit">
                                        <button
                                            className={`px-4 py-2 font-light rounded-full focus:outline-none ${selected === 'Monthly' ? 'bg-black text-white' : 'text-black'}`}
                                            onClick={() => setSelected('Monthly')}
                                        >
                                            Monthly
                                        </button>
                                        <button
                                            className={`px-4 py-2 rounded-full font-light focus:outline-none ${selected === 'Prepaid' ? 'bg-black text-white' : 'text-black'}`}
                                            onClick={() => setSelected('Prepaid')}
                                        >
                                            Prepaid
                                        </button>
                                    </div>
                                </div>
                            </th>
                            <TableHeadData tag="Seeking Value" tagBgColor="bg-gray-300" title="Shared Starter" subscription="$4.95/mo" buttonTag="Sign Up" />
                            <TableHeadData tag="" tagBgColor="" title="Shared Unlimited" subscription="$8.95/mo" buttonTag="Sign Up" />
                            <TableHeadData tag="For Performance" tagBgColor="bg-gray-300" title="DreamPress" subscription="$19.95/mo" buttonTag="Get DreamPress" />
                            <TableHeadData tag="" tagBgColor="" title="DreamPress Plus" subscription="$29.95/mo" buttonTag="Get DreamPress Plus" />
                            <TableHeadData tag="" tagBgColor="" title="DreamPress Pro" subscription="$79.95/mo" buttonTag="Get DreamPress Pro" />
                        </tr>
                    </thead>
                    <tbody className='px-10 text-left'>
                        <TableBodyData rowBgColor="" rowData1="Server Environment" rowData2="Standard shared" rowData3="Standard shared" rowData4="High-performance cloud" rowData5="High-performance cloud" rowData6="High-performance cloud" />
                        <TableBodyData rowBgColor="bg-gray-100" rowData1="Resources" rowData2="Shared" rowData3="Shared" rowData4="Isolated" rowData5="Isolated" rowData6="Isolated" />
                        <TableBodyData rowBgColor="" rowData1="# of WordPress Sites" rowData2="1" rowData3="Unlimited" rowData4="1" rowData5="1" rowData6="1" />
                        <TableBodyData rowBgColor="bg-gray-100" rowData1="Visits Per Month (Uncached)" rowData2="Low" rowData3="Low" rowData4="High" rowData5="High" rowData6="High" />
                        <TableBodyData rowBgColor="" rowData1="Visits Per Month (Cached)" rowData2="Unmetered" rowData3="Unmetered" rowData4="Unmetered" rowData5="Unmetered" rowData6="Unmetered" />
                        <TableBodyData rowBgColor="bg-gray-100" rowData1="Bandwidth" rowData2="Unmetered" rowData3="Unmetered" rowData4="Unmetered" rowData5="Unmetered" rowData6="Unmetered" />
                        <TableBodyData rowBgColor="" rowData1="SSD Storage" rowData2={<MdDone />} rowData3={<MdDone />} rowData4="30GB" rowData5="60GB" rowData6="120GB" />
                        <TableBodyData rowBgColor="bg-gray-100" rowData1="WordPress Installer" rowData2={<MdDone />} rowData3={<MdDone />} rowData4={<MdDone />} rowData5={<MdDone />} rowData6={<MdDone />} />
                        <TableBodyData rowBgColor="" rowData1="1-Click Staging" rowData2={<GoDash />} rowData3={<GoDash />} rowData4={<MdDone />} rowData5={<MdDone />} rowData6={<MdDone />} />
                        <TableBodyData rowBgColor="bg-gray-100" rowData1="Fast NGINX Hosting" rowData2="" rowData3="" rowData4={<MdDone />} rowData5={<MdDone />} rowData6={<MdDone />} />
                        <TableBodyData rowBgColor="" rowData1="Free Priority WordPress Migration" rowData2="" rowData3="" rowData4={<MdDone />} rowData5={<MdDone />} rowData6={<MdDone />} />
                        <TableBodyData rowBgColor="bg-gray-100" rowData1="Built-in Caching" rowData2={<GoDash />} rowData3={<GoDash />} rowData4={<MdDone />} rowData5={<MdDone />} rowData6={<MdDone />} />
                        <TableBodyData rowBgColor="" rowData1="Free Automated WordPress Migrations" rowData2={<MdDone />} rowData3={<MdDone />} rowData4={<MdDone />} rowData5={<MdDone />} rowData6={<MdDone />} />
                        <TableBodyData rowBgColor="bg-gray-100" rowData1="AI Website Builder" rowData2={<MdDone />} rowData3={<MdDone />} rowData4={<MdDone />} rowData5={<MdDone />} rowData6={<MdDone />} />
                        <TableBodyData rowBgColor="" rowData1="AI Business Advisor" rowData2={<MdDone />} rowData3={<MdDone />} rowData4={<MdDone />} rowData5={<MdDone />} rowData6={<MdDone />} />
                        <TableBodyData rowBgColor="bg-gray-100" rowData1="Free SSL Certificate" rowData2="Available" rowData3="Pre-installed" rowData4="Pre-installed" rowData5="Pre-installed" rowData6="Pre-installed" />
                        <TableBodyData rowBgColor="" rowData1="Automatic WordPress Updates: Core & Security" rowData2={<MdDone />} rowData3={<MdDone />} rowData4={<MdDone />} rowData5={<MdDone />} rowData6={<MdDone />} />
                        <TableBodyData rowBgColor="bg-gray-100" rowData1="Free Jetpack" rowData2={<MdDone />} rowData3={<MdDone />} rowData4="Pre-installed" rowData5="Pre-installed" rowData6="Pre-installed" />
                        <TableBodyData rowBgColor="" rowData1="Automated Daily Backups" rowData2={<MdDone />} rowData3={<MdDone />} rowData4={<MdDone />} rowData5={<MdDone />} rowData6={<MdDone />} />
                        <TableBodyData rowBgColor="bg-gray-100" rowData1="On-Demand Backups & 1-Click Restore" rowData2={<MdDone />} rowData3={<MdDone />} rowData4={<MdDone />} rowData5={<MdDone />} rowData6={<MdDone />} />
                        <TableBodyData rowBgColor="" rowData1="Number of Backups" rowData2="" rowData3="" rowData4="2 Weeks of Backups" rowData5="2 Weeks of Backups" rowData6="4 Weeks of Backups" />
                        <TableBodyData rowBgColor="bg-gray-100" rowData1="Built-in Caching" rowData2={<GoDash />} rowData3={<GoDash />} rowData4={<GoDash />} rowData5={<GoDash />} rowData6={<GoDash />} />
                        <TableBodyData rowBgColor="" rowData1="Free Domain Privacy" rowData2={<MdDone />} rowData3={<MdDone />} rowData4={<MdDone />} rowData5={<MdDone />} rowData6={<MdDone />} />
                        <TableBodyData rowBgColor="bg-gray-100" rowData1="Email Accounts @ Your Domain" rowData2="Available for Purchase" rowData3="Included" rowData4={<MdDone />} rowData5={<MdDone />} rowData6={<MdDone />} />
                        <TableBodyData rowBgColor="" rowData1="Custom-built Control Panel" rowData2={<MdDone />} rowData3={<MdDone />} rowData4={<MdDone />} rowData5={<MdDone />} rowData6={<MdDone />} />
                        <TableBodyData rowBgColor="bg-gray-100" rowData1="Advanced Features: SFTP, Shell Access, WP-CLI & more!" rowData2={<MdDone />} rowData3={<MdDone />} rowData4={<MdDone />} rowData5={<MdDone />} rowData6={<MdDone />} />
                        <TableBodyData rowBgColor="" rowData1="Support" rowData2="Standard" rowData3="Standard" rowData4="WordPress Specialized" rowData5="WordPress Specialized" rowData6="WordPress Specialized" />
                        <TableBodyData rowBgColor="bg-gray-100" rowData1="24/7 Ticket Support" rowData2={<MdDone />} rowData3={<MdDone />} rowData4={<MdDone />} rowData5={<MdDone />} rowData6={<MdDone />} />
                        <TableBodyData rowBgColor="" rowData1="Live Chat Support" rowData2={<MdDone />} rowData3={<MdDone />} rowData4={<MdDone />} rowData5={<MdDone />} rowData6={<MdDone />} />
                        <TableBodyData rowBgColor="bg-gray-100" rowData1="Phone Support Callbacks" rowData2="Available" rowData3="Available" rowData4="Available" rowData5="3" rowData6="5" />
                        <TableBodyData rowBgColor="" rowData1="Priority Support" rowData2={<GoDash />} rowData3={<GoDash />} rowData4={<GoDash />} rowData5={<GoDash />} rowData6={<MdDone />} />
                        <TableBodyData rowBgColor="bg-gray-100" rowData1="Money-back Guarantee" rowData2={<MdDone />} rowData3={<MdDone />} rowData4={<MdDone />} rowData5={<MdDone />} rowData6={<MdDone />} />
                    </tbody>
                </table>
                <div className="flex justify-center items-center mt-10">
                    <button className='flex justify-center items-center border-2 border-black px-5 py-2 rounded-lg font-semibold'>
                        Back to Plans
                        <IoIosArrowRoundUp />
                    </button>
                </div>
            </div>
        </>
    )
}

const TableHeadData = ({ tag, tagBgColor, title, subscription, buttonTag }) => {
    return (
        <th className="pl-5 text-left pb-5">
            <div className={`px-2 w-[300px] h-[18px] mt-3 text-gray-900 uppercase text-[10px] font-normal text rounded-xl max-w-fit ${tagBgColor}`}>
                {tag}
            </div>
            <div className="text-xs font-bold mt-2">{title}</div>
            <div className="text-lg font-bold mt-2">{subscription}</div>
            <button className="px-4 py-2 mt-2 text-black border-black rounded-md text-xs border-2">{buttonTag}</button>
        </th>
    )
}

const TableBodyData = ({rowBgColor, rowData1, rowData2, rowData3, rowData4, rowData5, rowData6}) => {
    return (
        <tr className={`pl-5 text-left ${rowBgColor}`}>
            <td className="px-6 py-4 font-bold text-left">{rowData1}</td>
            <td className="px-6 py-4 text-left">{rowData2}</td>
            <td className="px-6 py-4 text-left">{rowData3}</td>
            <td className="px-6 py-4 text-left">{rowData4}</td>
            <td className="px-6 py-4 text-left">{rowData5}</td>
            <td className="px-6 py-4 text-left">{rowData6}</td>
        </tr>
    )
}
export default WordpressCompare