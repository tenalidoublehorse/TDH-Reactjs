import React, { useEffect } from 'react';
import Slider from 'react-slick';
import { hometwo as bannerpost } from '../../../data/banner.json';

const Banner = () => {

  // const handleMarqueeHover = () => {
  //   const marquee = document.getElementById('marquee');
  //   marquee.stop();
  // };

  // const handleMarqueeLeave = () => {
  //   const marquee = document.getElementById('marquee');
  //   marquee.start();
  // };

  // useEffect(() => {
  //   const marquee = document.getElementById('marquee');

  //   return () => {
  //     marquee.start(); // Ensure marquee starts when the component is unmounted
  //   };
  // }, []);

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    speed: 4000,
    fade: true,
    autoplay: true,
    dots: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: false,
        },
      },
    ],
  };

  const handleImageClick = (itemId) => {
    if (itemId === 1) {
      window.open('https://phirseudaan.com/', '_blank');
    }
  };

  return (
    <div className="banner banner-22">
      <Slider className="banner-slider-2" {...settings}>
        {bannerpost.map((item, i) => (
          <img
            key={i}
            src={process.env.PUBLIC_URL + '/' + item.bg}
            alt={item.title}
            onClick={() => handleImageClick(item.id)}
          />
        ))}
      </Slider>
      <div className='marq-banner'>
        <img src={process.env.PUBLIC_URL + "/assets/img/banner/TenaliDoubleHorse-IndusFood_boomark-3x52.png"} alt="img" className='' />
        </div>
      {/* <div
        className="header-marque"
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        
        <marquee
          id="marquee"
          width="97%"
          direction="left"
          onMouseEnter={handleMarqueeHover}
          onMouseLeave={handleMarqueeLeave}
        >
          We have recently introduced our products in UAE. For inquiries regarding exports, please
          reach out to us at 1800 270 567 567 or email us at exports@tenalidoublehorse.com.
        </marquee>
      </div> */}
    </div>
  );
};

export default Banner;