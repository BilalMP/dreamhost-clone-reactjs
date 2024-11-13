import React from 'react'
import WordpressCustomerReview from '../components/WordpressCustomerReview'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Faq from '../components/Faq'
import NeedHelp from '../components/NeedHelp'
import Footer from '../components/Footer'
import HostingPlans from '../components/HostingPlans'
import HostingFeatures from '../components/HostingFeatures'
import HostingPurpose from '../components/HostingPurpose'

const Hosting = () => {
    return (
        <>
            <Header />
            <Navbar />
            <HostingPlans/>
            <HostingFeatures />
            <HostingPurpose/>
            <WordpressCustomerReview />
            <Faq />
            <NeedHelp />
            <Footer />
        </>
    )
}

export default Hosting