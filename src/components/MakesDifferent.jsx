import React from 'react'
import Container from './Container'

const MakesDifferent = () => {
    return (
        <Container>
            <div className="flex items-center justify-center mx-10 my-10">
                <div className="w-1/2 left">
                    <h1 className='text-6xl font-bold capitalize'>what makes <br />dreamHost so <br />different</h1>
                    <p className='mt-5 font-light'>
                        With over 20 years of hosting experience, we focus on <br />
                        successful sites for web designers, developers, <br />
                        bloggers and online businesses. Our community and <br />
                        support helps you create a website fast and easy!
                    </p>
                </div>
                <div className="w-1/2 right">
                    <div className="flex items-baseline justify-around pb-10 space-x-5">
                        <img src="makes_dh.webp" alt="People 1" className='w-[250px] h-[250px] rounded-lg' />
                        <img src="makes_dh_2.webp" alt="People 2" className='w-[350px] h-[350px] rounded-lg' />
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default MakesDifferent