import React, { Component } from 'react';
import { pizzamenu } from '../../../data/menu.json';
import { benefits } from '../../../data/menutwo.json';

class Benefits extends Component {
    render() {
        return (
            
            <div className="ct-categories container mt-5 pt-3 mb-5">
                {/* Category Start */}
                <div className="ct-category">
                    {/* <div className="ct-category-bg img-responsive" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/categories-lg/tenali-double-horse-benefits.png)" }} /> */}
                   
                    <div className="ct-category-content">
                        <div className="ct-category-content-inner col-lg-4">
                          
                            {/* Menu Start */}
                         
                                {pizzamenu.map((item, i) => (
                                    <div key={i} className="col-lg-6">
                                        <div className="ct-mini-menu-item" style={{display:'flex'}}>
                                            <div className="ct-mini-menu-bottom mr-lg-3" style={{fontSize:'25px'}}>
                                            <i className={item.icon}  style={{color:'#ED4E53'}}/>
                                            </div>
                                            <div className="ct-mini-menu-top">
                                                <h5>{item.title}</h5>
                                               
                                            </div>
                                            
                                        </div>
                                    </div>
                                ))}
                           
                            {/* Menu End */}
                        </div>
                    </div>
                    <div className="col-lg-4
                     mb-lg-30 ct-single-img-wrapper">
                            <img src={process.env.PUBLIC_URL + "/assets/img/categories-lg/three.png"} alt="img" />
                           
                        </div>
                        <div className="ct-category-content">
                        <div className="ct-category-content-inner col-lg-4">
                          
                            {/* Menu Start */}
                         
                                {benefits.map((item, i) => (
                                    <div key={i} className="col-lg-6">
                                        <div className="ct-mini-menu-item" style={{display:'flex'}}>
                                            <div className="ct-mini-menu-bottom mr-lg-3" style={{fontSize:'25px'}}>
                                            <i className={item.icon}  style={{color:'#ED4E53'}}/>
                                            </div>
                                            <div className="ct-mini-menu-top">
                                                <h5>{item.title}</h5>
                                               
                                            </div>
                                            
                                        </div>
                                    </div>
                                ))}
                           
                            {/* Menu End */}
                        </div>
                    </div>
                </div>
                {/* Category End */}
               
            </div>
        );
    }
}

export default Benefits;