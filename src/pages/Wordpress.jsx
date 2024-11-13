import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Faq from '../components/Faq'
import NeedHelp from '../components/NeedHelp'
import Footer from '../components/Footer'
import UnbeatableWordpressHosting from '../components/UnbeatableWordpressHosting'
import WordpressOverview from '../components/WordpressOverview'
import WordpresshostingPlans from '../components/WordpresshostingPlans'
import AlreadyHaveWordpress from '../components/AlreadyHaveWordpress'
import PowerfulFeaturesWordpress from '../components/PowerfulFeaturesWordpress'
import WordpressServices from '../components/WordpressServices'
import WordpressHelp from '../components/WordpressHelp'
import WordpressCompare from '../components/WordpressCompare'
import WordpressCustomerReview from '../components/WordpressCustomerReview'

const Wordpress = () => {
    return (
        <>
            <Header />
            <Navbar />
            <UnbeatableWordpressHosting />
            <WordpressOverview />
            <WordpresshostingPlans />
            <AlreadyHaveWordpress />
            <PowerfulFeaturesWordpress />
            <WordpressServices />
            <WordpressHelp />
            <WordpressCompare />
            <WordpressCustomerReview/>
            <Faq />
            <NeedHelp />
            <Footer />
        </>
    )
}

export default Wordpress