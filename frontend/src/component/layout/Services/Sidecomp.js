import React, { Fragment } from 'react'
import "./SideComp.css";
function Sidecomp() {
  return (
    <Fragment>
        <div className='side-component'>
         <div className='side-comp-data'>
        <h1>Commitment to 100% Quality</h1>
        <p>We're confident that you'll find inspiration in our competitively priced offerings and extensive portfolio. Placing your order is a breeze - simply complete the online order form. Please ensure meticulous attention to detail by filling out every field with care and providing us with all the necessary information.</p>
         </div>
         <div className='side-comp-data'>
         <h1>Quick Turnaround Time</h1>
         <p>Once we receive your order, our experienced and skilled digitizers will promptly digitize the design based on the information provided. In case any data is missing or if we have any queries, we will reach out to you to ensure we create your desired design accurately. Your satisfaction is our priority.</p>

         </div>
        </div>
    </Fragment>
  )
}

export default Sidecomp