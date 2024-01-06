import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Link } from 'react-router-dom';



class Abouttdh extends Component {
    
    componentDidMount() {
        AOS.init({
            duration: 1500, 
        });
    }

    
    render() {
        const backgroundStyles = {
          background: 'linear-gradient(#fff7ef, #fff7ef)',
            backgroundRepeat: 'no-repeat',
            backgroundSize:'cover',
            paddingTop:'30px'
          
            
          };


          
        return (
          <section id="timeline " style={{backgroundColor:"white"}}>
            <div className="container-fluid   mt-lg-3 pb-5 pt-5">
              <div className="row ourstory-section text-center"  >
                  <div className='col-sm-12 col-lg-6 order-2 order-lg-2'>
                    <div className="section-title-wrap section-header text-center pt-3">
                      <h2 className="title">About TDH</h2>
                      <p className='largefont' style={{textAlign:'justify'}}>At <b className='bold-colour'> Tenali Double Horse</b>, our journey began in 2005 with a vision to bring excellence and trust to every household in  <b className='bold-colour'> India</b>. Guided by our commitment to quality and customer satisfaction, we have since become a trusted name that resonates with millions.</p>
                        <Link to="/aboutus" className="btn-custom btn-sm shadow-none suma  mt-2 mt-lg-0 mb-2">
                        READ OUR STORY
                        </Link>
                    </div>
                  </div>
                  <div className='col-sm-12 col-lg-6  order-1 order-lg-1 about-video'>
                  
                  <video width="100%" height="100%" controls poster={process.env.PUBLIC_URL + "/assets/video/tdh-chairman.png"}>
                          <source src={process.env.PUBLIC_URL + "/assets/video/tdh-chairmen-video.mp4"} type="video/mp4" />
                    </video>
                   
                 </div>
              </div>
            </div>
          </section>
        );
    }
}

export default Abouttdh;
