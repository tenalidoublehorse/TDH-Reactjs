import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
// import products from "../../../data/homeproducts.json";
import products from "../../../data/dubai.json";
import productcategory from "../../../data/productcategory.json";

import img3 from '../../../assets/img/team/tenali-double-horse-phir-se-udan-campaingh.webp'
let urls = "https://www.amazon.in/dp/B0CCJ825SX?ref=myi_title_dp"


class Latestproducts extends Component {
  componentDidMount() {
    AOS.init({
        duration: 1500, 
    });
}
constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
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
       

        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2
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
        
            <div>
                <div className="section section-padding-two bg-cover bg-center  pt-0 pb-5 category-section light-pic  " style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/banner/dubai.png)", paddingBottom: '0px!important', height: '90vh' }}>
                <div className="section-title-wrap section-header text-center pt-5">
                      
                        <h2 className="title text-light">Our Journey to the UAE Market</h2>
                        <p className='largefont text-light'>Witness our remarkable expansion as Tenali Double Horse ventures into the UAE Experience the flavor of Tradition and Quality as we introduce our products to a new audience</p>
                        
                    </div>
                    <div className="container-fluid dubai ">
                        <i className="slider-prev fas fa-chevron-left slick-arrow" onClick={this.previous} />
                        <Slider className="product-slider" {...settings} ref={c => (this.slider = c)}>
                            {/* Product Start */}
                            {products.map((item, i) => (
                                <div key={i} className="product">
                                    <Link className="product-thumb">
                                        <img src={process.env.PUBLIC_URL + "/" + item.img} alt={item.name} />
                                    </Link>
                                    <div className="product-body">
                                        <div className="product-desc">
                                            <h4> <Link to={"/menu-item-v1/" + item.id}>{item.name}</Link> </h4>
                                            <p className='pro-desc-content'>{item.shortdesc}</p>
                                        </div>
                                        <a href={item.urls} target='_blank' className="btn-custom">Shop Now </a>
                                        {/* <Link to={item.url} className="order-item btn-custom btn-sm shadow-none w-100">Shop Now <i className="fas fa-shopping-cart" /> </Link> */}
                                    </div>
                                </div>
                            ))}
                            {/* Product End */}
                        </Slider>
                        <i className="slider-next fas fa-chevron-right slick-arrow" onClick={this.next} />
                    </div>
                </div>
            </div>
    );
  }
}
export default Latestproducts;