import React from 'react'
import Navber from '../components/Navber'
import Banner from './../components/Banner';
import New from '../components/New';
import Footer from '../components/Footer';
import CallToAction from '../components/CallToAction';

const Home = () => {
  return (
    <div>
      <Navber/>
      <Banner/>
      <New/>
      <CallToAction/>
      <Footer/>
    </div>
  )
}

export default Home
