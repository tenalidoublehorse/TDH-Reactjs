import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import img3 from '../../../assets/img/team/tenali-double-horse-phir-se-udan-campaingh.webp'
let urls = "https://www.amazon.in/dp/B0CCJ825SX?ref=myi_title_dp"


class Camapaing extends Component {
 
    render() {
        return (
        
          <section class="naturix-quality sec-space-bottom" style={{backgroundColor:"#f9fae6"}}>
                <div class="pattern"> 
                    <img alt="" src="assets/img/icons/white-pattern.png"/>
                </div>
                <div class="section-icon"> 
                    <img alt="" src="assets/img/icons/icon-2.png" />
                </div>
                {/* <div class="container"> 
                    <div class="title-wrap pt-15">
                        <h2 class="section-title pt-15 text-light"> <span class="light-font">Premium  </span> <strong> Desi Urad Chakki Dall </strong> </h2>                        
                        <h4 class="sub-title"> Experience the Goodness of Nature</h4>
                    </div>
                    <div class="food-quality block-inline">
                        <div class="col-lg-4 col-sm-12  pt-50"> 
                            <div class="left"> 
                                <div class="quality-img"> 
                                    <img alt="" src={process.env.PUBLIC_URL + "/assets/img/mtwo/1.png"} />
                                </div>
                                <div class="quality-caption"> 
                                    <h2 class="title-1">Naturally Processed</h2>
                                    <span class="divider-2"></span>
                                   
                                </div>                               
                            </div>
                            <div class="left"> 
                                <div class="quality-img"> 
                                    <img alt="" src={process.env.PUBLIC_URL +"/assets/img/mtwo/3.png"}/>
                                </div>
                                <div class="quality-caption"> 
                                    <h2 class="title-1">Packed Without Hand Touch</h2>
                                    <span class="divider-2"></span>
                                 
                                </div>                               
                            </div>
                            <div class="left"> 
                                <div class="quality-img"> 
                                    <img alt="" src={process.env.PUBLIC_URL +"/assets/img/mtwo/6.png"}/>
                                </div>
                                <div class="quality-caption"> 
                                    <h2 class="title-1">The Best In Quality, Taste</h2>
                                    <span class="divider-2"></span>
                                  
                                </div>                               
                            </div>
                            <div class="left "> 
                                <div class="quality-img"> 
                                    <img alt=""src={process.env.PUBLIC_URL +"/assets/img/mtwo/7.png"}/>
                                </div>
                                <div class="quality-caption"> 
                                    <h2 class="title-1">Processed In a first Fully Atomized Plant</h2>
                                    <span class="divider-2"></span>
                                  
                                </div>                               
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-12 text-center"> 
                        <img  src={process.env.PUBLIC_URL + "/assets/img/banner/icons/desgin.png"} alt="M2"   />
                        </div>
                        <div class="col-lg-4 col-sm-12 pt-50"> 
                            <div class="right"> 
                                <div class="quality-img"> 
                                <img alt=""src={process.env.PUBLIC_URL +"/assets/img/mtwo/2.png"}/>
                               
                                </div>
                                <div class="quality-caption"> 
                                    <h2 class="title-1">No Added Preservatives</h2>
                                    <span class="divider-2"></span>
                                   
                                </div> 
                            </div>
                            <div class="right"> 
                                <div class="quality-img"> 
                                <img alt=""src={process.env.PUBLIC_URL +"/assets/img/mtwo/9.png"}/>
                                </div>
                                <div class="quality-caption"> 
                                    <h2 class="title-1">Superior Quality</h2>
                                    <span class="divider-2"></span>
                                   
                                </div> 
                            </div>
                            
                            <div class="right"> 
                                <div class="quality-img"> 
                                <img alt=""src={process.env.PUBLIC_URL +"/assets/img/mtwo/8.png"}/>
                                </div>
                                <div class="quality-caption"> 
                                    <h2 class="title-1">Processed With Desi Black Gram</h2>
                                    <span class="divider-2"></span>
                                  
                                </div> 
                            </div>
                            <div class="right"> 
                                <div class="quality-img"> 
                                <img alt=""src={process.env.PUBLIC_URL +"/assets/img/mtwo/4.png"}/>
                               
                                </div>
                                <div class="quality-caption"> 
                                    <h2 class="title-1">Procurement from best Harvesting fields</h2>
                                    <span class="divider-2"></span>
                                   
                                </div> 
                            </div>
                        </div>
                    </div>                    
                </div> */}
                <div className='m2-main-section'>
                <div className='m2-main-image'>
                {/* <img  src={process.env.PUBLIC_URL + "/assets/img/banner/icons/desgin.png"} alt="M2"   /> */}
                </div>
                <div className='m2-surround-image'>
                    <div className='item-1 p-1'>
                        <img alt="" src={process.env.PUBLIC_URL + "/assets/img/mtwo/1.png"} />
                        <h6>title</h6>
                    </div>
                </div>
                <div className='m2-surround-image'>
                    <div className='item-1 p-1'>
                        <img alt="" src={process.env.PUBLIC_URL + "/assets/img/mtwo/1.png"} />
                        <h6>title</h6>
                    </div>
                </div>
                <div className='m2-surround-image'>
                    <div className='item-1 p-1'>
                        <img alt="" src={process.env.PUBLIC_URL + "/assets/img/mtwo/1.png"} />
                        <h6>title</h6>
                    </div>
                </div>
                <div className='m2-surround-image'>
                    <div className='item-1 p-1'>
                        <img alt="" src={process.env.PUBLIC_URL + "/assets/img/mtwo/1.png"} />
                        <h6>title</h6>
                    </div>
                </div>
                <div className='m2-surround-image'>
                    <div className='item-1 p-1'>
                        <img alt="" src={process.env.PUBLIC_URL + "/assets/img/mtwo/1.png"} />
                        <h6>title</h6>
                    </div>
                </div>
                <div className='m2-surround-image'>
                    <div className='item-1 p-1'>
                        <img alt="" src={process.env.PUBLIC_URL + "/assets/img/mtwo/1.png"} />
                        <h6>title</h6>
                    </div>
                </div>
                <div className='m2-surround-image'>
                    <div className='item-1 p-1'>
                        <img alt="" src={process.env.PUBLIC_URL + "/assets/img/mtwo/1.png"} />
                        <h6>title</h6>
                    </div>
                </div>
                <div className='m2-surround-image'>
                    <div className='item-1 p-1'>
                        <img alt="" src={process.env.PUBLIC_URL + "/assets/img/mtwo/1.png"} />
                        <h6>title</h6>
                    </div>
                </div>

                </div>




            </section>
        );
    }
}

export default Camapaing;