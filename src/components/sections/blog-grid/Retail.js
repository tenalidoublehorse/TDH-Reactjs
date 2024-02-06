import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import 'magnific-popup';

const gallery = [
    
   
    {
        img: "assets/img/campaign/dmart-u.png",
        delay:"0.2s"
    },
    {
        img: "assets/img/campaign/big-basket.png",
        delay:"0.4s"
    },
    {
        img: "assets/img/about/Walmart.png",
        delay:"0.6s"
    },
    {
        img: "assets/img/campaign/reliance-fresh-u.png",
        delay:"0.8s"
    },
    {
        img: "assets/img/campaign/spencers-u.png",
        delay:"1.0s"
    },
   
   
    {
        img: "assets/img/about/Metro.png",
        delay:"1.2s"
    },
    {
        img: "assets/img/about/Ratnadeep.png",
        delay:"1.4s"
    },
    {
        img: "assets/img/campaign/ushodaya-u.png",
        delay:"1.6s"
    },
    {
        img: "assets/img/campaign/retail-vijetha.png",
        delay:"1.8s"
    },
    {
        img: "assets/img/campaign/more-market.png",
        delay:"2.0s"
    }
];


class Markets extends Component {

    render() {
        return (
<div className="container-fluid nutrition-section pb-5" >
    <div className='d-flex justify-content-center'>
<div class="cardheader pt-3">
                                    <img src={process.env.PUBLIC_URL + "/assets/img/banner/leftangle.png"} className='angle' alt="High Nutritional" />
                                </div>
            <div className="section-title-wrap section-header text-center pt-4  pt-lg-5 wow animate__animated animate__fadeInUp" data-wow-delay="0.4s" >
            {/* <h5 className="custom-primary white-bg mx-auto">Where Quality Meets Commitment </h5> */}
            
            <h2 className="title layer-one mb-lg-3 mb-1" > Retail Partners Showcase</h2>
            
            <p className="subtitle largefont ">
            Explore diverse collaborations below, enriching company's retail ecosystem seamlessly.
            </p>

        </div>
        <div class="cardheader pt-3">
                                    <img src={process.env.PUBLIC_URL + "/assets/img/banner/angle.png"} className='angle' alt="High Nutritional" />
                                </div>
                                </div>
            <div className="container">
            <div className="row">
                
               
                   
                        {gallery.map((item, i) => (
                            <div key={i} className="col-lg-4 wow animate__animated  animate__fadeInUp" data-wow-delay={item.delay}>
                                <Link>
                                    <img src={process.env.PUBLIC_URL + "/" + item.img} className='shops' alt="post" />
                                </Link>
                            </div>
                        ))}
                    </div>
               
           
        </div>
        </div>
            );
        }
    }
    
    export default Markets;