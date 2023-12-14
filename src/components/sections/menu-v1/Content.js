import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { Modal } from 'react-bootstrap';
import Quickview from '../../layouts/Quickview';
import products from "../../../data/bulkorder.json";
import productcategory from "../../../data/productcategory.json";
import { Rating } from "../../../helper/helper";
import Masonry from 'react-masonry-component';
import Feedback from '../home/Feedback';
import Messenger from '../home/Messenger';
import { Tab, Nav } from "react-bootstrap";
import { getProduct } from '../../../helper/Producthelper';

class Content extends Component {
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
    handleTabClick = (eventKey) => {
        let filteredProducts = [];
        let activeItem = 1; // Default to India products

        // Update filtered products based on the tab clicked
        if (eventKey === 'tab1') {
            // Show India products for Description tab
            filteredProducts = products.filter((product) => product.category.includes(1));
        } else if (eventKey === 'tab2') {
            // Show Dubai products for Reviews tab
            filteredProducts = products.filter((product) => product.category.includes(2)); // Assuming 2 represents Dubai
            activeItem = 2;
        }

        // Set the state to update the filtered products and active tab
        this.setState({ filteredProducts, activeItem });
    };
    render() {
        const productId = this.props.productId;
        const item = getProduct(productId);
        const settings = {
            slidesToShow: 4,
            slidesToScroll: 3,
            arrows: false,
            dots: false,
            autoplay: true,
            autoplaySpeed: 2000,
            infinite: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                        
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 3,
                       
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
                <div className="product card  border-0 shadow rounded-3">
                    <div className="favorite">
                        <i className="far fa-heart" />
                    </div>
                    <Link className="product-thumb" to={"/menu-item-v1/" + item.id}>
                        <img src={process.env.PUBLIC_URL + "/" + item.img} alt={item.name} />
                    </Link>
                    <div className="product-body">
                        <div className="product-desc">
                            <h4> <Link to={"/menu-item-v1/" + item.id}>{item.name}</Link></h4>
                            <div className="ct-rating-wrapper">
                                <div className="ct-rating">
                                    {Rating(item.rating)}
                                </div>
                            </div>
                            <p>{item.shortdesc}</p>
                            {item.price === 0 ? <p></p>:
                            <p className="product-price">{item.symbol} 
                            {new Intl.NumberFormat().format((item.price).toFixed(2))}
                            </p>
                        }
                            {/* <Link to="#" className="btn-custom light btn-sm shadow-none" onClick={(e) => this.modalShow(item.id)}>More info<i className="fas fa-plus" /> </Link> */}
                        </div>
                        <div >
                        
                        <a className="order-item btn-custom light btn-sm shadow-none w-100 mb-2" onClick={(e) => this.modalShow(item.id)} >More info<i className="fas fa-plus" /> </a>
                            <a href={ item.urls} className="order-item btn-custom btn-sm shadow-none w-100">Order <i className="fas fa-shopping-cart" /> </a>

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
                    <h5 className="custom-primary text-center white-bg  mb-5  mx-auto" style={{textAlign:"center"}}>Global Presence</h5>
                        <Slider className="menu-category-slider" {...settings}>
                            {/* <Link to="#" data-filter="*" className={this.state.activeItem === -1 ? 'ct-menu-category-item active' : 'ct-menu-category-item'} onClick={this.handleClick.bind(this, -1)}>
                                <div className="menu-category-thumb">
                                    <img src={process.env.PUBLIC_URL + "/assets/img/categories/countries.png"} alt="All" />
                                </div>
                                <div className="menu-category-desc">
                                    <h6>All Products</h6>
                                </div>
                            </Link> */}
                            
                       
                        
                            {productcategory.map((item, i) => (
                                <Link key={item.id} to="#" className={this.state.activeItem === parseInt(item.id) ? 'ct-menu-category-item active' : 'ct-menu-category-item'} >
                                    <div className="menu-category-thumb-products-page">
                                        <img src={process.env.PUBLIC_URL + "/" + item.img} alt={item.title} />
                                    </div>
                                    <div className="menu-category-desc">
                                        <h6 style={{color:'#77241D'}}>{item.title}</h6>
                                    </div>
                                </Link>
                            ))}
                        </Slider>
                    </div>
                </div>
                {/* Menu Categories End */}
                <div className="section pt-0">
                    <div className="container">
                        {/* Additional Information Start */}
                        <div className="product-additional-info">
                            <Tab.Container defaultActiveKey="tab1" onSelect={this.handleTabClick}>
                                <Nav variant="tabs" className="nav mt-5 mb-5" style={{display:'flex',justifyContent:'center'}}>
                                    <Nav.Item>
                                        <Nav.Link eventKey="tab1">Consumer Packs</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="tab2">Bulk Packs </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content>
                                    <Tab.Pane eventKey="tab1">
                                    <Masonry className="menu-container row menu-v2" imagesLoadedOptions={imagesLoadedOptions}>
                                    {renderAll}
                                    </Masonry>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="tab2">
                                    <Masonry className="menu-container row menu-v2" imagesLoadedOptions={imagesLoadedOptions}>
                                    {renderAll}
                                    </Masonry>
                                       
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </div>
                        {/* Additional Information End */}
                    </div>
                </div>
                {/* Menu Wrapper Start */}
                
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

export default Content;