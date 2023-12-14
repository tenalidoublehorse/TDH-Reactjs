import React, { Component, Fragment } from 'react';
import { Modal } from 'react-bootstrap';
import { getProduct } from '../../helper/Tdhfproducthelper'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
// import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.css';
import SwiperCore from 'swiper'
import { Autoplay } from 'swiper';

SwiperCore.use([Autoplay]);

class Quickview extends Component {
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
        return (
            <Fragment> 
                {/* <Modal.Header className="modal-bg mt-5 bg-warning" closeButton style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/" + item.img + ")" }} /> */}
                <Modal.Body>
                    <div className="customize-meta product-popup-section ">
                        <div className='popup-product-image-sec'>
                        <Swiper
                            spaceBetween={10}
                            slidesPerView={1}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            autoplay={{ delay: 1000 }}
                            loop={true}
                            >
                            <SwiperSlide><img className="pr-pop-up-image" src={process.env.PUBLIC_URL + "/" + item.img} alt={item.name} /></SwiperSlide>
                            <SwiperSlide><img className="pr-pop-up-image" src={process.env.PUBLIC_URL + "/" + item.img2} alt={item.name} /></SwiperSlide>
                            <SwiperSlide><img className="pr-pop-up-image" src={process.env.PUBLIC_URL + "/" + item.img3} alt={item.name} /></SwiperSlide>
                            <SwiperSlide><img className="pr-pop-up-image" src={process.env.PUBLIC_URL + "/" + item.img4} alt={item.name} /></SwiperSlide>
                          
                        </Swiper>
                        {/* <img className="product-pop-up-img" src={process.env.PUBLIC_URL + "/" + item.img}  /> */}
                        </div>
                        <div>
                          <div className=''>
                          <h4 className="customize-title">{item.name}  </h4>
                          <p>{item.shortdesc}</p>
                          <h5><span className="custom-primary">₹{new Intl.NumberFormat().format((item.price).toFixed(2))}</span></h5>
                          <button type="button" className="btn-custom btn-sm ">Order Now</button>   
                          {/* <button type="button" className="btn-custom btn-sm ">Order Now</button> */}
                          </div>
                        </div>
                        
                    </div>
                    <div className="customize-variations">
                        {/* <div className="customize-size-wrapper">
                            <h5>Size: </h5>
                            {item.sizes.map((item, i) => (
                                <div key={i} className={item.state ? 'customize-size active' : 'customize-size'}>
                                    {item.size}
                                </div>
                            ))}
                        </div> */}
                        <div className="row">
                          
                                {item.attributes.slice(0,3).map((item, i) => (
                                    <div key={i} className="col-lg-4 col-12">
                                        <div className="customize-variation-wrapper">
                                            <i className={item.icon} />
                                            <h5>{item.name}</h5>
                                            {item.items.map((add, i) => (
                                                <div key={i} className="customize-variation-item">
                                                    <div className={"custom-control custom-" + item.type}>
                                                        <input type={item.type} id={add.title + i} name={item.name} className="custom-control-input" />
                                                        <label className="custom-control-label" htmlFor={add.title + i}>{add.title}</label>
                                                    </div>
                                                    <span>+{new Intl.NumberFormat().format((add.addprice).toFixed(2))}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>   
                                ))}
                                {item.attributes.slice(0,3).map((item1, i) => (
                                    <div key={i} className="col-lg-8 col-12">
                                         <div>
                                            <h4>Description</h4>
                                            <p>{item.longdescription}</p>
                                         </div>
                                         <div>
                                            {/* <h4>About this item</h4> */}
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
                                         </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                    {/* <div className="customize-controls">
                        <div className="qty">
                            <span className="qty-subtract" onClick={this.DecreaseItem}><i className="fa fa-minus" /></span>
                            <input type="text" name="clicks" value={this.state.clicks} onChange={this.handleChange.bind(this)} />
                            <span className="qty-add" onClick={this.IncrementItem}><i className="fa fa-plus" /></span>
                        </div>
                        <div className="customize-total" data-price={new Intl.NumberFormat().format((item.price).toFixed(2))}>
                            <h5>Total Price: <span className="final-price custom-primary">{new Intl.NumberFormat().format((item.price).toFixed(2))} <span>₹</span> </span> </h5>
                        </div>
                    </div> */}
                    {/* <button type="button" className="btn-custom btn-sm ">Order Now</button> */}
                </Modal.Body>
            </Fragment>
        );
    }
}

export default Quickview;