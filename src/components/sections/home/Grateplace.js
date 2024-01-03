import React, { Component } from 'react';
// import WOW from 'wow.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import ReactPlayer from 'react-player';
// const grateplacetowork = process.env.PUBLIC_URL + "/assets/video/tdh-chairmen-video.mp4"



class Grateplace extends Component {
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
            
            <h2 className="title text-center mt-2">Why we Work With us ?</h2>
            <p className="text-center" style={{ width: '75%', margin: "auto" }}> At Teanli Double Horse  Our Journey Begins in 2005 with avision to bring excellence  and trust to every Household in india Guided by our commitment to quality and customer Satisfication , we have since Become a trusted name that resonates with millions </p>
            {/* <h2 className="title text-center">A Timeline of Growth, Innovation, and Impact</h2> */}
            <div className="container-fluid video-conatiner mt-3">
              <div className="row ourstory-section text-center"  >
                  <div className='col-sm-12 col-lg-6 order-2 order-lg-2'>
                    <div className="section-title-wrap section-header text-center pt-1">
                      {/* <h2 className="title">Tenali Double Horse</h2> */}
                      <p style={{textAlign:'justify'}}>At Tenali Double Horse, our journey is defined not only by our products but also by our people. We take immense pride in fostering a work environment that is more than just a workplace; it's a space where creativity, innovation, and camaraderie flourish. As a testament to our commitment to our employees, we are honored to be recognized as a 'Great Place to Work.' This recognition reflects our dedication to creating an atmosphere where talent is nurtured, diversity is celebrated, and personal growth is encouraged.</p>
                     
                    </div>
                  </div>
                  <div className='col-sm-12 col-lg-6  order-1 order-lg-1 about-video'>
                 
                  <iframe  src="https://www.youtube.com/embed/pQWRuib-wKQ?si=jRS6kltmYRsEcbel" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className='mb-5' allowfullscreen></iframe>
                 </div>
                 
                
                 
                
                
              </div>
            </div>
            {/* <div className="fluid-container video-conatiner mt-3">
             
              <div className="row ">
                        <div className="col-lg-6 mb-lg-30 alignments d-flex flex-column about-video " >
                        <iframe  src="https://www.youtube.com/embed/pQWRuib-wKQ?si=jRS6kltmYRsEcbel" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className='mb-5' allowfullscreen></iframe>
                       
                        </div>
                        <div className="col-lg-6 alignments d-flex flex-column">
                        <div className="section-title-wrap mr-lg-30 mt-lg-2">
                               
                                <h2  style={{fontSize:'30px'}}>About TDHFood Products</h2>
                                <p className="subtitle" style={{ textAlign: 'justify' }}>
                                TDH Foods is a sister company to Tenali Double Horse that started on the core principle of selling the healthiest foods in their purest form without adding any preservatives. Everything that is made is of the highest quality, and there are no second guesses about our authenticity. We assure you that you’ll only have the best—so good that there’s no turning back! It’ll make you crave more and be hooked on our products!
                                </p>
                                <a  href="https://tdhfoodproducts.com/about/" rel="noopener noreferrer" target="_blank" class="btn-custom  shadow-none ">View More</a>


                            </div>
                           
                        </div>
                    </div>
                    </div> */}
                {/* <div className='col-lg-8 col-12 mx-auto about-video' >

                


                 <iframe  src="https://www.youtube.com/embed/pQWRuib-wKQ?si=jRS6kltmYRsEcbel" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className='mb-5' allowfullscreen></iframe>
                
            
                </div> */}
              {/* </div> */}
            



          </section>
        );
    }
}

export default Grateplace;
