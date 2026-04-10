import React from 'react'
import Homepage from '../Components/Homepage'
import Navbar from '../Components/Navbar'
import AboutFirm from '../Components/AboutFirm'
import PracticeArea from '../Components/PracticeArea'
import Experts from '../Components/Experts'
import WhyUs from '../Components/WhyUs'
import ClientFeedback from '../Components/ClientFeedback'
import Clients from '../Components/Clients'
import Consultation from '../Components/Consultation'
import Footer from '../Components/Footer'

function Home() {
  return (
    <div className='main-div'>
      <Navbar/>

      <section id="home">
        <Homepage/>
      </section>

      <section id="about">
        <AboutFirm/>
      </section>

      <section id="features">
        <PracticeArea/>
      </section>

      <section id="team">
        <Experts/>
      </section>

      <section id="whyus">
        <WhyUs/>
      </section>

      <section id="feedback">
        <ClientFeedback/>
      </section>

      <section id="clients">
        <Clients/>
      </section>

      <section id="consultation">
        <Consultation/>
      </section>

      <Footer/>
    </div>
  )
}

export default Home
