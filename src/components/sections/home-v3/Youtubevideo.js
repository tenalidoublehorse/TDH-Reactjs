import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import $ from 'jquery';
import 'magnific-popup';


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
        videoEmbedLink: "poster",
    },
    
];


class Youtubevideo extends Component {
    constructor(props) {
        super(props);
        this.gallerySlider = React.createRef();
    }

    componentDidMount() {
        $(this.gallerySlider.current).magnificPopup({
            delegate: 'iframe',
            type: 'iframe',
            gallery: {
                enabled: true,
            },
        });
    }

    render() {
        const settings = {
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
            dots: false,
            focusOnSelect: true,
            responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            }
            ]
        };

        return (
            <div className="section">
                <div className="container">
                <div className="section-title-wrap section-header text-center pb-3">
                            <h5 className="custom-primary">Discover the World of Culinary Delights</h5>
                            <h2 className="title text-dark"> Impress your guests  with mouthwatering recipes and culinary tips!</h2>
                            
                        </div>
                    <div className="container">
                        <Slider ref={this.gallerySlider} className="gallery-slider row" {...settings}>
                            {/* Replace the image with the YouTube video */}
                            {gallery.map((item, i) => (
                                <div key={i} className="gallery-thumb">
                                    {/* Use the YouTube embed link in the src attribute of the iframe */}
                                    <div className="video-container">
                                    <iframe
                                        title={`YouTube video ${i + 1}`}
                                        width="100%"
                                        height="auto"
                                        src={item.videoEmbedLink}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        loading="lazy" 
                                    ></iframe>
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

export default Youtubevideo;
