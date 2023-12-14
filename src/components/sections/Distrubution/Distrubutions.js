import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

import products from "../../../data/product.json";
import productcategory from "../../../data/distrub.json";


import Feedback from '../home/Feedback';
import Messenger from '../home/Messenger';

class Distrubutions extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            modalshow: false,
            lastActiveBox: -1,
          
            filteredProducts: products.filter(
                (product) => product.category.includes(1) 
            ),
            activeItem: 1
        };
       
    }

    

    handleClick = id => {
        let filteredProducts = [];
        if (id === -1) {
            filteredProducts = products;
        } else {
            filteredProducts = products.filter(
                (product) => product.category.includes(id)
            );
        }
        
        this.setState({ filteredProducts, activeItem: id });
    };
    render() {
        const settings = {
            slidesToShow: 6,
            slidesToScroll: 3,
            arrows: false,
            dots: false,
            autoplay: true,
            autoplaySpeed: 2000,
            infinite: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                        
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 3,
                       
                    }
                },
                {
                    breakpoint: 400,
                    settings: {
                        slidesToShow: 2,
                       
                    }
                },
            ]
        };
       
       
        return (
            <Fragment>
             
                <div className="ct-menu-categories menu-filter">
                    <div className="container">
                    <h5 className="text-white text-center">Now We are in </h5>
                        <Slider className="menu-category-slider" {...settings}>
                           
                       
                            {productcategory.map((item, i) => (
                                <Link key={item.id} to="#" className={this.state.activeItem === parseInt(item.id) ? 'ct-menu-category-item active' : 'ct-menu-category-item'} onClick={this.handleClick.bind(this, item.id)}>
                                    <div className="menu-category-thumb-export">
                                        <img src={process.env.PUBLIC_URL + "/" + item.img} alt={item.title} />
                                    </div>
                                    <div className="menu-category-desc">
                                        <h6>{item.title}</h6>
                                    </div>
                                </Link>
                            ))}
                        </Slider>
                    </div>
                </div>
             
            
                <Feedback/>
                <Messenger/>
                <div className="section" style={{ paddingBottom: '0px' }}>

<div className="fluid-container locations-wrapper  ">
  <div className="container">
    <div className="section-title-wrap text-center mb-5">
      <h5 className="custom-primary">Establishing Ties</h5>
      <h2 className="title">Building local connections</h2>
      <p className="subtitle">
      Strengthening partnerships for expanded national market reach and improved trade relationships.
      </p>
    </div>
    <div className="row ">
      <div className="col-lg-6  mb-lg-5 " style={{ display: 'flex', justifyContent: 'start', alignItems: 'center', }}>

       
      <img src={process.env.PUBLIC_URL + "/assets/img/prods/distrub.png"} alt="img" className=' mb-2' />

      
      
       


      </div>
      <div className="col-lg-6
       ">
        <div className="row  top-row">
          <div className="col-lg-12 col-sm-12 mb-3 p-2 d-flex email-toll-card3 pb-3" style={{ display: 'flex', justifyContent: 'start', alignItems: 'center', }}>
            <div><i className='fas fa-file-invoice mt-3 mr-3 phone-icon' style={{ fontSize: '28px', color: ' #ED4E53', marginLeft:'10px' }} /></div> &nbsp;
            <div> <h5 className="text-white mb-0 mt-2"> Distribution Enquiry Form</h5></div>



          </div>
        </div>


        <div>
          <form className='mb-5'  ref={this.form} onSubmit={this.sendEmail}>
            <div className="row">
              <div className="form-group col-lg-6">
                <input
                  type="text"
                  placeholder="Name"
                  required
                  className="form-control"
                  name="name"
                 
                  onChange={this.handleInputChange}
                />
              </div>
             
              <div className="form-group col-lg-6">

                <input
                  type="text"
                  placeholder="Email Address"
                  required
                  className="form-control"
                  name="email"
                 
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="form-group col-lg-6">
                <input
                  type="text"
                  placeholder="Phone no"
                  required
                  className="form-control"
                  name="Phonenumber"
                
                  onChange={this.handleInputChange}
                />

              </div>
              <div className="form-group col-lg-6">
                <input
                  type="text"
                  placeholder="State"
                  required
                  className="form-control"
                  name="State"
                  
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="form-group col-lg-6">
                <input
                  type="text"
                  placeholder="City"
                  required
                  className="form-control"
                  name="city"
                 
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="form-group col-lg-6">
                <input
                  type="text"
                  placeholder="Name of Company"
                  required
                  className="form-control"
                  name="Company"
                 
                  onChange={this.handleInputChange}
                />
              </div>
              {/* <div className="form-group col-lg-6">
                <select
                  className="form-control"
                  name="purpose"
                  required
                 
                  onChange={this.handleInputChange}
                >
                  <option selected value="" disabled>Purpose of Contact</option>
                  <option value="Partnerships and Collaborations">Partnerships and Collaborations</option>
                  <option value="Shipping and Logistics">Shipping and Logistics</option>
                  <option value="Product Inquiry">Product Inquiry</option>
                  <option value="General Enquiries">General Enquiries</option>
                  <option value="Other">Other</option>
                </select>
              </div> */}
              
              <div className="form-group col-lg-12">
                <textarea
                  name="message"
                  className="form-control"
                  required
                  placeholder="Type your message"
                  rows={4}
                  
                  onChange={this.handleInputChange}
                />
              </div>
            </div>
 
            <button type="submit" value="Send" className="btn-custom primary mt-3" name="button">Send Message</button>
          </form>

        </div>
      </div>
    </div>
  </div>


 
</div>
</div>
            </Fragment>
        );
    }
}

export default Distrubutions;