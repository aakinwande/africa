import React from 'react'
import Hero from "../components/Hero";
import ContactImg from '../assets/3.jpg'
import Footer from "../components/Footer";
import SignUpForm from '../components/SignUpForm';


const SignUp = () => {
  return (
    <div>
    <Hero
      cName="hero-mid"
      heroImg={ContactImg}
      btnClass="hide"
    />
    <SignUpForm />
    </div>
  )
}

export default SignUp
