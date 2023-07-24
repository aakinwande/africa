import React from "react";
import "./DestinationStyles.css"
import DestinationData from "./DestinationData";


const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>
        Tour gives you the opportunity to see alot within Nigeria and her states
      </p> 

     <DestinationData />
    </div>
  );
};

export default Destination;
