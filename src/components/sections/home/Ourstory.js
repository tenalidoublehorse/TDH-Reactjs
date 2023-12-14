import React, { useState } from 'react';


const Ourstory = () => {

  return (
    <div>
          <div className="section ">
                <div className="container">
                <div className=''>
                          <h2 className="text-center title mt-2 mb-5 ">Our Story</h2>
                      </div>
                    <div className="row ourstory-section text-center">
                      
                      <video width="100%" height="450px" controls>
                          <source src={process.env.PUBLIC_URL + "/assets/video/tdh-our-story.mp4"} type="video/mp4" />
                      </video>
                    </div>
                </div>
        </div>
        
       
    </div>
  );
};
export default Ourstory;
