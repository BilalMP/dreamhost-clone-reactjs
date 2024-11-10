import React from 'react'
import Container from './Container'
import { GoPeople } from "react-icons/go";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { GiSpinningRibbons } from "react-icons/gi";
import { GrSecure } from "react-icons/gr";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { SlPeople } from "react-icons/sl";

const Services = () => {
    return (
        <Container>
            <div className="grid grid-cols-3 gap-10 mx-10 mb-5">
                <EmployeeOwned />
                <PassionPrivacy />
                <EmbraceOpenSource />
                <CommittmentScurity />
                <UptimeGuranteed />
                <Support />
            </div>
        </Container>
    )
}

const EmployeeOwned = () => {
    return (
        <div className="flex flex-col justify-start">
            <GoPeople className='text-blue-700 p-2  w-[50px] h-[50px]' />
            <h1 className='mt-3 text-2xl font-bold capitalize'>employee owned</h1>
            <p className='mt-3 text-base font-light'>
                Being employee-owned keeps us focused on the <br />
                unique needs of our users, and we wouldn't have it <br />
                any other way. We're committed to helping <br />
                everyone find success online.
            </p>
        </div>
    )
}

const PassionPrivacy = () => {
    return (
        <div className="flex flex-col justify-start">
            <IoShieldCheckmarkOutline className='text-blue-700 p-2  w-[50px] h-[50px]' />
            <h1 className='mt-3 text-2xl font-bold capitalize'>Passion for Privacy</h1>
            <p className='mt-3 text-base font-light'>
                We believe in everyone's right to privacy, and we <br />
                back that with a strong anti-spam policy and free <br />
                WHOIS privacy.
            </p>
        </div>
    )
}

const EmbraceOpenSource = () => {
    return (
        <div className="flex flex-col justify-start">
            <GiSpinningRibbons className='text-blue-700 p-2  w-[50px] h-[50px]' />
            <h1 className='mt-3 text-2xl font-bold capitalize'>Embrace Open Source</h1>
            <p className='mt-3 text-base font-light'>
                We strongly believe in providing open source <br />
                solutions to our customers whenever possible.
            </p>
        </div>
    )
}

const CommittmentScurity = () => {
    return (
        <div className="flex flex-col justify-start">
            <GrSecure className='text-blue-700 p-2  w-[50px] h-[50px]' />
            <h1 className='mt-3 text-2xl font-bold capitalize'>Commitment to Security</h1>
            <p className='mt-3 text-base font-light'>
                Our many security features include Multi Factor <br />
                Authentication, auto-enabled sFTP and free <br />
                secure hosting with Let's Encrypt.
            </p>
        </div>
    )
}

const UptimeGuranteed = () => {
    return (
        <div className="flex flex-col justify-start">
            <MdKeyboardDoubleArrowUp className='text-blue-700 p-2  w-[50px] h-[50px]' />
            <h1 className='mt-3 text-2xl font-bold capitalize'>100% Uptime Guaranteed</h1>
            <p className='mt-3 text-base font-light'>
                We guarantee it so you don't have to worry about <br />
                it.
            </p>
        </div>
    )
}

const Support = () => {
    return (
        <div className="flex flex-col justify-start">
            <SlPeople className='text-blue-700 p-2  w-[50px] h-[50px]' />
            <h1 className='mt-3 text-2xl font-bold capitalize'>24/7 Support</h1>
            <p className='mt-3 text-base font-light'>
                Our in-house team members do their best to <br />
                provide one-touch resolution, making you feel like <br />
                a part of our family.
            </p>
        </div>
    )
}
export default Services