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
              <div className="section-title-wrap section-header text-center pt-1">
                        <h2 className="title">Tenali Double Horse</h2>
                        <p>At Tenali Double Horse, our journey began in 2005 with a vision to bring excellence and trust to every household in India. Guided by our commitment to quality and customer satisfaction, we have since become a trusted name that resonates with millions.</p>
              </div>
            <div className="fluid-container video-conatiner mt-3">
              <div className="row ourstory-section text-center"  >
                <div className='col-lg-12   about-video'>

                  {/* <ReactPlayer
                    url={"./assets/video/tdh-chairmen-video.mp4"}
                    controls
                    poster={process.env.PUBLIC_URL + "/assets/img/misc/our-story-poster.png"}
                    width="100%"
                    height="60%"
                  /> */}

                  <div>
                    <iframe  src="https://www.youtube.com/embed/kmjjov75uSI?si=BxxlkuhWZ2jppSJ-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className='mb-5 mx-auto border5'  allowfullscreen></iframe>
                 </div>
                 
                
                  {this.props.pagename.pagename === "AboutUs" ? (
                    "") : (
                    <Link to="/about" className="btn-custom btn-sm shadow-none suma mb-5">
                      READ OUR STORY
                    </Link>
                  )}
                  {/* <Link to="/about" className=" btn-custom btn-sm shadow-none suma mb-5 "> READ OUR STORY </Link> */}
                </div>
              </div>
            </div>
          </section>
        );
    }
}

export default TimelineSection;
