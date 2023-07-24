import React from 'react'
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from '../assets/1.jpg'

const About = () => {
  return (
    <>
    <Navbar />
    <Hero
      cName="hero-mid"
      heroImg={AboutImg}
      title="About"
      btnClass="hide"
    />
  </>
  )
}

export default About
