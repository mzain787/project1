import React, { Fragment } from 'react'
import "./Service1.css"
import vectorart from "../../../images/vectorart.png";
import Sidecomp from '../Services/Sidecomp';
import {useHistory} from 'react-router-dom';
function Service3() {
  const history = useHistory();

  // Perform the redirect
  const btnhandle = () => {
    history.push('/custom-order');
  };
  return (
    <Fragment>
      <div className='container-fluid'>
      <div className='service1-main '>
        <h1 className='service1-main-heading'>Vector Art and Sublimation</h1>
        <div className='service1-data p-4 w-100'>
          <div className='service1-description '>
          <img src={vectorart} alt='image'/>
          <h1>Vector Art and sublimation With<span className='raaa'>RAA Digitizing</span></h1>
          <p>We specialize in transforming your images into top-quality line/vector art. Our team of 150+ skilled vector artists is dedicated to delivering exceptional vector art files, including formats like Adobe EPS, AI, PSD, and Corel Draw CDR. Our talented vector artists possess the expertise and professionalism to convert any image into a high-resolution vector format of your choice. Vector artwork utilizes vector graphics, which ensures that the image can be scaled to any size without compromising its quality. Unlike low-resolution images, vector files maintain their sharpness and clarity. Whether you require business cards, posters, or editing in Adobe Photoshop, vector art is an invaluable tool. Vector art is created using vector illustration software like Adobe Illustrator, guaranteeing its authenticity and quality.</p>
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
      <h2>Sub-services for Vector-art and sublimation</h2>
      <div className='sub-services-options'>
      <p><span><i class="fa-regular fa-circle-check"></i></span>Vector art</p>
      <p><span><i class="fa-regular fa-circle-check"></i></span>sublimation</p>
      <p><span><i class="fa-regular fa-circle-check"></i></span>Color separation</p>
      </div>     
      </div>
    </Fragment>
  )
}
export default Service3