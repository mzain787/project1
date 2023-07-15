import React from 'react'
import "./Hero.css";
import slide1 from "../../images/slide1.jpg";
import slide2 from "../../images/slide2.jpg";
import slide3 from "../../images/slide3.jpg";
import slider1 from "../../images/slider1.png";
import slider2 from "../../images/slider2.png";
import slider3 from "../../images/slider3.png";
import {useHistory} from 'react-router-dom';
function Hero() {
  const history = useHistory();
  const handle = () => {
    history.push('/custom-order');
  };
  const handle1 = () => {
    history.push('/contact');
  };
  const handle2 = () => {
    history.push('/services');
  };
  return (
    <>
      <div className='Hero-section'>
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
          <ol className="carousel-indicators">
            <li type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></li>
            <li type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></li>
            <li type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></li>
          </ol>
          <div class="carousel-inner">
          <div class="carousel-item active">
              <img src={slide1} class="d-block w-100 slide-img" alt="..." />{/**=============this is the slede background =========== */}
              <div class="carousel-caption">
                <div className='slide-data hero-main w-100'>
                  <div className='carousel-data'>
                    <h1>RAA <span className='inner-text'>DIGITIZING</span></h1>
                    <h3>Embroidery Digitizing Company</h3>
                    <p>Complete your embroidery and vector design needs with our comprehensive one-stop solution!</p>
                    <button className='carousel-button ' onClick={handle}>
                      REQUEST A QUOTE
                    </button>
                  </div>
                  <div className='slider-image'>
                    <img src={slider1} alt="design1" />
                  </div>
                </div>
              </div>
            </div>
          <div class="carousel-item">
              <img src={slide2} class="d-block w-100  slide-img" alt='image' />{/*==========This is the slide background ===========*/}
              <div class="carousel-caption">
                <div className='w-100 hero-main slide-data'>
                  <div className='carousel-data'>
                    <h1>VECTOR ART <span className='inner-text'>CONVERSION</span></h1>
                    <h3>Transform your designs into vectors by our experts</h3>
                    <p>Revitalize your designs for long-lasting use with our expert art conversion services!</p>
                    <button className='carousel-button' onClick={handle1}>
                      LET'S GET STARTED
                    </button>
                  </div>
                  <div className='slider-image'>
                    <img className='slide-2' src={slider2} alt="design2" />
                  </div>
                </div>
              </div>
            </div>
            
            <div class="carousel-item">
              <img src={slide3} class="d-block w-100 slide-img" alt='image' />{/**========this is a slide background============ */}
              <div class="carousel-caption ">
                <div className='slide-data hero-main third w-100'>
                  <div className='carousel-data'>
                    <h1>EXCITING <span className='inner-text'>NEWS</span></h1>
                    <h3>All Your Design and Digitizing Needs in One Convenient Place</h3>
                    <p>Now you can get Embroidery and any kind of design at one place</p>
                    <button className='carousel-button' onClick={handle2}>
                      Explore Services
                    </button>
                  </div>
                  <div className='slider-image '>
                    <img className="third-slider-image" src={slider3} alt='image' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Hero