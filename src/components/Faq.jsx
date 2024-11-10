import React, { useState } from 'react'
import Container from './Container'
import Accordian from './Accordian'
import accordionItems from '../data/accordionItems';
const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <Container>
            <div className="flex px-10 my-10">
                <div className="left w-[30%]">
                    <h1 className='text-xl font-bold capitalize'>frequently asked questions</h1>
                </div>
                <div className="right w-[70%]">
                    {accordionItems.map((item, index) => (
                        <Accordian
                            key={index}
                            title={item.title}
                            content={item.content}
                            isOpen={openIndex === index}
                            onToggle={() => handleToggle(index)}
                        />
                    ))}
                </div>
            </div>
        </Container>
    )
}

export default Faq