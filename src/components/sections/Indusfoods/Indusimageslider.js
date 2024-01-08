import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { Modal } from 'react-bootstrap';
import Quickview from '../../layouts/Quickview';
import products from "../../../data/indusImages.json";
import { Rating } from "../../../helper/helper";
import { height } from 'dom7';

class Indusimageslider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalshow: false,
            lastActiveBox: -1,
        };
        // this.next = this.next.bind(this);
        // this.previous = this.previous.bind(this);
    }
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }
    render() {
        const settings = {
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            autoplay: true,
            autoplaySpeed: 4000,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        }
        return (
            <div className="p-2" style={{backgroundColor:'#fffff',width:"100%"}}>
                <div className="container-fluid">
                <div className="section-title-wrap section-header text-center pt-5">
        
                        <h2 className="title">Indus Food 2024 </h2>
  
                    </div>
                    <div className='event-slider '>
                        <Slider className="" {...settings} ref={c => (this.slider = c)}>
                            {products.map((item, i) => (
                                <div key={i} className="product1   border-0 rounded-3">
                                    
                                    <Link className="product-thumb1 ">
                                        <img src={process.env.PUBLIC_URL + "/" + item.img} alt={item.title} />
                                    </Link>
                                </div>
                            ))}
                        </Slider>
                    </div>
                 {/* <div className="ct-arrows centered-arrows">
                        <i className="slider-prev fas fa-chevron-left slick-arrow mb-3" onClick={this.previous} />
                        <i className="slider-next fas fa-chevron-right slick-arrow mb-3" onClick={this.next} />
                    </div> */}
                     
                </div>
            </div>
        );
    }
}

export default Indusimageslider;