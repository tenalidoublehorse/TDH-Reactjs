import React, { Component } from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore from 'swiper';

// import { Autoplay } from 'swiper';
// SwiperCore.use([Autoplay]);
// import 'swiper/css';
// import 'swiper/css/effect-fade';
import Slider from 'react-slick';
class Mainproductsslider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
        };
        this.sectionRef = React.createRef();
    }




    render() {

        return (
            <div className='pro-slider-section'>
                <div className='side-image'>
                <img src={process.env.PUBLIC_URL + "/assets/img/mainproducts/wheats-sticks.png"} alt="img" />
                </div>
                <div className="container">
                    <div className="">
                        {/* <div className='pt-5 pb-5'>
                    <h5 className="custom-primary text-center white-bg mx-auto ">Unveilling Our Origins</h5>
                    <h2 className="title text-center">A Timeline of Growth, Innovation, and Impact</h2>
                 </div> */}

                        <div className='mb-4'>
                            <Swiper
                               
                                spaceBetween={50}
                                slidesPerView={1}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                                autoplay={{ delay: 4000 }}
                                loop={true}
                                fade={true}     
                                navigation={false}
                                className="swiper-fade"
                            >
                                <SwiperSlide className='p-3'>
                                    <div className="row d-flex">
                                        <div className='col-sm-12 col-lg-6'>
                                            <img src={process.env.PUBLIC_URL + "/assets/img/mainproducts/maharani.png"} alt="img" />
                                        </div>
                                        <div className='col-sm-12 col-lg-6 d-flex align-items-center pro-slider'>
                                            <div className=''>
                                                <h5 className="">Tenali Double Horse</h5>
                                                <h3 className="text-start">Maha Urad Dall</h3>
                                                <p>This hygienically packed pack of 1 kg of whole urad gota white helps you be active by boosting energy levels. It is good for digestion and also prevents constipation as it is enriched with dietary fiber and protein.</p>
                                                <div className='d-flex justify-content-between px-1' style={{width:"100%"}}>
                                                    <div className='d-flex'>
                                                        <img src={process.env.PUBLIC_URL + "/assets/img/mainproducts/non-sticky.png"} alt="img" />
                                                        &nbsp;&nbsp;;<p className='pt-2'>Tasty and non-sticky </p>
                                                    </div>
                                                    <div className='d-flex'>
                                                        <img src={process.env.PUBLIC_URL + "/assets/img/mainproducts/non-sticky.png"} alt="img" />
                                                        &nbsp;&nbsp;<p>Tasty and non-sticky </p>
                                                    </div>
                                                    <div className='d-flex'>
                                                        <img src={process.env.PUBLIC_URL + "/assets/img/mainproducts/non-sticky.png"} alt="img" />
                                                        &nbsp;&nbsp;<p>Tasty and non-sticky </p>
                                                    </div>
                                                </div>
                                                <div className='sizes'>
                                                <span>Packs available in</span>
                                                <p>500gm & 1kg packs</p>
                                                </div>
                                                <div className='launch'>
                                                    <span>Launched across</span>
                                                <p>Andhra Pradesh, Telangana, Karnataka</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </SwiperSlide>
                                {/* <SwiperSlide className='p-3'>
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
                  </SwiperSlide> */}
                            </Swiper>
                        </div>


                    </div>
                </div>
            </div>
        );
    }
}

export default Mainproductsslider;