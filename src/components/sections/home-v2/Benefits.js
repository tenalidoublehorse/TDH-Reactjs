import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import img3 from '../../../assets/img/team/tenali-double-horse-phir-se-udan-campaingh.webp'
let urls = "#csr-activities"


class Camapaing extends Component {
  componentDidMount() {
    AOS.init({
        duration: 1500, 
    });
}
    render() {
        return (
        
          <div>
            <div className='container mb-5'>
              <div>
                <div className="section-title-wrap section-header mb-md-5 mt-lg-5 mt-xl-5  mt-xxl-5 text-center ">
                  <h5 className="custom-primary mt-3">Campaign Chronicles</h5>
                  <h2 className="title">Explore Our Recent Campaigns</h2>
                  <p className="subtitle ">
                  Discover the latest buzz in the digital realm. Dive into our Recent digital or PR campaigns that bring you exciting updates and engaging content.
                  </p>
                </div>

              </div>
              <div className='row d-flex justify-content-center campaing'>
              <div className='col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center align-items-center  order-2 order-lg-1'>
                  <div className='mb-lg-5 camp-content'>
                    <div>
                      <p>
                        <b>Phir Se Udaan</b> is an initiative by your favourite <b>Tenali Double Horse</b> with a vision of empowering women inside and outside the house. Tenali Double Horse offers only the best quality and nutrition-packed range of Dals and Instant foods like Idli and Dosa mixes.

                      </p>
                    </div>
                    <div>
                      <a href={urls} target='_blank' className="btn-custom Register-campaining mb-4">View More</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-lg-30  order-1 order-lg-2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <iframe
                    title="YouTube Video"
                    width="100%"
                    height="100%"
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
        );
    }
}

export default Camapaing;