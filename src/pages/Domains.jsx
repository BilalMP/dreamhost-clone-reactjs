import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Faq from '../components/Faq'
import NeedHelp from '../components/NeedHelp'
import Footer from '../components/Footer'
import DomainNameSearch from '../components/DomainNameSearch'
import DomainPricing from '../components/DomainPricing'
import DreamHostDomain from '../components/DreamHostDomain'
import DomainsNameTips from '../components/DomainsNameTips'
import DomainHeader from '../components/DomainHeader'

const Domains = () => {
    return (
        <>
            <Header />
            <Navbar />
            <DomainHeader />
            <DomainNameSearch />
            <DomainPricing />
            <DreamHostDomain />
            <DomainsNameTips />
            <Faq />
            <NeedHelp />
            <Footer />
        </>
    )
}

export default Domains