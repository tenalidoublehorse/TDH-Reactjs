import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { getProduct } from '../../../helper/Producthelper';
import { Rating } from "../../../helper/helper";
import { Tab, Nav } from "react-bootstrap";
import Relatedproduct from '../../layouts/Relatedproductone';
import Feedback from '../home/Feedback';
import Messenger from '../home/Messenger';

// swiperjs
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore ,{ Navigation } from 'swiper'
import { Autoplay } from 'swiper';

SwiperCore.use([Autoplay]);
SwiperCore.use([Navigation]);

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: 1
        };
    }
    IncrementItem = () => {
        this.setState({ clicks: this.state.clicks + 1 });
    };

    DecreaseItem = () => {
        if (this.state.clicks < 1) {
            this.setState({
                clicks: 0,
            });
        } else {
            this.setState({
                clicks: this.state.clicks - 1,
            });
        }
    };
    handleChange(event) {
        this.setState({ clicks: event.target.value });
    }
    render() {
        const productId = this.props.productId;
        const item = getProduct(productId);
        
        const productsToHideButton = [3, 8,10,11,12,13,14,25,26,27,28,29,30];

        // Check if the current product's ID is in the array of products to hide the button
        const shouldHideOrderButton = productsToHideButton.includes(productId);
       
           
        return (
            <Fragment>
                <div className="section product-single">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5">
                                {/* Main Thumb */}
                                <div className="product-thumb">
                                    <Swiper
                                            spaceBetween={50}
                                            slidesPerView={1}
                                            onSlideChange={() => console.log('slide change')}
                                            onSwiper={(swiper) => console.log(swiper)}
                                            autoplay={{ delay: 4000 }}
                                            loop={true}
                                            navigation={true}
                                            // pagination={{ clickable: true }} 
                                            >
                                            <SwiperSlide><img src={process.env.PUBLIC_URL + "/" + item.img} alt={item.name} /></SwiperSlide>
                                            <SwiperSlide><img src={process.env.PUBLIC_URL + "/" + item.img2} alt={item.name} /></SwiperSlide>
                                            <SwiperSlide><img src={process.env.PUBLIC_URL + "/" + item.img3} alt={item.name} /></SwiperSlide>
                                            <SwiperSlide><img src={process.env.PUBLIC_URL + "/" + item.img4} alt={item.name} /></SwiperSlide>
                                            
                                    </Swiper>
                                    {/* <img src={process.env.PUBLIC_URL + "/" + item.img} alt={item.name} /> */}
                                </div>
                                {/* /Main Thumb */}
                            </div>
                            <div className="col-md-7">
                                <div className="product-content">
                                    {/* Product Title */}
                                    <h2 className="title">{item.name}</h2>
                                    {/* /Product Title */}
                                    <div className="favorite">
                                        <i className="far fa-heart" />
                                    </div>
                                    {/* Rating */}
                                    <div className="ct-rating-wrapper">
                                        <div className="ct-rating">
                                            {Rating(item.rating)}
                                        </div>
                                        {/* <span>(24 ratings)</span> */}
                                        
                                    </div>
                                    {/* /Rating */}
                                
                                    {/* Product Short Description */}
                                    <p>{item.shortdesc}</p>
                                
                                    {/* Price */}
                                       <div className="price-wrapper">
                                        {item.price === 0 ? <p className="product-price"></p> :<p className="product-price">{item.symbol}{new Intl.NumberFormat().format((item.price).toFixed(2))}</p> }
                                         
                                       </div>
                                    {/* /Price */}
                                    {/* Variations */}
                                    <div className="customize-variations">
                                        <div className="customize-size-wrapper">
                                            <div className="ct-rating">
                                                <img src={process.env.PUBLIC_URL + "/" + item.productsafetyimg1} alt={item.name} />
                                                <img src={process.env.PUBLIC_URL + "/" + item.productsafetyimg2} alt={item.name} />
                                                <img src={process.env.PUBLIC_URL + "/" + item.productsafetyimg3} alt={item.name} />
                                                <img src={process.env.PUBLIC_URL + "/" + item.productsafetyimg4} alt={item.name} />
                                            </div>
                                        </div>
                                    </div>
                                       
                                     
                        <ul className="product-meta">
                            <li>
                                {item.bulletpoints.map((categoryItem, index) => (
                                    <div key={index}>
                                        <span className='about-product-span'>About this item</span>
                                        {Object.keys(categoryItem).map((propertyKey) => (
                                            <p key={propertyKey} className='about-product-p'>
                                                <span className='product-span'>{propertyKey}</span>: {categoryItem[propertyKey]}
                                            </p>
                                        ))}
                                    </div>
                                ))}
                                
                            </li>
                            
                            {/* {!shouldHideOrderButton && (
                             
                              <button type="button" className="btn-custom btn-sm order-btn">
                                  <a href={item.urls} target='_blank'>Order Now</a>
                              </button>
            
                              )} */}
                               {item.urls === '' ?<div></div>
                                :
                                <button type="button" className="btn-custom btn-sm order-btn">
                                                    <a href={item.urls} target='_blank'>Order Now</a>
                                                </button>
                                }
                        </ul>
                        
                  
                                    {/* /Product Meta */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section pt-0">
                    <div className="container">
                        {/* Additional Information Start */}
                        <div className="product-additional-info">
                            <Tab.Container defaultActiveKey="tab1">
                                <Nav variant="tabs" className="nav">
                                    <Nav.Item>
                                        <Nav.Link eventKey="tab1">Description</Nav.Link>
                                    </Nav.Item>
                                    {/* <Nav.Item>
                                        <Nav.Link eventKey="tab2">Reviews </Nav.Link>
                                    </Nav.Item> */}
                                </Nav>
                                <Tab.Content>
                                    <Tab.Pane eventKey="tab1">
                                        <h4>Description</h4>
                                        <div dangerouslySetInnerHTML={{ __html: item.longdescription }} />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="tab2">
                                        <h4>Leave a Review</h4>
                                        <div className="ct-rating-wrapper">
                                            <div className="ct-rating">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                            </div>
                                            <span>Your Review</span>
                                        </div>
                                        {/* Review Form start */}
                                        <div className="comment-form">
                                            <form method="post">
                                                <div className="row">
                                                    <div className="col-md-6 form-group">
                                                        <input type="text" className="form-control" placeholder="Full Name" name="fname" />
                                                    </div>
                                                    <div className="col-md-6 form-group">
                                                        <input type="email" className="form-control" placeholder="Email Address" name="email" />
                                                    </div>
                                                    <div className="col-md-12 form-group">
                                                        <textarea className="form-control" placeholder="Type your comment..." name="comment" rows={7} />
                                                    </div>
                                                </div>
                                                <button type="submit" className="btn-custom primary" name="button">Post Review</button>
                                            </form>
                                        </div>
                                        {/* Review Form End */}
                                        {/* Reviews Start */}
                                        <div className="comments-list">
                                            <ul>
                                                {item.reviews.map((review, i) => (
                                                    <li key={i} className="comment-item">
                                                        <img src={process.env.PUBLIC_URL + "/" + review.img} alt={review.name} />
                                                        <div className="comment-body">
                                                            <h5>{review.name}</h5>
                                                            <div className="ct-rating">
                                                                {/* {Rating(item.rating)} */}
                                                            </div>
                                                            {/* <span>Posted on: {review.date}</span> */}
                                                            <p>{review.comment}</p>
                                                            <Link to="#" className="reply-link"></Link>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        {/* Reviews End */}
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </div>
                        {/* Additional Information End */}
                    </div>
                    
                </div>
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="product-thumb">
                            <h4 className='pb-4'>Cooking Inspirations for the Product</h4>
                                <Swiper
                                    spaceBetween={50}
                                    slidesPerView={2}
                                    onSlideChange={() => console.log('slide change')}
                                    onSwiper={(swiper) => console.log(swiper)}
                                    autoplay={{ delay: 4000 }}
                                    loop={true}
                                    navigation={true}
                                >
                                    <SwiperSlide><img src={process.env.PUBLIC_URL + "/" + item.cookingimg1} alt={item.name} /></SwiperSlide>
                                    <SwiperSlide><img src={process.env.PUBLIC_URL + "/" + item.cookingimg2} alt={item.name} /></SwiperSlide>
                                    <SwiperSlide><img src={process.env.PUBLIC_URL + "/" + item.cookingimg1} alt={item.name} /></SwiperSlide>
                                    <SwiperSlide><img src={process.env.PUBLIC_URL + "/" + item.cookingimg2} alt={item.name} /></SwiperSlide>

                                </Swiper>
                            </div>
                          
                        </div>
                    </div>
                </div>

                <Relatedproduct productId={item.countery}/>
                <Feedback/>
                <Messenger/>
            </Fragment>
        );
    }
}

export default Content;