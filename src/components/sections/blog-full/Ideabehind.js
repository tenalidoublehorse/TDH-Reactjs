import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

class Ideabehind extends Component {
    render() {
        return (
            <div className="section  pb-5  mb-5  ">
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-6 mb-lg-30 ">
                            <img src={process.env.PUBLIC_URL + "/assets/img/founder.png"}  alt="img" className='shadow-sm   bg-white rounded' />
                        </div>
                        <div className="col-lg-6 alignments">
                            <div className="section-title-wrap mr-lg-30 mt-lg-2">
                                <h5 className="custom-primary">Idea Behind</h5>
                                <h2 className="title">Tenali Double horse</h2>
                                <p className="subtitle" style={{textAlign:'justify'}}>
                                Shyam Prasad Garu, the visionary force behind Tenali Double Horse, is a trailblazer in entrepreneurship. With relentless pursuit of excellence, he fused tradition with innovation, elevating the brand to unparalleled heights. Urad Gota and Urad Dall of unmatched quality nourish millions and inspire dreamers. His empathetic leadership endears him to all, making him an inspiration for positive impact.
          </p>
                                {/* <p className="subtitle">
                                We encourage you to switch to the right choices, as it is the need of the hour!
          </p> */}
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Ideabehind;