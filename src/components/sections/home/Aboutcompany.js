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

        const videoHeader = {
          margin: "0px",
          background: "#000000",
          marginTop: "-10px",
          color: "#FFF",
          padding: "10px 0px"
        }


          
        return (
          <section id="timeline " style={{ ...backgroundStyles }}>
            <div className="container-fluid video-conatiner  mt-lg-3 pb-4">
              <div className="row ourstory-section text-center"  >
                  <div className='col-sm-12 col-lg-6 order-2 order-lg-2 wow animate__animated  animate__fadeInUp ' data-wow-delay="0.4s">
                    <div className="section-title-wrap section-header text-center pt-3">
                      <h2 className="title">About Tenali Double Horse</h2>
                      <p className='largefont' style={{textAlign:'justify'}}>At <b className='bold-colour'> Tenali Double Horse</b>, our journey began in 2005 with a vision to bring excellence and trust to every household in  <b className='bold-colour'> India</b>. Guided by our commitment to quality and customer satisfaction, we have since become a trusted name that resonates with millions.</p>
                      {this.props.pagename.pagename === "AboutUs" ? (
                    "") : (
                    <Link to="/aboutus" className="btn-custom btn-sm shadow-none suma  mt-2 mt-lg-0 mb-2">
                      READ OUR STORY
                    </Link>
                  )}
                    </div>
                  </div>
                  <div className='col-sm-12 col-lg-6  order-1 order-lg-1 about-video wow animate__animated delay-2s animate__fadeInUp ' >
                  {/* {this.props.pagename.pagename === "AboutUs" ? (
                    <iframe  src="https://www.youtube.com/embed/4haxVA5cTuY?si=A5FrVYfc6VYLRg4S" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className='mb-5 mx-auto border5'  allowfullscreen></iframe> 
                    ) : (
                      <video width="100%" height="100%" controls poster={process.env.PUBLIC_URL + "/assets/video/tdh-chairman.png"}>
                          <source src={process.env.PUBLIC_URL + "/assets/video/tdh-chairmen-video.mp4"} type="video/mp4" />
                      </video>
                  )} */}
                  <video width="100%" height="100%" controls poster={process.env.PUBLIC_URL + "/assets/video/tdh-chairman.png"}>
                          <source src={process.env.PUBLIC_URL + "/assets/video/tdh-chairmen-video.mp4"} type="video/mp4" />
                    </video>
                   
                 </div>
              </div>
            </div>

            <div className="container-fluid women-video-conatiner  mt-lg-12 pb-4" style={{ marginTop: "40px" }}>
                  <div className="row"  >
                    <div className='col-md-4' style={{ marginBottom: "20px" }}>
                      <iframe width="100%" height="250" src="https://www.youtube.com/embed/aNqjljPlwgo?si=fk1bqdDIiAJbdbmc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                      <p className="text-center" style={ videoHeader }><strong>Hindi</strong></p>
                    </div>
                    <div className='col-md-4' style={{ marginBottom: "20px" }}>
                      <iframe width="100%" height="250" src="https://www.youtube.com/embed/k3rESpnWkZA?si=Oj4B9ycqvxiiphGP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                      <p className="text-center" style={ videoHeader }><strong>Telugu</strong></p>
                    </div>
                    <div className='col-md-4' style={{ marginBottom: "20px" }}>
                      <iframe width="100%" height="250" src="https://www.youtube.com/embed/f861ADkySo8?si=v9OGfWVjFq-XGWuo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                      <p className="text-center" style={ videoHeader }><strong>Tamil</strong></p>
                    </div>
                  </div>
            </div>

          </section>
        );
    }
}

export default TimelineSection;
