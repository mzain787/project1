import React, { Fragment } from 'react'
import "./Dformats.css";
import wilcom from "../../images/wilcom.png";
import emb from "../../images/emb.png";
import pxf from "../../images/pxf.png";
import ngs from "../../images/ngs.png";
import dst from "../../images/dst.png";
import pes from "../../images/pes.png";
import cdr from "../../images/cdr.png";
import eps from "../../images/eps.png";
import ai from "../../images/ai.png";
import pdf from "../../images/pdf.png";
import psd from "../../images/psd.png";
function Dformats() {
  return (
    <Fragment>
        <div className='dformats container-fluid m-0'>
        <h1>Digitizing Formats We Offer</h1>
        <div className='formats-offer'>
        <div className='format'>
        <div className='format-description w-75'>
        <p>We offer a wide range of file formats to ensure your convenience and satisfaction. For embroidery designs, we provide formats like WILCOM EMB., PXF, NGS, .DST, .PES, and more. These formats are compatible with various machines and software.</p>
        </div>
        <div className='format-images w-25'>
        <img src={wilcom} alt='image'/>
        <img src={emb} alt='image'/>
        <img src={ngs} alt='image'/>
        <img src={pxf} alt='image'/>
        <img src={dst} alt='image'/>
        <img src={pes} alt='image'/>
        </div>
        
        </div>
        <div className='format'>
        <div className='format-images w-25'>
         <img src={cdr} alt='image'/>
         <img src={eps} alt='image'/>
         <img src={ai} alt='image'/>
         <img src={pdf} alt='image'/>
         <img src={psd} alt='image'/>
        </div>
        <div className='format-description w-75'>
        <p>For <span>vector designs </span>we offer .cdr, .eps, .ai, .pdf, and .psd formats, which are widely used in graphic design and printing. Our goal is to provide you with the flexibility to work with our designs in your specific applications, ensuring exceptional customer service along the way.</p>
        </div>
        </div>
        </div>
        </div>
    </Fragment>
  )
}

export default Dformats