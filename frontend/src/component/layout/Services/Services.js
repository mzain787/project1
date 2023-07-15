import React, { Fragment } from 'react'
import "../Services/Services.css"
import slider1 from "../../../images/slider1.png";
import slider2 from "../../../images/slider2.png";
import slider3 from "../../../images/slider3.png";
import Servicebox from './Servicebox.js';
function Services() {
  return (
    <Fragment>
      <div className='container-fluid m-0 c-main bg-dark'>
        <div className='services-main'>
          <div className='services-page-content'>
            <h1 className='services-head'>Our Services</h1>
            <p className='services-pera'>Raa Digitizing is a one-stop-shop for embroidery digitizing, embroidery patches, vector art, sublimation, and color separation services. Our embroidery digitizing service covers a range of sub-services, including left chest logo digitizing, cap logo digitizing, jacket back digitizing, chain stitch digitizing, cross-stitch digitizing, and applique digitizing. Our embroidery patches service provides patches, badges, and applique badges. We also offer vector art and sublimation services, including color separation. Raa Digitizing provides high-quality services with fast turnaround times and competitive pricing. We have a team of experienced professionals who can help bring your designs to life and deliver exceptional results.</p>
          </div>
          <div class='services-images d-flex justify-content-center'>
            <div id="carouselExampleFade" class="carousel  carousel-fade" data-bs-ride="carousel">
              <div class="carousel-inner =">
                <div class="carousel-item active">
                  <img src={slider1} class="d-block  ml-2 images" alt='image' />
                </div>
                <div class="carousel-item">
                  <img src={slider2} class="d-block ml-2  images" alt='image'/>
                </div>
                <div class="carousel-item">
                  <img src={slider3} class="d-block ml-2  images" alt='image' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Servicebox/>
    </Fragment>
  )
}
export default Services
