import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import pdffile from '../../../assets/css/pdf/tenali-double-horse-info.pdf'

import img3 from '../../../assets/img/team/tenali-double-horse-phir-se-udan-campaingh.webp'
let urls = "#csr-activities"


class Tdhexplore extends Component {
  componentDidMount() {
    AOS.init({
        duration: 1500, 
    });
}

handleSaveChanges = () => {
  try {
  
    const pdfUrl = process.env.PUBLIC_URL + "/assets/img/Brochure/tenali-double-horse-info.pdf";

    // Open the PDF file URL in a new tab
    window.open(pdfUrl, '_blank');

    // Close the modal after saving
    this.handleClose();
  } catch (error) {
    console.error('Error opening PDF:', error);
    // Handle error if needed
  }
};
    render() {
        return (
        
          <div className='recent-campaigns1 suma-section-broacher'>
            <div className='container-fluid'>
              <div className='main-content-section'>
                <div className=''>
                 
                </div>
                <div className='row d-flex justify-content-center campaing'>
                <div className='col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center align-items-center  order-2 order-lg-2'>
                    <div className='mb-lg-5 camp-content'>
                      <div>
                        <div className="section-title-wrap section-header mb-md-5 mt-lg-5 mt-xl-5  mt-xxl-5 text-center ">
                            {/* <h5 className="custom-primary text-justify white-bg mx-auto">Explore Our Story</h5> */}
                            <h2 className="title">Download Our Brochure</h2>
                            <p className='text-justify '>
                              Delve into the essence of Tenali Double Horse with our comprehensive company brochure. Uncover our heritage, products, and commitment to quality in this informative guide.
                            </p>
                            <div>
                            <a
                                href={pdffile}
                                download="tenali-double-horse-info.pdf"
                                className="btn-custom btn-sm shadow-none suma"
                                target="_blank"
                                type="application/pdf"
                              >
                                Download Brochure
                              </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-lg-30  order-1 order-lg-1 suma-image" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <img src={process.env.PUBLIC_URL + "/assets/img/home/suma-every-bite-section-tdh.png"} alt="High Nutritional" />
          
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default Tdhexplore;