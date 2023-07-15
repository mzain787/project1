import "./HomeService.css";
import React from 'react'
import serviceimg1 from "../../images/serviceimg1.jpeg";
import serviceimg2 from "../../images/serviceimg2.jpg";
import serviceimg3 from "../../images/serviceimg3.jpg";
import serviceimg4 from "../../images/serviceimg4.jpg";
import {useHistory} from 'react-router-dom';

function HomeService() {
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
    <div className="home-service-main container-fluid m-0 p-0">
       <div className="home-service-heading">
       <h1>Best Digitizing Services</h1>
       <p>RAA Digitizing is a leading provider of embroidery digitizing and Vector Art services, committed to delivering superior quality. With our extensive expertise in the field of embroidery digitizing, we offer a wide range of techniques, including applique design, textures, 3D foam, vectorization, and more. Our dedicated team of skilled embroidery designers and vector artists is available 24/7, ensuring prompt and professional service.</p>
       </div>
       <div className="home-service-box w-100">
        <div className="home-service-card">
        <img src={serviceimg1} alt='image'/>
        <div className="service-card-inner">
        <h1>Embroidery Digitizing</h1>
        <button onClick={handleRedirect1}>
            Explore Service
          </button>
        </div>     
        </div>
        <div className="home-service-card">
        <img src={serviceimg2} alt='image'/>
        <div className="service-card-inner">
        <h1>Embroidery Patches</h1>
        <button onClick={handleRedirect2}>
            Explore Service
          </button>
        </div>     
        </div>
        <div className="home-service-card">
        <img src={serviceimg3} alt='image'/>
        <div className="service-card-inner">
        <h1>Vector Art and sublimation</h1>
        <button onClick={handleRedirect3}>
            Explore Service
          </button>
        </div>     
        </div>
        <div className="home-service-card">
        <img src={serviceimg4} alt='image'/>
        <div className="service-card-inner">
        <h1> PU Labels</h1>
        <button onClick={handleRedirect4}>
            Explore Service
          </button>
        </div>     
        </div>
       </div>
    </div>
  )
}

export default HomeService