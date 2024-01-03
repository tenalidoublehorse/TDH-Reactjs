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
        
          <div className='coocking-tips'>
            <div className='container-fluid'>
              <div className='main-content-section'>
                <div className=''>
                </div>
                <div className='row d-flex justify-content-center campaing pb-5'>
                <div className='col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center align-items-center  order-2 order-lg-1'>
                    <div className='mb-lg-5 camp-content'>
                      <div>
                        <div className="section-title-wrap section-header mb-md-5  text-center ">
                            {/* <h5 className="custom-primary text-justify white-bg mx-auto">Campaign Chronicles</h5> */}
                            <h2 className="title">Cooking Tips</h2>
                            <p className='text-justify'>
                            The mix of <b className='bold-colour'>Tenali Double Horse Urad Gota </b> and Idly Ravva is like magic for making fluffy idlis. The Urad Gota, when ground carefully, gives a rich taste, blending perfectly with the slightly grainy feel of the Idly Rava. These idlis strike a great balance, being both fluffy and a bit grainy, making each bite super enjoyable. The combo not only makes them tasty but also brings together different textures in a lovely way. It's a special mix that turns these idlis into a delicious treat, showing off the goodness of using Tenali Double Horse ingredients for a fantastic eating experience.
                            </p>
                        </div>
                      </div>
                      {/* <div className='d-flex justify-content-center'>
                        <a href={urls} target='_blank' className="btn-custom mb-4">View More</a>
                      </div> */}
                    </div>
                  </div>
                  <div className="col-lg-6  order-1 order-lg-2  pb-5" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                     <img src={process.env.PUBLIC_URL + "/assets/img/about/idley.png"} alt="coocking tips" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default Cockingtips;