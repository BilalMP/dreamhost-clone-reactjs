import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Search from '../components/Search'
import CustomerReview from '../components/CustomerReview'
import LatestDeals from '../components/LatestDeals'
import Helps from '../components/Helps'
import FlashSale from '../components/FlashSale'
import Offering from '../components/Offering'
import PopularServices from '../components/PopularServices'
import WebsiteBuilder from '../components/WebsiteBuilder'
import AiWebsiteBuilder from '../components/AiWebsiteBuilder'
import MakesDifferent from '../components/MakesDifferent'
import Services from '../components/Services'
import HirePro from '../components/HirePro'
import MoveFaster from '../components/MoveFaster'
import Faq from '../components/Faq'
import NeedHelp from '../components/NeedHelp'
import Footer from '../components/Footer'
const Home = () => {
    return (
        <>
            <Header />
            <Navbar />
            <Hero />
            <Search />
            <CustomerReview />
            <LatestDeals />
            <Helps />
            <FlashSale />
            <Offering />
            <PopularServices />
            <WebsiteBuilder />
            <AiWebsiteBuilder />
            <MakesDifferent />
            <Services />
            <HirePro />
            <MoveFaster />
            <Faq />
            <NeedHelp />
            <Footer/>
        </>
    )
}

export default Home