import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { Modal } from 'react-bootstrap';
import Quickview from '../../layouts/TdhfQuickview';
import products from "../../../data/tdhproduct.json";
import tdhproductcategory from "../../../data/tdhproductcategory.json";
import { Rating } from "../../../helper/helper";
import Masonry from 'react-masonry-component';
import Feedback from '../home/Feedback';
import Messenger from '../home/Messenger';


class Tenalifoodproducts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalshow: false,
            lastActiveBox: -1,
            // filteredProducts: products,
            // activeItem: -1
            filteredProducts: products.filter(
                (product) => product.category.includes(1) 
            ),
            activeItem: 1
        };
        this.modalShow = this.modalShow.bind(this);
        this.modalClose = this.modalClose.bind(this);
    }
    // Modal
    modalShow(index) {
        this.setState({ modalshow: true, lastActiveBox: index });
    }
    modalClose() {
        this.setState({ modalshow: false });
    }

    handleClick = id => {
        let filteredProducts = [];
        if (id === -1) {
            filteredProducts = products;
        } else {
            filteredProducts = products.filter(
                (product) => product.category.includes(id)
            );
        }
        this.setState({ filteredProducts, activeItem: id });
    };
    render() {
        const settings = {
            slidesToShow: 2,
            slidesToScroll: 3,
            arrows: false,
            dots: false,
            autoplay: false,
            autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 400,
                    settings: {
                        slidesToShow: 2,
                    }
                },
            ]
        };
        const imagesLoadedOptions = {
            itemSelector: '.masonry-item',
            percentPosition: true,
            resize: true,
            fitWidth: true
        };
        const renderAll = this.state.filteredProducts.map((item, i) => (
            <div key={i} className="col-lg-4 col-md-6 col-sm-12 masonry-item sides">
                <div className="product">
                    <div className="favorite">
                        <i className="far fa-heart" />
                    </div>
                    <Link className="product-thumb" to={"/menu-item-v2/" + item.id}>
                        <img src={process.env.PUBLIC_URL + "/" + item.img} alt={item.name} />
                    </Link>
                    <div className="product-body">
                        <div className="product-desc">
                            <h4> <Link to={"/menu-item-v2/" + item.id}>{item.name}</Link></h4>
                            <div className="ct-rating-wrapper">
                                <div className="ct-rating">
                                    {Rating(item.rating)}
                                </div>
                            </div>
                            <p>{item.shortdesc}</p>
                            {/* <Link to="#" className="btn-custom light btn-sm shadow-none" onClick={(e) => this.modalShow(item.id)}>More info<i className="fas fa-plus" /> </Link> */}
                        </div>
                        <div className="product-controls">
                            <p className="product-price">{new Intl.NumberFormat().format((item.price).toFixed(2))}₹</p>
                            {/* <a href={ item.urls} className="order-item btn-custom btn-sm shadow-none">Order <i className="fas fa-shopping-cart" /> </a> */}
                            <a  className="order-item btn-custom btn-sm shadow-none" onClick={(e) => this.modalShow(item.id)} >More info<i className="fas fa-plus" /> </a>
                        </div>
                    </div>
                </div>
            </div>
        ));
        return (
            <Fragment>
                {/* Menu Categories Start */} 
                <div className="ct-menu-categories menu-filter">
                    <div className="container">
                        <Slider className="menu-category-slider" {...settings}>
                            {/* <Link to="#" data-filter="*" className={this.state.activeItem === -1 ? 'ct-menu-category-item active' : 'ct-menu-category-item'} onClick={this.handleClick.bind(this, -1)}>
                                <div className="menu-category-thumb">
                                    <img src={process.env.PUBLIC_URL + "/assets/img/categories/tdhf-foods-icon.png"} alt="All" />
                                </div>
                                <div className="menu-category-desc">
                                    <h6>All Products</h6>
                                </div>
                            </Link> */}
                            {tdhproductcategory.map((item, i) => (
                                <Link key={item.id} to="#" className={this.state.activeItem === parseInt(item.id) ? 'ct-menu-category-item active' : 'ct-menu-category-item'} onClick={this.handleClick.bind(this, item.id)}>
                                    <div className="menu-category-thumb">
                                        <img src={process.env.PUBLIC_URL + "/" + item.img} alt={item.title} />
                                    </div>
                                    <div className="menu-category-desc">
                                        <h6>{item.title}</h6>
                                    </div>
                                </Link>
                            ))}
                        </Slider>
                    </div>
                </div>
                {/* Menu Categories End */}
                {/* Menu Wrapper Start */}
                <div className="section section-padding">
                    <div className="container">
                        <Masonry className="menu-container row menu-v2" imagesLoadedOptions={imagesLoadedOptions}>
                            {/* Product Start */}
                            {renderAll}
                            {/* Product End */}
                        </Masonry>
                    </div>
                </div>
                <Modal show={this.state.modalshow} id="customizeModal" onHide={this.modalClose} aria-labelledby="contained-modal-title-vcenter" size="lg" centered>
                    <Quickview productId={this.state.lastActiveBox} />
                </Modal>
                <Feedback/>
                <Messenger/>

                {/* Menu Wrapper End */}
            </Fragment>
        );
    }
}

export default Tenalifoodproducts;