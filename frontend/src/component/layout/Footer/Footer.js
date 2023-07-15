import React, {useRef} from "react"
import logo from "../../../images/rlogo.png";
import paypal from "../../../images/paypal.png";
import "./Footer.css";
import {Link} from "react-router-dom";
const Footer = () => {
   
const handlepaypal = () => {
  // Open the website in a new window or mini window
  window.open('https://www.paypal.com/cgi-bin/webscr?business=Adilaawan112@gmail.com&cmd=_xclick&currency_code=USD&amount=0', 'myWindow', 'width=400,height=600');
};
  return (
    <div>
    <footer id="footer" className="row container-fluid m-0 p-5">
      <div className="leftFooter col-lg-3">
        <img src={logo} alt="company-logo" className="logo-img" />
        <p className="sm-w-25">Your trusted source for high-quality embroidery digitizing 
          and graphic design services, ensuring customer satisfaction with precision and excellent communication.
          </p>
      </div>

      <div className="midFooter1 col-lg-3 mt-3">
        <h2 className="mb-3">Services</h2>
        <p><Link to='/embroidery-digitizing'>Embroidery Digitizing</Link></p>
        <p><Link to='/embroidery-patches'>Embroidery Patches</Link></p>
        <p><Link to='/vector-art-services'>Vector Art & sublimation</Link></p>
        <p><Link to='/pu-labels'>PU Labels</Link></p>
        
      </div>
      
      <div className="midFooter1 col-lg-3 mt-3">
        <h2 className="mb-3">Quick Links</h2>
        <p><Link to='/#'>Home</Link></p>
        <p><Link to="/about">About</Link></p>
        <p><Link to="/services">Services</Link></p>
        <p><Link to="/products">Shop</Link></p>
        <p><Link to="/projects">Portfolio</Link></p>
        <p><Link to='/contact'>Contact</Link></p>
      </div>

      <div className="rightFooter col-lg-3 mt-3">
        <h2 className="mb-3">Custom Orders</h2>
        <p>We Provide Instant Quote & Custom Rush Orders Deliveries.</p>
        <p className="followus">Follow US on</p>
        <div className="footer-icons">
        <a target="_blank" href="https://www.facebook.com/raadigitizing/"><i class="fa-brands fa-facebook " ></i></a>
        <a target="_blank" href="https://www.linkedin.com/in/raa-digitizing-85270721a/"><i class="fa-brands fa-linkedin"></i></a>
        <a target="_blank" href="https://www.instagram.com/raadigitizing/"><i class="fa-brands fa-instagram"></i></a>
        <a target="_blank" href="https://twitter.com/RaaDigitizing"><i class="fa-brands fa-square-twitter"></i></a>
        </div>
        <button onClick={handlepaypal} className="paypal-btn  w-75">
          <img src={paypal} className="p-2" />
        </button>
      </div>
      
    </footer>
    <div className="copyright">
        <p>Copyright <span>&copy;</span> 2023 | RAA Digitizing</p>
      </div>
    </div>
  );
};

export default Footer;

