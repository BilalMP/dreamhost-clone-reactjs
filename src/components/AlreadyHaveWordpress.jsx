import React from 'react'
import Container from './Container'

const AlreadyHaveWordpress = () => {
    return (
        <div className='bg-black mt-10'>
            <Container>
                <div className="flex justify-center items-center px-10">
                    <div class=" left text-left p-8 w-1/2">
                        <h1 class="text-5xl font-bold text-white">
                            Already have a WordPress <br /> site?
                        </h1>
                        <p class="text-sm font-nomal text-white mt-5">
                            Migrate for free on WordPress Basic and <br /> DreamPress plans. It's easy.
                        </p>
                    </div>
                    <div class=" right p-8 w-1/2">
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/wEUXETut7oE?si=kwY-ss_QMQ8rnSgV"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen>
                        </iframe>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default AlreadyHaveWordpress