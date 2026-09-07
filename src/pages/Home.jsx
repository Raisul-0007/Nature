import React from 'react'
import Navber from '../components/Navber'
import Banner from './../components/Banner';
import New from '../components/New';
import Footer from '../components/Footer';
import CallToAction from '../components/CallToAction';
import Offer from '../components/Offer';

const Home = () => {
  return (
    <div>
      <Navber/>
      <Banner/>
      <New/>
      <CallToAction/>
      <Offer/>
      <Footer/>
    </div>
  )
}

export default Home
