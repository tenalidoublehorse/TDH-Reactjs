import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

class Offer extends Component {
    render() {
        return (
            <div className="section light-bg pb-5  mb-5  ">
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-6 mb-lg-30 ">
                            <img src={process.env.PUBLIC_URL + "/assets/img/misc/tenali-double-horse-factory-image.jpeg"}  alt="img" className='shadow-sm p-2  bg-white rounded' />
                        </div>
                        <div className="col-lg-6">
                            <div className="section-title-wrap mr-lg-30 mt-lg-2">
                                <h5 className="custom-primary">About</h5>
                                <h2 className="title"> Tenali Double Horse </h2>
                                <p className="subtitle" style={{textAlign:'justify'}}>
                                Since launching in 2005,  Tenali Double Horse has empowered many lives in India and gained millions of people. By putting all the pieces of a successful business in one convenient platform, Tenali Double Horse’s impeccable distribution network got started and grew faster. We provide the best quality Urad Gota and Urad Dall near you.
          </p>
                               
                                <a href={"/home-v2"} className="btn-custom">Read more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Offer;