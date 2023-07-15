import React, { Fragment } from 'react'
import "./Service1.css"
import pulabel from "../../../images/pulabel.png";
import pulabel1 from "../../../images/pulabel1.jpeg";
import pulabel2 from "../../../images/pulabel2.jpeg";
import pulabel3 from "../../../images/pulabel3.jpeg";
import pulabel4 from "../../../images/pulabel4.jpeg";
import Sidecomp from '../Services/Sidecomp';
import {useHistory} from 'react-router-dom';

function Service4() {
  const history = useHistory();
  // Perform the redirect
  const btnhandle = () => {
    history.push('/custom-order');
  };
  return (
    <Fragment>
      <div className='container-fluid'>
      <div className='service1-main '>
        <h1 className='service1-main-heading'>PU Labels</h1>
        <div className='service1-data p-4 w-100'>
          <div className='service1-description '>
          <img src={pulabel} alt='image'/>
          <h1>PU-Labels Service With<span className='raaa'>RAA Digitizing</span></h1>
          <p>Discover our PU-Labels service, offering durable and flexible labels for all your branding needs. Our customizable labels are perfect for clothing, accessories, and promotional items. Resistant to various environmental factors, our high-quality labels are built to last. With advanced printing and cutting technologies, we provide precise and vibrant labels quickly. Elevate your brand with our stylish and reliable labels, showcasing your logo or design flawlessly.</p>
          <button onClick={btnhandle}>
            GET INSTANT QUOTE
          </button>
          </div>
          <div className='service-side-data'>
            <Sidecomp/>
          </div>
          </div>
      </div>
      </div>
      <div className='container-fluid pu-label-potfolio'>
      <h2>PU-Lables</h2>
      <div className='pu-label-images'>
      <img src={pulabel1} alt='image'/>
      <img src={pulabel2} alt='image'/>
      <img src={pulabel3} alt='image'/>
      <img src={pulabel4} alt='image'/>
      </div>     
      </div>
    </Fragment>
  )
}
export default Service4