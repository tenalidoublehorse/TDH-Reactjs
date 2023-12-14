import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import $ from 'jquery';
import 'magnific-popup';



const gallery = [
    {
        img: "assets/img/blog/2.png"
    },
    {
        img: "assets/img/blog/3.png"
    },
    {
        img: "assets/img/blog/4.png"
    },
    {
        img: "assets/img/blog/amazoan.png"
    },
    {
        img: "assets/img/blog/filpkart.png"
    }
    
];


class Partners extends Component {
    
    render() {
        const settings = {
            slidesToShow: 4,
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
            <div className="section pt-0" >
                <div className="container">
                
                    <div className="container">
                    <div className="row ">
                    <div className="col-lg-2 center-align" style={{backgroundColor:'#ED4E53'}}>
      <p className='text-white' style={{fontWeight: 'bold' }}>TenaliDoublehorse</p>
      <h4 className='text-white'>Our Partners</h4>

    </div>
    <div className="col-lg-10">
                        <Slider className="gallery-slider row p-5" {...settings} style={{ backgroundColor: '#F2ECE4',paddingBottom: '-5px' }}>
                            {gallery.map((item, i) => (
                                <Link  >
                                    <img src={process.env.PUBLIC_URL + "/" + item.img} alt="post" />
                                </Link>
                            ))}
                        </Slider>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Partners;