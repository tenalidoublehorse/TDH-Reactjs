import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
// Import the appropriate keys from your JSON file
import { hometwo as bannerData } from '../../../data/banner.json'; 

const Indusbanner = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Set state with the imported JSON data
        setItems(bannerData); // Assuming "home" is the key in your JSON structure
        setLoading(false); // Set loading to false as the data has been fetched
      } catch (error) {
        console.error('Error fetching banner data:', error);
        setLoading(false); // Set loading to false in case of error
      }
    };

    fetchData(); // Call the fetchData function when the component mounts
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
            src={process.env.PUBLIC_URL + "/" + item.bg}
            alt={item.Title}
            onClick={() => handleImageClick(item.id)}
          />
        ))}
      </Slider>
      <div className='marq-banner'>
        <img src={process.env.PUBLIC_URL + "/assets/img/banner/TenaliDoubleHorse-IndusFood_boomark-3x52.png"} alt="img" className='' />
      </div>
    </div>
  );
};

export default Indusbanner;
