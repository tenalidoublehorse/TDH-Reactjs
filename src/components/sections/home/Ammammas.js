import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import img3 from '../../../assets/img/team/tenali-double-horse-phir-se-udan-campaingh.webp'
let urls = "#csr-activities"


class Ammammas extends Component {
  componentDidMount() {
    AOS.init({
        duration: 1500, 
    });
}
    render() {
        return (
        
          <div className='recent-campaigns1 section-double '>
            <div className='container-fluid mb-3 mb-lg-5'>
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
                <div className='row d-flex justify-content-center ammamms-campaing'>
                <div className='col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center align-items-center  order-2 order-lg-2'>
                    <div className='mb-lg-5 camp-content'>
                      <div>
                        <div className="section-title-wrap section-header mb-md-5 mt-lg-5 mt-xl-5  mt-xxl-5 text-center ">
                            {/* <h5 className="custom-primary text-justify white-bg mx-auto">Ammamma's Signature</h5> */}
                            <h2 className="title">Dosa-Idly Batter </h2>
                            <p className='text-justify'>
                              At <b className='bold-colour'> Tenali Double Horse</b>, we're excited about collaboration with Ammamma's to bring you the delicious flavors of tradition. Ammamma's Dosa Batter was made with the fantastic <b className='bold-colour'> Tenali Double Horse Urad Gota</b>, which is about purity, quality, and a proud heritage.
                            </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-lg-30  order-1 order-lg-1 campaing-video" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <img src={process.env.PUBLIC_URL + "/assets/img/campaign/amm.png"} alt="High Nutritional" />
            
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default Ammammas;