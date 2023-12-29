import React, { useEffect ,useState } from 'react';
import Slider from 'react-slick';
import { hometwo as bannerpost } from '../../../data/banner.json';
import axios from '../../../api/axios';
import Loader from '../../layouts/Loader';

const Banner = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchData = async () => {
            try {
            debugger;
                const response = await axios.get('/api/getbanner/');
                setItems(response.data);
                setLoading(false);
            } catch (error) {
                debugger;
                console.error('Error fetching getbanner post data:', error);
                setLoading(false);
          
            }
        };

        fetchData();
    }, {});


 
  const handleMarqueeHover = () => {
    const marquee = document.getElementById('marquee');
    marquee.stop();
  };

  const handleMarqueeLeave = () => {
    const marquee = document.getElementById('marquee');
    marquee.start();
  };

  useEffect(() => {
    const marquee = document.getElementById('marquee');

    return () => {
      marquee.start(); // Ensure marquee starts when the component is unmounted
    };
  }, []);

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
        {items.map((item, i) => (
          <img
            key={i}
            src={'https://codkraft.com'+item.Image}
            alt={item.Title}
            onClick={() => handleImageClick(item.id)}
          />
        ))}
      </Slider>
      <div
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
      </div>
    </div>
  );
};

export default Banner;
