
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { home  as bannerpost } from '../../../data/banner.json'

class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null
        };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    next() {
        this.slider2.slickNext();
    }
    previous() {
        this.slider2.slickPrev();
    }
    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }
    render() {
        const settings = {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    autoplay: true
                }
            }]
        }
        const settingsthumb = {
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
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
                    autoplay: true
                }
            }
            ]
        }
        return (
            <Slider className="banner-slider" {...settings} asNavFor={this.state.nav2} ref={slider => (this.slider1 = slider)}>
                    {bannerpost.map((item, i) => (
                        <div key={i} className="banner-item banner banner-1 bg-cover">
                            <div className="banner-inner " >
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className="col-xl-6 col-lg-6">
                                            {/* <h1 className="title animate-left">{item.title}</h1>
                                            <h4 className='animate-left-delay'>{item.subtitle}</h4>
                                            <p className="subtitle">{item.shortdesc}</p> */}
                                          
                                        </div>
                                        <div className="col-xl-6 col-lg-6 banner_right-img">
                                            <img src={process.env.PUBLIC_URL + "/" + item.img} alt={item.title} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
              
                
            {/* </div> */}
            </Slider>
        ); 
    }
}

export default Banner;