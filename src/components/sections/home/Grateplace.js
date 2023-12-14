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
            
            <h2 className="title text-center mt-2">Tenali Double Horse</h2>
            <p className="text-center" style={{ width: '75%', margin: "auto" }}> At Teanli Double Horse  Our Journey Begins in 2005 with avision to bring excellence  and trust to every Household in india Guided by our commitment to quality and customer Satisfication , we have since Become a trusted name that resonates with millions </p>
            {/* <h2 className="title text-center">A Timeline of Growth, Innovation, and Impact</h2> */}
            <div className="fluid-container video-conatiner mt-3">
              <div className="row ourstory-section text-center"  >
                <div className='col-lg-8 col-12 mx-auto about-video' >

                


                 <iframe  src="https://www.youtube.com/embed/rk2wQJvR47c?si=o5PltabYggExK8Lh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className='mb-5' allowfullscreen></iframe>
                
                  {/* <video className='shadow p-1 mb-5 bg-white rounded image-radius' width="80%" height="60%" controls poster={process.env.PUBLIC_URL + "/assets/img/misc/great-place-to-work.png"}>
                          <source src={grateplacetowork} type="video/mp4" /> 
                  </video> */}
                </div>
              </div>
            </div>



          </section>
        );
    }
}

export default Grateplace;
