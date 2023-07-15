import React, { Fragment } from 'react'
import "./Service1.css"
import patch from "../../../images/patch.png";
import Sidecomp from '../Services/Sidecomp';
import {useHistory} from 'react-router-dom';
function Service2() {
  const history = useHistory();
  // Perform the redirect
  const btnhandle = () => {
    history.push('/custom-order');
  };
  return (
    <Fragment>
      <div className='container-fluid'>
      <div className='service1-main '>
        <h1 className='service1-main-heading'>Embroidery Patches</h1>
        <div className='service1-data p-4 w-100'>
          <div className='service1-description '>
          <img src={patch} alt='image'/>
          <h1>Embroidery Patches With The <span className='raaa'>RAA Digitizing</span></h1>
          <p>We have now expanded our embroidery services to include digitizing and patches! With a wealth of experience in embroidery and digitizing, our team at RAA Digitizing has been providing reliable services to customers worldwide for many years. We are dedicated to serving our valued customers and ensuring top-notch embroidery work for all their needs.</p>
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
      <div className='container sub-services'>
      <div>
      <h2>Sub-services for Embroidery Patches</h2>
      </div>
      <div className='sub-services-options'>
      <p><span><i class="fa-regular fa-circle-check"></i></span>Patches</p>
      <p><span><i class="fa-regular fa-circle-check"></i></span>Badges</p>
      <p><span><i class="fa-regular fa-circle-check"></i></span>Applique badges</p>
      </div>     
      </div>
    </Fragment>
  )
}
export default Service2