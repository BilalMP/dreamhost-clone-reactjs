import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Faq from '../components/Faq'
import NeedHelp from '../components/NeedHelp'
import Footer from '../components/Footer'
import WebsiteHero from '../components/WebsiteHero'
import PersonaliseLaunch from '../components/PersonaliseLaunch'
import AIFeatures from '../components/AIFeatures'
import WebsiteFeatures from '../components/WebsiteFeatures'
import WebsiteBuilderPlan from '../components/WebsiteBuilderPlan'

const Website = () => {
  return (
    <>
      <Header />
      <Navbar />
      <WebsiteHero />
      <PersonaliseLaunch />
      <AIFeatures />
      <WebsiteFeatures />
      <WebsiteBuilderPlan/>
      <Faq />
      <NeedHelp />
      <Footer />
    </>
  )
}

export default Website