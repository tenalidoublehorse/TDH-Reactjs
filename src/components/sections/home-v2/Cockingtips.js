import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
let urls = "#csr-activities"


class Cockingtips extends Component {
  componentDidMount() {
    AOS.init({
        duration: 1500, 
    });
}
    render() {
        return (
        
          <div className='recent-campaigns'>
            <div className='container-fluid'>
              <div className='main-content-section'>
                <div className=''>
                </div>
                <div className='row d-flex justify-content-center campaing'>
                <div className='col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center align-items-center  order-2 order-lg-2'>
                    <div className='mb-lg-5 camp-content'>
                      <div>
                        <div className="section-title-wrap section-header mb-md-5  text-center ">
                            {/* <h5 className="custom-primary text-justify white-bg mx-auto">Campaign Chronicles</h5> */}
                            <h2 className="title">Cooking Tips</h2>
                            <p className='text-justify'>
                              The mix of <span>Tenali Double Horse Urad Gota and Idly Ravva</span>is like magic for making fluffy idllis.
                            </p>
                        </div>
                      </div>
                      <div className='d-flex justify-content-center'>
                        <a href={urls} target='_blank' className="btn-custom mb-4">View More</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6  order-1 order-lg-1 campaing-video pb-5" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <iframe
                      title="YouTube Video"
                      src="https://www.youtube.com/embed/S1zLiEfbZ1Y?si=SE061xGF2MwD-Mc5"
                      frameborder="0"
                      allowfullscreen
                      loading="lazy"
                      style={{borderRadius:'10px'}}
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default Cockingtips;