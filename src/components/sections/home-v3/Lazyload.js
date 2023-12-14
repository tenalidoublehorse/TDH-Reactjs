import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

// Your other code...

const gallery = [
    {
        videoEmbedLink: "https://www.youtube.com/embed/pfaxbf7Sl88",
    },
    {
        videoEmbedLink: "https://www.youtube.com/embed/6eZxPOOegTg",
    },
    {
        videoEmbedLink: "https://www.youtube.com/embed/9x2tbixYIas",
    },
    {
        videoEmbedLink: "https://www.youtube.com/embed/i2U2pFXOXUg",
    }
  // Add more items if needed
];

class LazyVideoIframe extends Component {
  constructor(props) {
    super(props);
    this.videoIframeRef = React.createRef();
  }

  componentDidMount() {
    const options = {
      rootMargin: "0px",
      threshold: 0.1,
    };

    const videoIframe = this.videoIframeRef.current;

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          videoIframe.src = this.props.videoSrc;
          observer.unobserve(videoIframe);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    observer.observe(videoIframe);

    this.observer = observer;
  }

  componentWillUnmount() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  render() {
    return (
      <iframe
        title="YouTube video"
        ref={this.videoIframeRef}
        className="lazy-video"
        width="100%"
        height="315"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    );
  }
}

class YourComponent extends Component {
  render() {
    const settings = {
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: false,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };

    return (
      <div className="section">
        <div className="container">
        <div className="section-title-wrap section-header text-center pb-3">
                            <h5 className="custom-primary">Wholesome Creations</h5>
                            <h3 className="text-dark"> Cooking Inspirations with Our Products</h3>
                            {/* <h2 className="title text-dark"> Impress your guests  with mouthwatering recipes and culinary tips!</h2> */}
                            <p>Unleash your culinary creativity with our collection of delectable recipes. From hearty breakfasts to satisfying meals, explore delightful dishes crafted with Tenali Double Horse's Products.</p>
                        </div>
          <div className="container">
            <Slider className="gallery-slider row" {...settings}>
              {/* Replace the image with the YouTube video */}
              {gallery.map((item, i) => (
                <div key={i} className="gallery-thumb">
                  {/* Use the LazyVideoIframe component to load the video */}
                  <div className="video-container">
                    <LazyVideoIframe videoSrc={item.videoEmbedLink} />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <a href={"https://www.youtube.com/@TenaliDoubleHorse"}  target='_blank'  rel="noopener noreferrer"   className="btn-custom mt-5 ">View more</a>
                </div>
        </div>
      </div>
    );
  }
}

export default YourComponent;
