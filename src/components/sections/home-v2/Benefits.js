import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import img3 from '../../../assets/img/team/tenali-double-horse-phir-se-udan-campaingh.webp'
let urls = "#csr-initiatives"


class Camapaing extends Component {
  componentDidMount() {
    AOS.init({
        duration: 1500, 
    });
}
    render() {
        return (
        
          <div className='recent-campaigns'>
            <div className='container-fluid mb-lg-5 mb-2'>
              <div className='main-content-section'>
                <div className=''>
                  {/* <div className="section-title-wrap section-header mb-md-5 mt-lg-5 mt-xl-5  mt-xxl-5 text-center ">
                    <h5 className="custom-primary text-center white-bg mx-auto">Campaign Chronicles</h5>
                    <h2 className="title">Explore Our Recent Campaigns</h2>
                    <p className="subtitle ">
                    Discover the latest buzz in the digital realm. Dive into our Recent digital or PR campaigns that bring you exciting updates and engaging content.
                    </p>
                  </div> */}
                </div>
                <div className='row d-flex justify-content-center campaing'>
                <div className='col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center align-items-center  order-2 order-lg-2 wow animate__animated  animate__slideInUp ' data-wow-delay="0.4s" >
                    <div className='mb-lg-5 camp-content'>
                      <div>
                        <div className="section-title-wrap section-header mb-md-5  text-center ">
                            {/* <h5 className="custom-primary text-justify white-bg mx-auto">Campaign Chronicles</h5> */}
                            <h2 className="title">Explore Our Recent Campaigns</h2>
                            <p className='text-justify'>
                               <b className='bold-colour'>Phir Se Udaan</b> is an initiative by your favourite <b className='bold-colour'>Tenali Double Horse</b> with a vision of empowering women inside and outside the house. Tenali Double Horse offers only the best quality and nutrition-packed range of Dals and Instant foods like Idli and Dosa mixes.
                            </p>
                        </div>
                      </div>
                      <div className='d-flex justify-content-center'>
                        <a href={urls} target='_blank' className="btn-custom mb-4">View More</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6  order-1 order-lg-1 campaing-video pb-5 wow animate__animated  animate__slideInUp" data-wow-delay="0.7s" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <video width="100%" height="100%" controls poster={process.env.PUBLIC_URL + "/assets/video/phire-se-uddan.png"}>
                          <source src={process.env.PUBLIC_URL + "/assets/video/phir-se-udan-event-womenempowerment-women.mp4"} type="video/mp4" />
                    </video>
                    {/* <iframe
                      title="YouTube Video"
                      src="https://www.youtube.com/embed/S1zLiEfbZ1Y?si=SE061xGF2MwD-Mc5"
                      frameborder="0"
                      allowfullscreen
                      loading="lazy"
                      style={{borderRadius:'10px'}}
                    ></iframe> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default Camapaing;