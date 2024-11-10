import React from 'react'
import Container from './Container'

const WordpressServices = () => {
    return (
        <Container>
            <div className="flex justify-center items-center mt-[70px] mx-[60px] ">
                <div className="left w-1/2 mr-10 ">
                    <h1 className='text-5xl font-bold capitalize'>
                        WordPress Geniuses At Your Service
                    </h1>
                    <p className='mt-[60px] font-light'>
                        While WordPress makes it easy for anyone to build a website without knowing how to code, there's always a chance of running into an issue that you don't know how to fix. That's where we come in! DreamHost's friendly, pro-level customer support representatives are the best in the biz, skillfully striving to always make sure your hosting needs are met.
                    </p>
                    <p className='mt-[60px] font-light'>
                        Have an issue? Just let us know - when it comes to WordPress hosting, no question is ever too simple or too complex.
                    </p>
                    <button className='bg-blue-700 text-white rounded-lg px-5 py-2 mt-10 hover:bg-blue-500'>Reach out to us</button>
                </div>
                <div className="right w-1/2  flex justify-center items-center">
                    <img
                        src="wordpress_geniuses.webp"
                        alt="wordpress_geniuses"
                        className='rounded-lg'
                    />
                </div>
            </div>
        </Container>
    )
}

export default WordpressServices