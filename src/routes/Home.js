import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://cdn.thecoolist.com/wp-content/uploads/2021/03/Wild-African-elephant-in-the-savannah-Serengeti-National-Park.jpg"
        title="Africa, My Continent"
        text="Choose Your Favourite Destination"
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
};

export default Home;
