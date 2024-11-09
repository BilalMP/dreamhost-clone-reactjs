import React from 'react'
import Container from './Container'

const MakesDifferent = () => {
    console.log('hello world')
    return (
        <Container>
            <div className="flex justify-center items-center my-10 mx-10">
                <div className="left w-1/2">
                    <h1 className='text-6xl font-bold capitalize'>what makes <br />dreamHost so <br />different</h1>
                    <p className='font-light mt-5'>
                        With over 20 years of hosting experience, we focus on <br />
                        successful sites for web designers, developers, <br />
                        bloggers and online businesses. Our community and <br />
                        support helps you create a website fast and easy!
                    </p>
                </div>
                <div className="right w-1/2">
                    <div className="flex justify-around items-baseline space-x-5 pb-10">
                        <img src="makes_dh.webp" alt="People 1" className='w-[250px] h-[250px] rounded-lg'/>
                        <img src="makes_dh_2.webp" alt="People 2" className='w-[350px] h-[350px] rounded-lg'/>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default MakesDifferent