import React, { Component } from 'react';
// import WOW from 'wow.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';



class TimelineSection extends Component {
    
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
          <section id="timeline " style={{ ...backgroundStyles }}>
              {/* <div className="section-title-wrap section-header text-center pt-1">
                        <h2 className="title">Tenali Double Horse</h2>
                        <p className='largefont'>At Tenali Double Horse, our journey began in 2005 with a vision to bring excellence and trust to every household in India. Guided by our commitment to quality and customer satisfaction, we have since become a trusted name that resonates with millions.</p>
              </div> */}
            <div className="container-fluid video-conatiner mt-3">
              <div className="row ourstory-section text-center"  >
                  <div className='col-sm-12 col-lg-6 order-2 order-lg-2'>
                    <div className="section-title-wrap section-header text-center pt-1">
                      <h2 className="title">About TDH</h2>
                      <p className='largefont' style={{textAlign:'justify'}}>At <b className='bold-colour'> Tenali Double Horse</b>, our journey began in 2005 with a vision to bring excellence and trust to every household in  <b className='bold-colour'> India</b>. Guided by our commitment to quality and customer satisfaction, we have since become a trusted name that resonates with millions.</p>
                      {this.props.pagename.pagename === "AboutUs" ? (
                    "") : (
                    <Link to="/about" className="btn-custom btn-sm shadow-none suma mb-5">
                      READ OUR STORY
                    </Link>
                  )}
                    </div>
                  </div>
                  <div className='col-sm-12 col-lg-6  order-1 order-lg-1 about-video'>
                  {this.props.pagename.pagename === "AboutUs" ? (
                    <iframe  src="https://www.youtube.com/embed/4haxVA5cTuY?si=A5FrVYfc6VYLRg4S" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className='mb-5 mx-auto border5'  allowfullscreen></iframe> 
                    ) : (
                      <iframe  src="https://www.youtube.com/embed/6iYttZFN9KA?si=Ti2sQX5oERZ6WeR0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className='mb-5 mx-auto border5'  allowfullscreen></iframe>
                  )}
                   
                 </div>
                 
                
                 
                
                
              </div>
            </div>
          </section>
        );
    }
}

export default TimelineSection;
