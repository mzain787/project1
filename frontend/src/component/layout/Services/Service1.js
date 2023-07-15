import React, { Fragment } from 'react'
import "./Service1.css"
import bird from "../../../images/embbird.jpg";
import Sidecomp from '../Services/Sidecomp';
import {useHistory} from 'react-router-dom';
function Service1() {
  const history = useHistory();

  // Perform the redirect
  const btnhandle = () => {
    history.push('/custom-order');
  };
  return (
    <Fragment>
      <div className='container-fluid'>
      <div className='service1-main '>
        <h1 className='service1-main-heading'>Embroidery Digitizing</h1>
        <div className='service1-data p-4 w-100'>
          <div className='service1-description '>
          <img src={bird} alt='image'/>
          <h1>Embroidery Digitizing With <span className='raaa'>RAA Digitizing</span></h1>
          <p>Embroidery digitizing, once seen as a niche hobby or specialized craft, has gained significant prominence, evolving into a highly sophisticated and technologically advanced method for enhancing designs. It has transformed the world of embroidery by infusing innovation into this traditional art form. With the advent of embroidery digitizing, outdated techniques have been surpassed, giving way to more brilliant and precise outcomes. Whether it's adding depth to garments, incorporating logos, or serving as a foundation for trendy designs, the importance of embroidery digitizing cannot be overstated. It has become an indispensable medium, enabling the achievement of superior results. By seamlessly blending technology and creativity, embroidery digitizing has breathed new life into this timeless craft, providing endless possibilities for design expression. Its significance and impact are undeniable, as it continues to push the boundaries of what can be achieved in the realm of embroidery. </p>
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
      <h2>Here is a concise list of the sub-services for Embroidery Digitizing</h2>
      <div className='sub-services-options'>
      <p><span><i class="fa-regular fa-circle-check"></i></span>Left chest logo digitizing</p>
      <p><span><i class="fa-regular fa-circle-check"></i></span>Cap logo digitizing</p>
      <p><span><i class="fa-regular fa-circle-check"></i></span>Jacket back digitizing</p>
      <p><span><i class="fa-regular fa-circle-check"></i></span>Chain stitch digitizing</p>
      <p><span><i class="fa-regular fa-circle-check"></i></span>Cross stitch digitizing</p>
      <p><span><i class="fa-regular fa-circle-check"></i></span>Applique digitizing</p>
      </div>     
      </div>
    </Fragment>
  )
}
export default Service1