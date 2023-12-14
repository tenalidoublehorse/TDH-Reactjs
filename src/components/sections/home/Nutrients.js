import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import WOW from 'wow.js';
import 'animate.css';
import pdffile from '../../pages/M2-Brouchure.pdf'
import { pizzamenu } from '../../../data/menu.json';

class Nobalactivity extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          isVisible: false,
        };
        this.sectionRef = React.createRef();
      }
     
    render() {
        return (
            <div className="container-fluid  notabule-sec mt-5" style={{backgroundImage:`url(${process.env.PUBLIC_URL} + /assets/img/banner/icons/ganesh-bg.jpg)`}}>
         
            <h2 className='title text-center pb-4'>Premium Desi Urad Chakki Dall </h2>
          

            <div class="why-choose-section ">
                    <div class="container">
                        <div class="row d-flex justify-content-between align-items-center pb-5">
                            <div class="col-lg-6 ">
                               
                       
                          
                        <h5 class=" custom-primary text-center">Key Benefits of M2 </h5>
                        <div className="row" >
                       
                              
                                {pizzamenu.map((item, i) => (
                                    // <div key={i} className="col-lg-6">
                                    <div key={i} className={`col-lg-6 ${item.title === "Naturally Processed" || item.title === "Packed Without Hand Touch" || item.title === "The Best In Quality, Taste" || item.title === "Processed In a first Fully Atomized Plant" ? "border-right" : ""}`}>
                                        <div className="ct-mini-menu-item" style={{display:'flex'}}>
                                            <div className="ct-mini-menu-bottom col-lg-4 col-3" style={{fontSize:'25px'}}>
                                            <img src={process.env.PUBLIC_URL + "/" + item.icon} alt={item.title} />
                                            </div>
                                            <div className="ct-mini-menu-top col-lg-8 col-9" style={{display:'flex',alignItems:'center'}}>
                                                <p className='m2-font'>{item.title}</p>
                                               
                                            </div>
                                            
                                        </div>
                                    </div>
                                ))}
                            </div>
                            
                                
                    
                            </div>

                            <div class="col-lg-6">
                              
                                <div class="img-wrap3  ">
                                 
                                    <img  src={process.env.PUBLIC_URL + "/assets/img/banner/icons/m2-urad-chakki.png"} alt="M2" class="img-fluid"  />
                                </div>
                                <div className=' text-center'>
                                <a
                                    href={pdffile}
                                    download="M2-Brouchure.pdf"
                                    rel="noopener noreferrer"
                                    className="btn-custom btn-sm shadow-none"
                                    target="_blank"
                                    type="application/pdf"
                                    >
                                    Download Brochure
                                </a>
                               
                               
                               
                    
                                </div>
                            </div>

                        </div>



  
                        


                    </div>
                    
                </div>
          </div>
        );
    }
}

export default Nobalactivity;