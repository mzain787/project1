import "../Services/Servicebox.css";
import serviceimg1 from "../../../images/serviceimg1.jpeg";
import serviceimg2 from "../../../images/serviceimg2.jpg";
import serviceimg3 from "../../../images/serviceimg3.jpg";
import serviceimg4 from "../../../images/serviceimg4.jpg";
import React, { Fragment } from 'react';
import {useHistory} from 'react-router-dom';

function Servicebox() {
  const history = useHistory();

  // Perform the redirect
  const handleRedirect1 = () => {
    history.push('/embroidery-digitizing');
  };
  const handleRedirect2 = () => {
    history.push('/embroidery-patches');
  };
  const handleRedirect3 = () => {
    history.push('/vector-art-services');
  };
  const handleRedirect4 = () => {
    history.push('/pu-labels');
  };
  return (
    <Fragment>
        <div className="container-fluid m-0 pt-0 p-3 main-wrapper">
        <h1 className="service-heading">Services We Provide</h1>
        <div className='service-box'>
          <div className='service-card'>
           <div className='card-img'>
           <img src={serviceimg1} alt='image'/>
           </div>
           <div className='card-data'>
           <h1>Embroidery Digitizing</h1>
           <p>Embroidery digitizing is the process of converting artwork or designs into a digital format that can be stitched onto fabric using an embroidery machine.</p>
           <button className="view-service-btn" onClick={handleRedirect1}>
            View Service 
           </button>
           </div>
          </div>

          <div className='service-card'>
           <div className='card-img'>
            <img src={serviceimg2} alt='image'/>
           </div>
           <div className='card-data'>
           <h1>Embroidery Patches</h1>
           <p>Embroidery patches are decorative elements created by stitching thread onto a fabric backing, often with intricate designs or logos.</p>
           <button className="view-service-btn"onClick={handleRedirect2}>
            View Service 
           </button>
           </div>
          </div>

          <div className='service-card'>
           <div className='card-img'>
            <img src={serviceimg3} alt='image'/>
           </div>
           <div className='card-data'>
           <h1>Vector Art and sublimation</h1>
           <p>Vector art used in sublimation printing to create designs, transferred onto materials using heat and pressure, resulting in vibrant and durable prints.</p>
           <button className="view-service-btn" onClick={handleRedirect3}>
            View Service 
           </button>
           </div>
          </div>

          <div className='service-card'>
           <div className='card-img'>
            <img src={serviceimg4} alt='image'/>
           </div>
           <div className='card-data'>
           <h1>PU Labels</h1>
           <p>PU labels, or polyurethane labels, are flexible and durable branding labels used for product identification and embellishment.</p>
           <button className="view-service-btn" onClick={handleRedirect4}>
            View Service 
           </button>
           </div>
          </div>

        </div>
        </div>
    </Fragment>
  )
}

export default Servicebox
