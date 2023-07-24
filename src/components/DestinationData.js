import { Component } from 'react';
import './DestinationStyles.css'
import HomeImg1 from '../assets/4.jpg'
import HomeImg2 from '../assets/5.jpg'
import HomeImg3 from '../assets/1.jpg'
import HomeImg4 from '../assets/1.jpg'

class DestinationData extends Component {
    render(){
        return(
            <div className="first-des">
            <div className="des-text">
              <h2>Federal Capital Territory, Nigeria</h2>
              <p>
                The Federal Capital Territory (FCT) is a federal territory in
                central Nigeria. Abuja, the capital city of Nigeria, is located in
                this territory. The FCT was formed in 1976 from parts of the
                states of old Kaduna, Kwara, Niger, and Plateau states, with the
                bulk of land mass carved out of Niger state. The Federal Capital
                Territory is within the North Central region of the country. Unlike
                other states of Nigeria, which are headed by elected Governors, it
                is administered by the Federal Capital Territory Administration,
                headed by a minister, who is appointed by the President.
              </p>
            </div>
    
            <div className="image">
                <img alt="homeImg" src={HomeImg1} />
                <img alt="homeImg" src={HomeImg2} />
            </div>
          </div>
        )
    }
}
export default DestinationData;