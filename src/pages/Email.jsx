import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Faq from '../components/Faq'
import NeedHelp from '../components/NeedHelp'
import Footer from '../components/Footer'
import EmailHero from '../components/EmailHero'
import EmailTools from '../components/EmailTools'
import EmailAntiSpam from '../components/EmailAntiSpam'
import EmailPlans from '../components/EmailPlans'

const Email = () => {
    return (
        <>
            <Header />
            <Navbar />
            <EmailHero />
            <EmailPlans/>
            <EmailTools />
            <EmailAntiSpam/>
            <Faq />
            <NeedHelp />
            <Footer />
        </>
    )
}

export default Email