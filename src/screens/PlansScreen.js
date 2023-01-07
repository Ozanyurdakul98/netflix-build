import React from "react";
import "./PlansScreen.css";

function PlansScreen() {
  return (
    <div className='plansScreen'>
      <p>Renewal date: 05/03/2023</p>
      <div className='plansScreen_plan'>
        <div className='plansScreen_info'>
          <h5>Premium</h5>
          <h6>4k + HDR</h6>
        </div>
        <button>Subscribe</button>
      </div>
      <div className='plansScreen_plan'>
        <div className='plansScreen_info'>
          <h5>Standard</h5>
          <h6>1080p</h6>
        </div>
        <button>Subscribe</button>
      </div>
      <div className='plansScreen_plan--disabled'>
        <div className='plansScreen_info'>
          <h5>Basic</h5>
          <h6>720p</h6>
        </div>
        <button>Current Package</button>
      </div>
    </div>
  );
}

export default PlansScreen;
