import React from 'react'
import Container from './Container'

const WordpressServices = () => {
    return (
        <Container>
            <div className="flex justify-center items-center mt-[70px] mx-[60px] ">
                <div className="w-1/2 mr-10 left ">
                    <h1 className='text-5xl font-bold capitalize'>
                        WordPress Geniuses At Your Service
                    </h1>
                    <p className='mt-[60px] font-light'>
                        While WordPress makes it easy for anyone to build a website without knowing how to code, there's always a chance of running into an issue that you don't know how to fix. That's where we come in! DreamHost's friendly, pro-level customer support representatives are the best in the biz, skillfully striving to always make sure your hosting needs are met.
                    </p>
                    <p className='mt-[60px] font-light'>
                        Have an issue? Just let us know - when it comes to WordPress hosting, no question is ever too simple or too complex.
                    </p>
                    <button className='px-5 py-2 mt-10 text-white bg-blue-700 rounded-lg hover:bg-blue-500'>Reach out to us</button>
                </div>
                <div className="flex items-center justify-center w-1/2 right">
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