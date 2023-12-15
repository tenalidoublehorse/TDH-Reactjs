import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { hometwo as bannerpost} from '../../../data/banner.json'

class Bultproductsslider extends Component {
  
    render() {
        const settings = {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            speed: 4000,
            fade: true,   
            autoplay: true,
            dots: false,
            responsive: [{
                breakpoint: 768,
                settings: {
                    dots: false,
                }
            }]
        }

        return (
            <div className="bule-container-section pb-2 pt-5">
                <Slider className="" {...settings}>
                 
                <div className="row d-flex aligen-items-center">
                            <div className='col-sm-12 col-lg-6 bulk-product'>
                                <img src={process.env.PUBLIC_URL + "/assets/img/mainproducts/maharani.png"} alt="img" />
                            </div>
                            <div className='col-sm-12 col-lg-6 d-flex align-items-center pro-slider'>
                                <div className='pro-slider-content'>
                                    <h5 className="">Tenali Double Horse2</h5>
                                    <h3 className="text-start">Maha Urad Dall</h3>
                                    <p>This hygienically packed pack of 1 kg of whole urad gota white helps you be active by boosting energy levels. It is good for digestion and also prevents constipation as it is enriched with dietary fiber and protein.</p>
                                    {/* <div className='bulk-subpoint px-1' >
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
                                    </div> */}
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
                        <div className="row  d-flex aligen-items-center">
                            <div className='col-sm-12 col-lg-6 bulk-product'>
                                <img src={process.env.PUBLIC_URL + "/assets/img/mainproducts/maharani.png"} alt="img" />
                            </div>
                            <div className='col-sm-12 col-lg-6 d-flex align-items-center pro-slider'>
                                <div className='pro-slider-content'>
                                    <h5 className="">Tenali Double Horse</h5>
                                    <h3 className="text-start">Maha Urad Dall</h3>
                                    <p>This hygienically packed pack of 1 kg of whole urad gota white helps you be active by boosting energy levels. It is good for digestion and also prevents constipation as it is enriched with dietary fiber and protein.</p>
                                    {/* <div className='d-flex justify-content-between px-1 img-points'>
                                        <div className='d-flex'>
                                            <img src={process.env.PUBLIC_URL + "/assets/img/mainproducts/non-sticky.png"} alt="img" />
                                            &nbsp;&nbsp;<p className='pt-2'>Tasty and non-sticky </p>
                                        </div>
                                        <div className='d-flex'>
                                            <img src={process.env.PUBLIC_URL + "/assets/img/mainproducts/non-sticky.png"} alt="img" />
                                            &nbsp;&nbsp;<p>Tasty and non-sticky </p>
                                        </div>
                                        <div className='d-flex'>
                                            <img src={process.env.PUBLIC_URL + "/assets/img/mainproducts/non-sticky.png"} alt="img" />
                                            &nbsp;&nbsp;<p>Tasty and non-sticky </p>
                                        </div>
                                    </div> */}
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
                       
             
                </Slider>
            </div>
        );
    }
}

export default Bultproductsslider;