import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// swiperjs
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
// import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.css';
import SwiperCore from 'swiper'
import { Autoplay } from 'swiper';
// Install Swiper modules
SwiperCore.use([Autoplay]);


class Aboutcompany extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          isVisible: false,
        };
        this.sectionRef = React.createRef();
      }
    
     
    
      
    render() {
  
        return (
          <div className='origins-main-section'>
            <div className="container">
              <div className="origins-section">
                <div className='pt-5 pb-5'>
                    <h5 className="custom-primary text-center white-bg mx-auto ">Unveilling Our Origins</h5>
                    <h2 className="title text-center">A Timeline of Growth, Innovation, and Impact</h2>
                  </div>
                
                  <div className='mb-4'>
                  <Swiper
                  spaceBetween={50}
                  slidesPerView={1}
                  onSlideChange={() => console.log('slide change')}
                  onSwiper={(swiper) => console.log(swiper)}
                  autoplay={{ delay: 4000 }}
                  loop={true}
                  navigation={false}
                >
                  <SwiperSlide className='p-3'>
                    <div className="row d-flex">
                      <div className='col-sm-12 col-lg-6 d-flex align-items-center'>
                        <div className=''>
                          <h3 className="text-start">THE BEGINNING</h3>
                          <p>Tenali Double Horse, renowned for high-quality dals and ready-to-eat products, started in 2005 when Shri Munagala Krishnamurthy planted a seed in Tenali, Andhra Pradesh. His care nurtured Sri Krishnamurthy's Mahendra Dall Mill, supplying premium urad dall in 50-kilogram packs.</p>
                        </div>
                      </div>
                      <div className='col-sm-12 col-lg-6'>
                          <img src={process.env.PUBLIC_URL + "/assets/img/about/slider-1.png"} alt="img" />
                      </div>
                    </div>

                  </SwiperSlide>
                  <SwiperSlide className='p-3'>
                    <div className="row d-flex">
                      <div className='col-sm-12 col-lg-6 d-flex align-items-center'>
                        <div className=''>
                          <h3 className="text-start">PASSING THE TORCH</h3>
                          <p>Sri Krishnamurthy's legacy continued through his son, Sri Munagala Mohan Shyam Prasad, driving our swift growth. Outstanding response led to South India's first 1-kg urad dall consumer pack by Shri Shyam Prasad.</p>
                        </div>
                      </div>
                      <div className='col-sm-12 col-lg-6'>
                          <img src={process.env.PUBLIC_URL + "/assets/img/about/slider-2.png"} alt="img" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className='p-3'>
                    <div className="row d-flex">
                      <div className='col-sm-12 col-lg-6 d-flex align-items-center'>
                        <div className=''>
                          <h3 className="text-start">EXPANDING HORIZONS</h3>
                          <p>New infrastructure led to our second mill, the Maharani Dal Mill, addressing the challenging consumer market. Tireless work by the Tenali Double Horse team secured successful product placement, initially in general trade and later in modern trade outlets.</p>
                        </div>
                      </div>
                      <div className='col-sm-12 col-lg-6'>
                          <img src={process.env.PUBLIC_URL + "/assets/img/about/slider-3.png"} alt="img" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className='p-3'>
                    <div className="row d-flex">
                      <div className='col-sm-12 col-lg-6 d-flex align-items-center'>
                        <div className=''>
                          <h3 className="text-start">GOING GLOBAL</h3>
                          <p>Tenali Double Horse's high-yield Urad Dall earned consumer affection. Partnerships with influential brand ambassadors, like our IPL partnership with Sunrisers Hyderabad, expanded our global presence, attracting distributors and consumers from the US, UK, Singapore, and Australia, fueling growth.</p>
                        </div>
                      </div>
                      <div className='col-sm-12 col-lg-6'>
                          <img src={process.env.PUBLIC_URL + "/assets/img/about/slider-4.png"} alt="img" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className='p-3'>
                    <div className="row d-flex">
                      <div className='col-sm-12 col-lg-6 d-flex align-items-center'>
                        <div className=''>
                          <h3 className="text-start">EXPANDING THE RANGE</h3>
                          <p>Our third mill, Mahadeva Dall Industries Private Limited, was a significant milestone. We aimed to reach every Indian home, introducing new products such as dals and the beloved Telugu sweet, sunundalu. This transformation, embodied by brands like TDH, Rishika, and Sunundalu, symbolizes our journey from humble beginnings to a renowned name in the food industry.</p>
                        </div>
                      </div>
                      <div className='col-sm-12 col-lg-6'>
                          <img src={process.env.PUBLIC_URL + "/assets/img/about/slider-5.png"} alt="img" />
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
                  </div>
             

              </div>
            </div>
          </div>
        );
    }
}

export default Aboutcompany;