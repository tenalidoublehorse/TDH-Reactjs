import React, { Component } from 'react';


class Cardhover extends Component {
    render() {
        return (
            <div className="section light-bg">
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-6 mb-lg-30 ">
                        <div class="container-hover">
                            <div class="card">
                               

                                    <div class="slide slide1">

                                        <div class="content">

                                            <div class="icon">

                                                <i class="fa fa-user-circle" aria-hidden="true"></i>

                                            </div>

                                        </div>

                                    </div>

                                    <div class="slide slide2">

                                        <div class="content">

                                            <h3>

                                                Hello there!

                                            </h3>

                                            <p>Trust yourself and keep going.</p>

                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>
                        <div className="col-lg-6 alignments">
                            <div className="section-title-wrap mr-lg-30 mt-lg-2">
                                <h5 className="custom-primary">Achievement Certificate</h5>
                                <h2 className="title">Great Place to Work</h2>
                                <p className="subtitle" style={{ textAlign: 'justify' }}>
                                    The Great Place to Work certification is a prestigious recognition given to companies that have created a positive workplace culture where employees feel valued, respected, and engaged. Tenali Double Horse Company has achieved this certification by meeting the high standards set by the Great Place to Work Institute.
                                </p>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cardhover;