import React from 'react'
import Container from './Container'

const EmailAntiSpam = () => {
    return (
        <Container>
            <div className="flex justify-center items-center">
                <div className="left w-1/2">
                    <h2 className='text-lg font-bold'>DreamHost</h2>
                    <h1 className="font-bold text-4xl mt-5">
                        Smart Anti-Spam
                    </h1>
                    <img src="/anti_spam_d.webp" alt="anti spam" className='rounded-lg mt-5 w-[600px]' />
                </div>
                <div className="right w-1/2 flex justify-start items-start flex-col px-10">
                    <p className='font-light text-lg'>
                        DreamHost offers free inbound spam filtering that automatically adapts to emerging threats, keeping your inbox safe from spam, viruses, and phishing attacks
                    </p>
                    <button className='px-5 py-2 mt-5 border-2 rounded-lg bg-gradient-to-l from-blue-500 border-0'>
                        Get Started
                    </button>
                </div>
            </div>
        </Container>
    )
}

export default EmailAntiSpam