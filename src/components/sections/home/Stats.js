import React, { Component } from 'react';
import WOW from 'wow.js';
import 'animate.css';
import boxImage from '../../../assets/img/bg/box 2.svg'; // Import the image

const successpost = [
    {
        icon: 'assets/img/banner/medal.png',
        count: 18,
        title: "Years of Experience",
        delay: "0.4s"
    },
    {
        icon: 'assets/img/banner/globe.png',
        count: 12,
        title: "Total countries",
        delay: "0.6s"
    },
    {
        icon: 'assets/img/banner/india.png',
        count: 18,
        title: "States",
        delay: "0.8s"
    },
    {
        icon: 'assets/img/banner/box.png',
        count: 10,
        title: "Products",
        delay: "0.9s"
    }
]

class Stats extends Component {
    componentDidMount() {
        new WOW().init();
    }
    render() {
        return (
            <div className="section section-padding bg-parallax  bg-cover bg-center " style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/categories/stats-tdh.png)" }} >
                <div className="container" >
                    <div className="section-title-wrap section-header text-center">
                        <h2 className="title text-white">Empowering Progress</h2>
                        <p className="subtitle text-white">
                        Explore the statistics that define Tenali Double Horse's journey. From years of excellence to a growing customer base, discover the metrics that highlight our commitment to quality and growth.
                        </p>
                    </div>
                    <div className="row " >
                        {successpost.map((item, i) => (
                            <div key={i} className="col-lg-3 col-md-6 col-sm-6 wow animate__animated animate__fadeInUp" data-wow-delay={item.delay}>
                                <div className="ct-infographic-item card pt-3 pb-3 with-border-bottom border-0 shadow rounded-3" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                                    <img src={ item.icon} alt={item.title} style={{ width: '100px', height: '100px' }} /> {/* Use the image here */}
                                    <h4 className='text-dark' style={{ fontWeight: '800' }}>{new Intl.NumberFormat().format(item.count)}</h4>
                                    <p className='text-dark' style={{ fontWeight: '800' }}>{item.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Stats;
