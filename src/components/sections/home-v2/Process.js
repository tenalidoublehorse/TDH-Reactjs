import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import WOW from 'wow.js';
import 'animate.css';


const processpost = [
    {
        icon: "flaticon-online-booking",
        title: "Superior Quality",
        text: "delivering excellence in every bite,High-quality standards in terms of freshness, purity, and taste."
    },
    {
        icon: "flaticon-medal",
        title: "Trusted Brand",
        text: "Building trust with our customers by consistently delivering exceptional quality and reliability."
    },
    {
        icon: "flaticon-grocery",
        title: "High Nutritional Value",
        text: "Abundant nutrients, vitamins, minerals for optimal health through our products"
    }
];

class Process extends Component {
    componentDidMount() {
        new WOW().init();
    }
    render() {
        return (
            <div className="container-fluid nutrition-section pb-5">
                <div className="section-title-wrap section-header text-center pt-5 ">
                    <h5 className="custom-primary">Where Quality Meets Commitment </h5>
                    <h2 className="title">Where Quality Meets Commitment</h2>
                    <p className="subtitle">
                        Experience the goodness of high nutritional value and affordability with Tenali Double Horse. Elevate your breakfast routine with our superior products.
                    </p>
                </div>

                <div className="row1-container four-philers">
                    {/* <div className='container'> */}
                    <div className='row nutrition'>
                        <div className='col-lg-6 col-sm-12 mt-3'>
                            <div className="card border-0 shadow rounded-3">
                                <div class="cardheader pt-3">
                                    <img src={process.env.PUBLIC_URL + "/assets/img/proccess/high-nutritional.png"} alt="High Nutritional" />
                                </div>
                                <div className="card-body">
                                    <h5 class="card-title">High Nutritional Value</h5>
                                    <p class="card-text">Abundant nutrients, vitamins, and minerals for optimal health through our products.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 col-sm-12 mt-3'>
                            <div className="card border-0 shadow rounded-3">
                                <div class="cardheader pt-3">
                                    <img src={process.env.PUBLIC_URL + "/assets/img/proccess/superior-quality.png"} alt="Superior Quality" />
                                </div>
                                <div className="card-body">
                                    <h5 class="card-title ">Superior Quality</h5>
                                    <p class="card-text ">Delivering excellence in every bite, High-quality standards in freshness, purity, and taste.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 col-sm-12 mt-4'>
                            <div className="card border-0 shadow rounded-3">
                                <div class="cardheader pt-3">
                                    <img src={process.env.PUBLIC_URL + "/assets/img/proccess/trusted-brancd.png"} alt="Trusted Brand" />
                                </div>
                                <div className="card-body">
                                    <h5 class="card-title">Trusted Brand</h5>
                                    <p class="card-text">Building trust with our customers by consistently delivering exceptional quality and reliability.</p>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-6 col-sm-12 mt-4'>
                            <div className="card border-0 shadow rounded-3">
                                <div class="cardheader pt-3">
                                    <img src={process.env.PUBLIC_URL + "/assets/img/proccess/affordable.png"} alt="Affordable" />
                                </div>
                                <div className="card-body pt-3">
                                    <h5 class="card-title">Affordable</h5>
                                    <p class="card-text">Premium Urad Dal at Affordable Prices. Elevate your Daily Routine without compromising quality: your satisfaction is our priority.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* </div> */}
                </div>
            </div>
        );
    }
}

export default Process;
