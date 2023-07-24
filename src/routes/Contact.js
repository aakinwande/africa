import React from 'react'
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ContactImg from '../assets/3.jpg'


const Contact = () => {
  return (
    <>
    <Navbar />
    <Hero
      cName="hero-mid"
      heroImg={ContactImg}
      title="Contact"
      btnClass="hide"
    />
  </>
  )
}

export default Contact
