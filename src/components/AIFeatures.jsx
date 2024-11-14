import React from 'react'
import Container from './Container'

const AIFeatures = () => {
    return (
        <Container>
            {/* AI Will Do It for You */}
            <div className="flex justify-center items-center mt-[100px] mx-10">
                <div className="right w-1/2">
                    <img src="/Post1Img-e0684bf3e6a98fc5dbe4f769ecbe574c.webp" alt="Ai will do it for your" className='w-[1300px] h-[400px]' />
                </div>
                <div className="left w-1/2 px-10">
                    <h1 className='capitalize text-3xl font-bold'>AI Will Do It for You</h1>
                    <p className='font-normal text-lg w-[500px]'>
                        With Liftoff, our AI creates a beautiful website completely tailored to your needs. It will even create engaging text and images based on your direct guidance –no design or coding skills needed!
                    </p>
                </div>
            </div>

            {/* Endless Design Possibilities */}
            <div className="flex justify-center items-center mt-[100px] mx-10">
                <div className="right w-1/2 px-10">
                    <h1 className='capitalize text-3xl font-bold'>Endless Design Possibilities</h1>
                    <p className='font-normal text-lg w-[500px]'>
                        Liftoff’s extensive library of beautifully designed block patterns, page templates, and stock images is seamlessly integrated natively into WordPress so crafting a stunning site is effortless.
                    </p>
                </div>
                <div className="left w-1/2">
                    <img src="/Post2Img-071e3c157711a7c7ceade38152963774.webp" alt="Endless Design Possibilities" className='w-[1300px] h-[400px]' />
                </div>
            </div>

            {/* Freedom and Flexibility */}
            <div className="flex justify-center items-center mt-[100px] mx-10">
                <div className="right w-1/2">
                    <img src="/Post3Img-b4d7aaf8d9478226b95ccb8540d15b3e.webp" alt="Freedom and Flexibility" className='w-[1300px] h-[400px]' />
                </div>
                <div className="left w-1/2 px-10">
                    <h1 className='capitalize text-3xl font-bold'>Freedom and Flexibility</h1>
                    <p className='font-normal text-lg w-[500px]'>
                        Liftoff lets you build your site on your terms. Enjoy full customization and the ability to install any themes and plugins you choose. Experiment with new designs and functionalities, giving you the freedom to evolve your site without limits.
                    </p>
                </div>
            </div>

            {/* Uncompromised Performance */}
            <div className="flex justify-center items-center mt-[100px] mx-10">
                <div className="right w-1/2 px-10">
                    <h1 className='capitalize text-3xl font-bold'>Uncompromised Performance</h1>
                    <p className='font-normal text-lg w-[500px]'>
                        Liftoff uses native WordPress components for a faster, more secure experience. Unlike other builders that can slow your site, Liftoff integrates seamlessly with WordPress, delivering efficient performance without the extra bloat.
                    </p>
                </div>
                <div className="left w-1/2">
                    <img src="/Post4Img-e4dc51e4bc8dd6d3573310680fe1c40c.webp" alt="Uncompromised Performance" className='w-[1300px] h-[400px]' />
                </div>
            </div>
        </Container>
    )
}

export default AIFeatures