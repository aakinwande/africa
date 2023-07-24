import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Destination from "../components/Destination";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://africacenter.org/wp-content/uploads/2023/01/Rally-in-Nigeria-scaled.jpg"
        title="Nigeria, my Country"
        text="Choose Your Favourite Destination"
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <Destination />
    </>
  );
};

export default Home;
