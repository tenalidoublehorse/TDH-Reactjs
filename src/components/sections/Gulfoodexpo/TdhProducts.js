import React, { Component, Fragment } from 'react';

class TdhProducts extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="colour-pink gulfoodexpo_event_details" style={{backgroundColor:'#fff7ef', padding: '70px 0px 0px'}}>
                <div className="container">
                    <div className='row'>
                        
                        <div className="col-md-6">
                            {/* <h5 className="custom-primary text-center white-bg mx-auto">Flavors of Excellence</h5> */}
                            <h2 className="title">Why Visit Tenali Double Horse<br /> at Gulfood Expo?</h2>

                            <ul>
                                <li>Discover our latest product innovations.</li>
                                <li>Explore potential business partnerships.</li>
                                <li>Network with industry experts.</li>
                                <li>Experience the taste of Tenali Double Horse excellence.</li>
                            </ul>
                            
                        </div>
                        <div className='col-md-1'></div>
                        <div className='col-md-5'>
                            <div className='venue_details'>
                                <h5>Event Details:</h5>
                            <p>
                            Date: 19th - 23rd February 2024<br />
                            Venue: Dubai World Trade Centre<br />
                            Visit us at Stand: ZP-H47, Hall: Za’abeel Plaza</p>

                            </div>
                        </div>
                    </div>
                    
                </div>

                <div className="stay_connected" style={{backgroundColor:"#FFF", marginTop: "50px"}}>
                    <div className="section">
                        <div className="container-fluid">
                            <div className="row">
                                <div className='col-md-3'></div>
                                <div className="col-md-6 my-auto text-center">
                                   <p className='text-center text-danger form-hedline' style={{ fontSize: "20px", marginBottom: "0px" }}>Stay Connected</p>
                                   <p>Follow us on social media to stay updated on all the latest news and updates leading up to the Gulfood Expo 2024.</p>

                                   <ul className="social-media footer-social-media">
                                        <li>
                                            <a target="_blank" rel="noopener noreferrer" href={"https://www.facebook.com/tenalidoublehorse"} className="facebook1">
                                                <i className="fab fa-facebook-f" />
                                            </a>
                                        </li>
                                        <li>
                                            <a target="_blank" rel="noopener noreferrer" href={"https://www.instagram.com/tenalidoublehorse/"} className="youtube1">
                                                <i className="fab fa-instagram" />
                                            </a>
                                        </li>

                                        { /*}
                                        <li>
                                            <a target="_blank" rel="noopener noreferrer" href={"https://www.youtube.com/c/TenaliDoubleHorse"} className="youtube1">
                                                <i className="fab fa-youtube" />
                                            </a>
                                        </li>
                                        
                                        <li>
                                            <a target="_blank" rel="noopener noreferrer" href={"https://twitter.com/tnldoublehorse"} className="twitter1">
                                                <i className="fab fa-twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a target="_blank" rel="noopener noreferrer" href={"https://www.linkedin.com/company/tenalidoublehorse/"} className="linkedin1">
                                                <i className="fab fa-linkedin" />
                                            </a>
        </li> */ }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
        );
    }
}

export default TdhProducts;