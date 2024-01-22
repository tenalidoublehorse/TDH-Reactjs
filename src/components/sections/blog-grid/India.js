// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import Slider from 'react-slick';
// import $ from 'jquery';
// import 'magnific-popup';



// const gallery = [
//     {
//         img: "assets/img/about/2.png"
//     },
//     {
//         img: "assets/img/about/3.png"
//     },
//     {
//         img: "assets/img/about/reliance-fresh.png"
//     },
//     {
//         img: "assets/img/about/Dmart.png"
//     },
//     {
//         img: "assets/img/about/Metro.png"
//     },
//     {
//         img: "assets/img/about/amazoan.png"
//     },
//     {
//         img: "assets/img/about/Ratnadeep.png"
//     }
//     ,
//     {
//         img: "assets/img/campaign/retail-ushodaya.png"
//     },
//     {
//         img: "assets/img/campaign/retail-vijetha.png"
//     }
// ];


// class Markets extends Component {
    
//     render() {
//         const settings = {
//             slidesToShow: 4,
//             slidesToScroll: 1,
//             arrows: false,
//             autoplay: true,
//             autoplaySpeed: 2000,
//             dots: false,
//             focusOnSelect: true,
//             responsive: [{
//                 breakpoint: 991,
//                 settings: {
//                     slidesToShow: 2,
//                 }
//             },
//             {
//                 breakpoint: 575,
//                 settings: {
//                     slidesToShow: 1,
//                 }
//             }
//             ]
//         };
        
//         return (
//             <div className="section pt-0" style={{backgroundColor: '#F2ECE4'}} >
//                 <h2   className='title text-center' >We are also Available in</h2>
//                 <div className="container">
                
//                     <div className="container">
//                     <div className="row ">
//                     <div className="col-lg-2 center-align" style={{backgroundColor:'#ED4E53'}}>
//       <p className='text-white' style={{fontWeight: 'bold' }}>Tenali Double Horse</p>
//       <h4 className='text-white'>Our  Retail Partners</h4>

//     </div>
//     <div className="col-lg-10">
//                         <Slider className="gallery-slider row p-5" {...settings} style={{ backgroundColor: '#F2ECE4',paddingBottom: '-5px' }}>
//                             {gallery.map((item, i) => (
//                                 <Link  >
//                                     <img src={process.env.PUBLIC_URL + "/" + item.img} alt="post" />
//                                 </Link>
//                             ))}
//                         </Slider>
//                         </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// export default Markets;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import 'magnific-popup';

const gallery = [
    
   
    {
        img: "assets/img/about/Dmart.png"
    },
    {
        img: "assets/img/about/big-basket.png"
    },
    {
        img: "assets/img/about/Walmart.png"
    },
    {
        img: "assets/img/about/reliance-fresh.png"
    },
    {
        img: "assets/img/about/spencers.png"
    },
   
   
    {
        img: "assets/img/about/Metro.png"
    },
    {
        img: "assets/img/about/Ratnadeep.png"
    },
    {
        img: "assets/img/campaign/retail-ushodaya.png"
    },
    {
        img: "assets/img/campaign/retail-vijetha.png"
    },
    {
        img: "assets/img/about/more.png"
    }
];

const galler = [
    
    {
        img: "assets/img/about/amazon.png"
    }
   ,
    {
        img: "assets/img/about/big-basket.png"
    },
    
    {
        img: "assets/img/about/natrivepur.png"
    }
   
];

class Markets extends Component {

    render() {
        return (
            
            <div className="section pt-5" style={{ backgroundColor: '#F2ECE4' }} >
                <h2 className='title text-center'>We are also Available in</h2>
                <h5 class="custom-primary text-center">Ecommerce</h5>
                <div className="container">
                    <div className="row">
                        
                       
                           
                                {galler.map((item, i) => (
                                    <div key={i} className="col-lg-4">
                                        <Link>
                                            <img src={process.env.PUBLIC_URL + "/" + item.img} className='shops' alt="post" />
                                        </Link>
                                    </div>
                                ))}
                            </div>
                       
                   
                </div>
                <h5 class="custom-primary text-center mt-3">Retail Partners</h5>
                <div className="container">
                    <div className="row">
                        
                       
                           
                                {gallery.map((item, i) => (
                                    <div key={i} className="col-lg-4">
                                        <Link>
                                            <img src={process.env.PUBLIC_URL + "/" + item.img} className='shops' alt="post" />
                                        </Link>
                                    </div>
                                ))}
                            </div>
                       
                   
                </div>
            </div>
        );
    }
}

export default Markets;
