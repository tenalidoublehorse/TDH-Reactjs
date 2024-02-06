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


const galler = [
    
    {
        img: "assets/img/about/amazon.png",
        delay:"0.2s"
    }
   ,
   {
    img: "assets/img/about/Dmart.png",
    delay:"0.4s"
},
{
    img: "assets/img/about/reliance-fresh.png",
    delay:"0.6s"
},
    {
        img: "assets/img/about/big-basket.png",
        delay:"0.8s"
    },
    {
        img: "assets/img/about/swiggy.png",
        delay:"1.2s"
    },
    {
        img: "assets/img/about/Qwipo.png",
        delay:"1.4s"
    },
    {
        img: "assets/img/about/Jumbotail.png",
        delay:"1.6s"
    },
    {
        img: "assets/img/about/gampa.png",
        delay:"1.8s"
    },
    
    {
        img: "assets/img/about/natrivepur.png",
        delay:"2.0s"
    }
   
];

class Markets extends Component {

    render() {
        return (
            
            <div className="section pt-5 wow animate__animated animate__fadeInUp" data-wow-delay="0.2s" style={{ backgroundColor: 'rgb(249, 250, 230);'  }}>
            <div className="container">
                <div className="row">
                    <div className='col-lg-5 col-md-12 col-sm-12 d-flex  flex-wrap flex-column justify-content-center order-2 order-lg-2 wow animate__animated animate__fadeInUp' data-wow-delay="0.4s">
                        <h2 className='custom-primary title-two large-mobile' >We are also Available in</h2>
                        <h4 className="large-mobile ">Online Presence</h4>
                        <p className='large-mobile '>Experience convenience with our products, accessible on top ecommerce platforms globally</p>
                    </div>
                    <div className='col-lg-7 col-md-12 col-sm-12 d-flex flex-wrap  order-2 order-lg-2 wow animate__animated animate__fadeInUp' data-wow-delay="0.4s">
                    {galler.map((item, i) => (
                            <div key={i} className="col-lg-4 wow animate__animated  animate__fadeInUp" data-wow-delay={item.delay}>
                                <Link>
                                    <img src={process.env.PUBLIC_URL + "/" + item.img} className='ecommerce' alt="post" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
            
        );
    }
}

export default Markets;
