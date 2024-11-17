import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Faq from '../components/Faq'
import NeedHelp from '../components/NeedHelp'
import Footer from '../components/Footer'
import ProServicesHeader from '../components/ProServicesHeader'
import ProServicesHero from '../components/ProServicesHero'
import ProServicesSuccess from '../components/ProServicesSuccess'
import ProServicesWhy from '../components/ProServicesWhy'
import ProServicesChat from '../components/ProServicesChat'
import ProServicesDreamCare from '../components/ProServicesDreamCare'
import WordpressCustomerReview from '../components/WordpressCustomerReview'

const ProServices = () => {
    return (
        <>
            <Header />
            <Navbar />
            <ProServicesHeader />
            <ProServicesHero />
            <ProServicesSuccess />
            <ProServicesWhy />
            <ProServicesChat />
            <ProServicesDreamCare />
            <WordpressCustomerReview/>
            <Faq />
            <NeedHelp />
            <Footer />
        </>
    )
}

export default ProServices