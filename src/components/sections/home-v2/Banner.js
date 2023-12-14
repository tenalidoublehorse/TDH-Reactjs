import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { hometwo as bannerpost} from '../../../data/banner.json'

class Banner extends Component {
    handleMarqueeHover = () => {
        const marquee = document.getElementById('marquee');
        marquee.stop();
    };

    handleMarqueeLeave = () => {
        const marquee = document.getElementById('marquee');
        marquee.start();
    };
    render() {
        const settings = {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            speed: 1000,
            autoplay: true,
            dots: false,
            responsive: [{
                breakpoint: 768,
                settings: {
                    dots: false,
                }
            }]
        }
        function handleImageClick(itemId) {
            if (itemId === 1) {
              // Navigate to another website
              window.open('https://phirseudaan.com/', '_blank');
        
            }
          }
        return (
            <div className="banner banner-22">
                <Slider className="banner-slider-2" {...settings}>
                    {bannerpost.map((item, i) => (
                        
                        <img src={process.env.PUBLIC_URL + "/" + item.bg} alt={item.title} onClick={() => handleImageClick(item.id)}/>
                    ))}
                </Slider>
                <div className='header-marque' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <marquee id="marquee" width="97%" direction="left" onMouseEnter={this.handleMarqueeHover}
                        onMouseLeave={this.handleMarqueeLeave}>
                We have recently introduced our products in  UAE. For inquiries regarding exports, please reach out to us at 1800 270 567 567 or email us at exports@tenalidoublehorse.com.
                </marquee>
                </div>

            </div>
        );
    }
}

export default Banner;