import React, { Component } from 'react';


class Greatplacetowork extends Component {
    render() {
        return (
            <div className="section ">
                <div className="container">
              
                    <div className="row ">
                        <div className="col-lg-6 mb-lg-30" style={{display:'flex',justifyContent:'center',alignItems:'center'}}> 
                        <video width="100%" height="95%" controls poster={process.env.PUBLIC_URL + "/assets/img/misc/great-place-to-work.png"}>
                          <source src={process.env.PUBLIC_URL + "/assets/video/great-place.mp4"} type="video/mp4" />
                      </video>
                          
                        </div>
                        <div className="col-lg-6 alignments">
                            <div className="section-title-wrap mr-lg-30 mt-lg-2">
                                <h5 className="custom-primary">Cultivating Excellence: A Great Place to Work</h5>
                                <h2 className="title">Nurturing Growth, Collaboration, and Fulfillment</h2>
                                <p className="subtitle" style={{ textAlign: 'justify' }}>
                                At Tenali Double Horse, our journey is defined not only by our products but also by our people. We take immense pride in fostering a work environment that is more than just a workplace; it's a space where creativity, innovation, and camaraderie flourish. As a testament to our commitment to our employees, we are honored to be recognized as a 'Great Place to Work.' This recognition reflects our dedication to creating an atmosphere where talent is nurtured, diversity is celebrated, and personal growth is encouraged.
                                </p>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Greatplacetowork;