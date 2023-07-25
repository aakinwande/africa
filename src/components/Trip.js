import React from 'react'
import './TripStyles.css'
import TripData from './TripData'
import Trip1 from '../assets/11.jpg'
import Trip2 from '../assets/12.jpg'
import Trip3 from '../assets/13.jpg'
const Trip = () => {
  return (
    <div className='trip'>
        <h1>Recent Trip</h1>
        <p>You can discover unique destination using Google Maps.</p>      
        <div className='tripcard'>
            <TripData 
                image={Trip1}
                heading=" La Digue Island, Seychelles"
                text="Seychelles beaches offer a paradise-like experience with pristine white sands, turquoise waters, and lush tropical surroundings. Anse Source d'Argent and Anse Lazio are among the most famous beaches, known for their unique features and tranquil atmosphere, making Seychelles a dream destination for beach lovers seeking relaxation and beauty"
            />
            <TripData 
                image={Trip2}
                heading="Cape Town, South Africa"
                text="Cape Town's commercial industry is diverse and thriving, encompassing finance, tourism, manufacturing, technology, and services. The city serves as a major economic hub in South Africa, with a significant focus on its financial district in the CBD. Cape Town's natural beauty and cultural attractions contribute to a booming tourism sector."
            />
            <TripData 
                image={Trip3}
                heading="Casablanca, Morocco"
                text="Casablanca is the largest city in Morocco, serving as its economic and industrial center. Located on the western coast, it boasts a rich history and a blend of modernity and tradition. The city is known for its bustling port, economic significance in finance, real estate, manufacturing, and services, and iconic landmarks like the Hassan II Mosque. "
            />
        </div>
    </div>
  )
}

export default Trip
