import React, { Component } from 'react';
// import WOW from 'wow.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ReactPlayer from 'react-player';

class TimelineSection extends Component {

    
    componentDidMount() {
        AOS.init({
            duration: 1500, 
        });
    }

    
    render() {
        const backgroundStyles = {
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/bg/video-background-image.png)`,
            backgroundRepeat: 'no-repeat',
            backgroundSize:'cover',
          };


          
        return (
            <section id="timeline" style={{backgroundColor:'#fff',borderTop:'none'}}>
                <h5 className="custom-primary text-center">Unveiling Our Origins</h5>
        <h2 className="title text-center">A Timeline of Growth, Innovation, and Impact</h2>
                <div className="demo-card-wrapper pt-2 pb-5">
                    <div className="demo-card demo-card--step1  " data-aos="fade-left" data-aos-delay="400">
                        <div className="head p-3">
                            {/* <div className="number-box">
                                <span>2005</span>

                            </div> */}
                            <h2 className='text-white'><span className="small">The</span>Beginning</h2>
                        </div>
                        <div className="body">
                            <p className='content-justify' style={{lineHeight:'24px'}}>Tenali Double Horse, renowned for high-quality dals and ready-to-eat products, started in 2005 when Shri Munagala Krishnamurthy planted a seed in Tenali, Andhra Pradesh. His care nurtured Sri Krishnamurthy's Mahendra Dall Mill, supplying premium urad dall in 50-kilogram packs.</p>
                            <img src={process.env.PUBLIC_URL + "/assets/img/people/2005.png"} alt="Graphic" />
                        </div>
                    </div>
                    
                    <div className="demo-card demo-card--step2 " data-aos="fade-right" data-aos-delay="600">
                        <div className="head p-3">
                            {/* <div className="number-box">
                                <span>2010</span>
                            </div> */}
                            <h2  className='text-white'><span className="small">Passing </span> the Torch</h2>
                        </div>
                        <div className="body">
                            <p className='content-justify' style={{lineHeight:'24px'}}>Sri Krishnamurthy's legacy continued through his son, Sri Munagala Mohan Shyam Prasad, driving our swift growth. Outstanding response led to South India's first 1-kg urad dall consumer pack by Shri Shyam Prasad.</p>
                            <img src={process.env.PUBLIC_URL + "/assets/img/people/2010.png"} alt="Graphic" />
                        </div>
                    </div>
                    
                    <div className="demo-card demo-card--step3 " data-aos="fade-left" data-aos-delay="800">
                        <div className="head p-3">
                            {/* <div className="number-box">
                                <span>2015</span>
                            </div> */}
                            <h2  className='text-white'><span className="small">Expanding </span> Horizons</h2>
                        </div>
                        <div className="body">
                            <p className='content-justify' style={{lineHeight:'24px'}}>New infrastructure led to our second mill, the Maharani Dal Mill, addressing the challenging consumer market. Tireless work by the Tenali Double Horse team secured successful product placement, initially in general trade and later in modern trade outlets.</p>
                            <img src={process.env.PUBLIC_URL + "/assets/img/people/2012.png"} alt="Graphic" />
                        </div>
                    </div>
                    
                    <div className="demo-card demo-card--step4 " data-aos="fade-right" data-aos-delay="1000">
                        <div className="head p-3">
                            {/* <div className="number-box">
                                <span>2020</span>
                            </div> */}
                            <h2  className='text-white'><span className="small">Going</span> Global</h2>
                        </div>
                        <div className="body">
                            <p className='content-justify' style={{lineHeight:'24px'}}>Tenali Double Horse's high-yield Urad Dall earned consumer affection. Partnerships with influential brand ambassadors, like our IPL partnership with Sunrisers Hyderabad, expanded our global presence, attracting distributors and consumers from the US, UK, Singapore, and Australia, fueling growth.</p>
                            <img src={process.env.PUBLIC_URL + "/assets/img/people/2020.png"} alt="Graphic" />
                        </div>
                    </div>
                    
                    <div className="demo-card demo-card--step5" data-aos="fade-left" data-aos-delay="500">
                        <div className="head p-3">
                            {/* <div className="number-box">
                                <span>2023</span>
                            </div> */}
                            <h2  className='text-white'><span className="small">Expanding </span> the Range</h2>
                        </div>
                        <div className="body">
                            <p className='content-justify' style={{lineHeight:'28px'}}>Our third mill, Mahadeva Dall Industries Private Limited, was a significant milestone. We aimed to reach every Indian home, introducing new products such as dals and the beloved Telugu sweet, sunundalu. This transformation, embodied by brands like TDH, Rishika, and Sunundalu, symbolizes our journey from humble beginnings to a renowned name in the food industry.</p>
                            <img src={process.env.PUBLIC_URL + "/assets/img/people/2025.png"} alt="Graphic" />
                        </div>
                    </div>
                </div>
                    
            
                <div className="fluid-container video-conatiner mt-3">
                        <h2 className="text-center title mt-4 mb-3">Our Story</h2>
                   
                    
                    <div className="row ourstory-section text-center"  style={backgroundStyles} >
                      <div className='col-lg-8 col-12' >
                       
                      
                      <ReactPlayer
            url={"./assets/video/tdh-our-story.mp4"}
            controls
            width="100%"
            height="100%"
          />
                      
                      </div>
                    </div>
                </div>

               
                    
            </section>
        );
    }
}

export default TimelineSection;
