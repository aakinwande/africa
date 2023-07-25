import React from "react";
import "./DestinationStyles.css";
import DestinationData from "./DestinationData";
import HomeImg1 from "../assets/4.jpg";
import HomeImg2 from "../assets/5.jpg";
import HomeImg3 from "../assets/9.jpg";
import HomeImg4 from "../assets/10.jpg";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>
        Tour gives you the opportunity to see alot within Africa and its
        countries
      </p>

      <DestinationData
        className="first-des"
        heading="FCT Abuja, Nigeria"
        text="Abuja is the capital city of Nigeria, established in 1991 to replace Lagos as the political and administrative center. As a planned city, it boasts modern infrastructure, wide roads, and a well-organized layout. The city houses various government institutions, foreign embassies, and international organizations. Alongside its administrative significance, Abuja offers tourist attractions like the Aso Rock and green spaces such as Millennium Park. Abuja remains a growing metropolis contributing to Nigeria's development."
        img1={HomeImg1}
        img2={HomeImg2}
      />
      <DestinationData
        className="first-des-reverse"
        heading="Cairo,  Egypt"
        text="Cairo, the capital of Egypt, is a vibrant and historically rich city situated on the banks of the Nile River. With a population of over 10 million, it is the largest city in Africa and the Middle East. Steeped in ancient history, Cairo boasts iconic landmarks like the Giza Pyramids and the Sphinx, which stand as a testament to the city's significant role in Egypt's past. The city's cultural scene is vibrant, featuring museums, theaters, and art galleries. As a major hub for the Arab world, Cairo plays a crucial role in politics, economy, and culture, making it a captivating destination for travelers and a vital center of influence in the region."
        img1={HomeImg3}
        img2={HomeImg4}
      />
    </div>
  );
};

export default Destination;
