import React, { Component } from 'react';
// import { Link } from 'react-router-dom'

class Aboutus extends Component {
    render() {
        return (
            <div className="section  mb-5 mt-5" style={{backgroundColor:'#f9f9f9'}}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-lg-30 ct-single-img-wrapper">
                            <img src={process.env.PUBLIC_URL + "/assets/img/Tenali-Double-Horse-about-1280x1560.png"} alt="img" />
                            <div className="ct-dots" />
                        </div>
                        <div className="col-lg-6">
                        <div className="section-title-wrap mr-lg-30 mt-4">
                                <h5 className="custom-primary">About</h5>
                                <h2 className="title"> Tenali Double Horse </h2>
                                <p className="subtitle" style={{textAlign:'justify'}}>
                                Since launching in 2005,  Tenali Double Horse has empowered many lives in India and gained millions of people. By putting all the pieces of a successful business in one convenient platform, Tenali Double Horse’s impeccable distribution network got started and grew faster. We provide the best quality Urad Gota and Urad Dall near you.
          </p>
                                {/* <p className="subtitle">
                                We encourage you to switch to the right choices, as it is the need of the hour!
          </p> */}
                                <a href={"/about"} className="btn-custom">Read more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Aboutus;