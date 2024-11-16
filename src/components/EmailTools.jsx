import React from 'react'
import Container from "./Container";

const EmailTools = () => {
    return (
        <Container>
            <div className="flex justify-center items-center">
                <div className="left w-1/2 px-10">
                    <p className='p-1 text-xs text-blue-900 bg-blue-200 rounded-lg max-w-fit uppercase font-semibold'>INTUITIVE</p>
                    <h1 className="capitalize font-bold text-5xl mt-5">
                        Streamlined Organizational Tools
                    </h1>
                    <p className='font-light text-lg mt-5'>
                        Drag-and-drop messages between folders in webmail, set up automatic delivery filters, and route messages using custom aliases.
                    </p>
                </div>
                <div className="right w-1/2">
                    <img src="/intuitive.webp" alt="intuitive" /></div>
            </div>
            <div className="flex justify-center items-center">
                <div className="left w-1/2">
                    <img src="/accessible.webp" alt="intuitive" />
                </div>
                <div className="right w-1/2  px-10">
                    <p className='p-1 text-xs text-blue-900 bg-blue-200 rounded-lg max-w-fit uppercase font-semibold'>
                        ACCESSIBLE
                    </p>
                    <h1 className="capitalize font-bold text-5xl mt-5">
                        On All Your Devices
                    </h1>
                    <p className='font-light text-lg mt-5'>
                        Industry-leading IMAP support keeps email synced between your laptop and phone. And tablet. And desktop, and smart watch, and...
                    </p>
                </div>
            </div>
        </Container >
    )
}

export default EmailTools