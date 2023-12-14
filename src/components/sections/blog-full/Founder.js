import React, { Component } from 'react';

class Founder extends Component {
    render() {
        return (
            <div className="section light-bg pb-5  mb-5  ">
                <div className="container">
                    <div className="row ">
                    <div className="col-lg-6 mb-lg-30 alignments">
                           
                            <div className="section-title-wrap mr-lg-3 mt-lg-2">
                                <h5 className="custom-primary">Founder</h5>
                                <h2 className="title">Creating a vision, shaping a legacy.</h2>
                                <p className="subtitle" style={{textAlign:'justify'}}>
                                At the helm of Tenali Double Horse, Shyam Prasad Garu embodies the spirit of a visionary founder. With a clear vision and unwavering determination, he created a brand that stands as a testament to excellence and innovation. Urad Gota and Urad Dall of unmatched quality reflect his commitment to nourishing lives. At 60, his indelible impact continues to inspire and shape a remarkable legacy.
          </p>
                               
                               
                            </div>
                        </div>
                        <div className="col-lg-6">
                        <img src={process.env.PUBLIC_URL + "/assets/img/founder.png"}  alt="img" className='shadow-sm   bg-white rounded' />
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Founder;