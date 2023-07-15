import React from 'react';
import "./CoDetails.css";
import quoteimg from "../../../images/quote.jpg";

function CoDetails() {
  return (
    <>
    <div className='container-fluid'>
    <div className="custom-order-details-main">
    <h1 className='codetails-heading'>Custom Order Details</h1>
    <div className='codetails-section'>
        <div className='single-detail sd-one'>
            <p className='single-detail-heading'>Customer Name</p>
            <p className='single-detail-text'>Name</p>
        </div>
        <div className='single-detail sd-two'>
            <p className='single-detail-heading'>Email Address</p>
            <p className='single-detail-text w-75'>Email</p>
        </div>
        <div className='single-detail sd-one 0'>
            <p className='single-detail-heading'>Phone Number</p>
            <p className='single-detail-text '>Ph_no</p>
        </div>
        <div className='single-detail sd-two 0'>
            <p className='single-detail-heading'>Logo Name</p>
            <p className='single-detail-text '>l_na</p>
        </div>
        <div className='single-detail sd-one 0'>
            <p className='single-detail-heading'>Required Format</p>
            <p className='single-detail-text '>required_format</p>
        </div>
        <div className='single-detail sd-two'>
            <p className='single-detail-heading'>Software</p>
            <p className='single-detail-text '>Software</p>
        </div>
        <div className='single-detail sd-one'>
            <p className='single-detail-heading'>Dimensions</p>
            <p className='single-detail-text '>dimensions</p>
        </div>
        <div className='single-detail sd-two'>
            <p className='single-detail-heading'>Required Color</p>
            <p className='single-detail-text '>dimensions</p>
        </div>
        <div className='single-detail sd-one'>
            <p className='single-detail-heading'>Number of Colors</p>
            <p className='single-detail-text '>c</p>
        </div>
        <div className='single-detail sd-two'>
            <p className='single-detail-heading'>Center Point</p>
            <p className='single-detail-text'>point</p>
        </div>
        <div className='single-detail sd-one w-100'>
            <p className='single-detail-heading'>Comments</p>
            <p className='single-detail-text w-75'>co</p>
        </div>
        <div className='single-detail sd-two w-100'>
            <p className='single-detail-heading'>Remarks</p>
            <p className='single-detail-text w-75'>remarks</p>
        </div>
        <div className='single-detail sd-one w-100 image-section'>
            <p className='single-detail-heading'>Art Work provided:</p>
            <div className='single-detail-image w-75'>
             <img src={quoteimg} alt='image' data-bs-toggle="modal" data-bs-target="#exampleModal"/>
            </div>
        </div>
    </div>
    </div> 
    </div>




{/* <!-- Modal --> */}
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog b_modal">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Art Work</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div className='modal-image'>
            <img src={quoteimg} alt='modal-img'/>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default CoDetails