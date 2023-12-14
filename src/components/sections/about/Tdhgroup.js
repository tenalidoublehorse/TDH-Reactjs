import React, { Component,Link } from 'react';


class Tdhgroup extends Component {
    render() {
        return (
            <div className="section light-bg  mb-5 mt-5">
                <div className="container">
                <div className="section-title-wrap section-header text-center ">
                    <h5 className="custom-primary">A Brand of </h5>
                    <h2 className="title">Tenali Double Horse Group</h2>
                    <p className="subtitle">
                        Tenali Double Horse industry-leading all-in-one platform makes it simple to set a healthy breakfast regime.
                    </p>
                </div>
                    <div className="row ">
                        <div className="col-lg-6 mb-lg-30 alignments d-flex flex-column border-right" >
                            <img src={process.env.PUBLIC_URL + "/assets/img/prods/tdh-main-3.png"} alt="img" className='mb-2  ' />
                            <a href= {'#tenali-double-horse-products'} rel="noopener noreferrer" target="_blank" class="btn-custom  shadow-none ">View More</a>
                        </div>
                        <div className="col-lg-6 alignments d-flex flex-column">
                        <img src={process.env.PUBLIC_URL + "/assets/img/prods/tdhf-icon-3.png"} alt="img" className=' mb-2' />
                        <a  href="https://tdhfoodproducts.com/" rel="noopener noreferrer" target="_blank" class="btn-custom  shadow-none ">View More</a>
                           
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Tdhgroup;