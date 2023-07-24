import React from 'react'
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServiceImg from '../assets/2.jpg'


const Service = () => {
  return (
    <>
    <Navbar />
    <Hero
      cName="hero-mid"
      heroImg={ServiceImg}
      title="Service"
      btnClass="hide"
    />
  </>
  )
}

export default Service
