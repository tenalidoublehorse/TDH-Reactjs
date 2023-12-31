import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { Modal } from 'react-bootstrap';
import Quickview from '../../layouts/Quickview';
import products from "../../../data/homeproducts.json";
import { Rating } from "../../../helper/helper";
import { height } from 'dom7';

class TdhProducts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalshow: false,
            lastActiveBox: -1,
        };
        this.modalShow = this.modalShow.bind(this);
        this.modalClose = this.modalClose.bind(this);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }
    // Modal
    modalShow(index) {
        this.setState({ modalshow: true, lastActiveBox: index });
    }
    modalClose() {
        this.setState({ modalshow: false });
    }
    render() {
        const settings = {
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            autoplay: true,
            autoplaySpeed: 2000,
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
            <div className="colour-pink" style={{backgroundColor:'#fff7ef'}}>
                <div className="container-fluid">
                    <div className="section-title-wrap section-header text-center pt-5">
                        {/* <h5 className="custom-primary text-center white-bg mx-auto">Flavors of Excellence</h5> */}
                        <h2 className="title">Discover Our Culinary Treasures</h2>
                        <p className='largefont'>Indulge in a diverse range of superior quality products from Tenali Double Horse. Explore the finest ingredients that perfectly elevate your meals, from staples to specialties.</p>
                        
                    </div>
                    <div className='slider-section-home' >
                        <Slider className="product-slider home-product-slider   " {...settings} ref={c => (this.slider = c)}>
                        
                            {products.map((item, i) => (
                                <div key={i} className="product card  border-0 shadow rounded-3">
                                    
                                    <Link className="product-thumb pt-3" to={"/menu-item-v1/" + item.id}>
                                        <img src={process.env.PUBLIC_URL + "/" + item.img} alt={item.name} />
                                    </Link>
                                    <div className="product-body   border-0 shadow rounded-3 bg-white">
                                        <div className="product-desc">
                                            <div style={{height:"80px"}}>
                                                <h5 className='text-dark pt-3'> <Link to={"/menu-item-v1/" + item.id}>{item.name}</Link> </h5>
                                            </div>
                                        </div>
                                
                                        <a onClick={(e) => this.modalShow(item.id)} className="btn-custom light btn-sm shadow-none w-100 mb-2">More Info </a>
                                        <a href={item.urls} className="order-item btn-custom btn-sm shadow-none w-100" target='_blank'>Order Now <i className="fas fa-shopping-cart" /> </a>
                                                       
                                    </div>
                                </div>
                            ))}
                            {/* Product End */}
                        </Slider>
                    </div>
                    <div className="ct-arrows centered-arrows">
                        <i className="slider-prev fas fa-chevron-left slick-arrow mb-3" onClick={this.previous} />
                        <i className="slider-next fas fa-chevron-right slick-arrow mb-3" onClick={this.next} />
                    </div>
                    <div className='text-center pb-4'>
                        <a class="btn-custom btn-sm shadow-none suma  mt-2 mt-lg-0 mb-2" href="/#tenali-double-horse-products">view All <i className="fas fa-arrow-right" /></a>
                    </div>
                </div>
               
                <Modal show={this.state.modalshow} id="customizeModal" onHide={this.modalClose} aria-labelledby="contained-modal-title-vcenter" size="lg" centered>
                    <Quickview productId={this.state.lastActiveBox}/>
                </Modal>
            </div>
        );
    }
}

export default TdhProducts;