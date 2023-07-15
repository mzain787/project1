import "./aboutSection.css";
import React, { Fragment } from 'react';
import abimg1 from '../../../images/aboutimg1.jpeg';
import abimg2 from '../../../images/aboutimg2.jpeg';

function About() {
  return (
    <Fragment>
        <div className="container-fluid m-0 p-0 about">
           <div className="about-us-header p-2">
           <div className="about-us-heading">
           <h1>ABOUT US</h1>
           <p>Our design philosophy sets us apart from others, as we prioritize two key principles: simplicity and clarity.</p>
           </div>
           </div>
           <div className="company-intro">
           <h1>WHO WE ARE</h1>
           <hr className="hr1"/>
           <p>Welcome to RAA Digitizing, We are one-stop-shop for all your embroidery digitizing needs. Our company is committed to providing high-quality digitized embroidery designs & graphics designs to help businesses and individuals showcase their brand and creativity.</p>
           </div>
           <div className="about-us">
            <div className="about-us-text">
            <h2>ABOUT OUR COMPANY</h2>
            <p>At <span className="raa">RAA Digitizing</span>, we understand the importance of detail, precision, and creativity when it comes to embroidery digitizing/screen printing/digital printing. That is why we have a team of experienced and skilled professionals who work diligently to ensure that every design we create meets and exceeds our clients' expectations.

Our company was founded on the principles of excellent customer service, fast turnaround times, and affordable pricing. We believe that our success lies in the satisfaction of our clients, and we are dedicated to making sure that each and every customer is 100% satisfied with our services.

Our embroidery digitizing & vector art services are available to everyone, from small businesses to large corporations. We work with a wide range of industries, including fashion, sports, hospitality, and more. Whether you need a logo digitized for your baseball team's uniforms or a custom design for your fashion line, we've got you covered.</p>
<p>At RAA Digitizing, we use state-of-the-art software and equipment to create designs that are clean, sharp, and precise. We take great pride in the quality of our work, and we strive to exceed our clients' expectations with every design we create.

We believe that communication is key to a successful partnership, and that is why we work closely with our clients to ensure that every design we create meets their specific needs and requirements. We are always available to answer any questions or concerns that our clients may have, and we are dedicated to providing exceptional customer service every step of the way.

Thank you for considering RAA Digitizing for your embroidery digitizing & printing needs. We look forward to working with you and helping you bring your designs to life!
</p>
            </div>
            <div className="about-us-images">
            <img src={abimg1} alt='image' className="image"/>
            <img src={abimg2} alt='image' className="image"/>
            </div>
           </div>
           <div className="standards m-0">
           <h5>Our Standards</h5>
           <p>If it is necessary,
              we have the ability to visualize it</p>
            <div className="rules">
            <div className="rule">
            <i class="fa-brands fa-artstation fa-3x"></i>
            <p>Keep it simple</p>
            </div>
            <div className="rule">
            <i class="fa-solid fa-wand-sparkles fa-3x"></i>
            <p>Best and unique</p>
            </div>
            <div className="rule">
            <i class="fa-solid fa-lightbulb fa-3x"></i>
            <p>Love our work</p>
            </div>
            </div>
           </div>
        </div>
    </Fragment>
  )
}

export default About