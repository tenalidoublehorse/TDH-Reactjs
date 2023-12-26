import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from 'react-slick';
import products from "../../../data/highlights.json";
import productcategory from "../../../data/productcategory.json";

import img3 from '../../../assets/img/team/tenali-double-horse-phir-se-udan-campaingh.webp'
let urls = "https://www.amazon.in/dp/B0CCJ825SX?ref=myi_title_dp"


class Latestproducts extends Component {
  componentDidMount() {
    AOS.init({
        duration: 1500, 
    });
}
constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
}
next() {
    this.slider.slickNext();
}
previous() {
    this.slider.slickPrev();
}

    
    render() {
        const settings = {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            
            dots: false,
           
   
            autoplay: true,
            speed:5000,
            fade :true,
            autoplaySpeed: 6000,
            responsive: [{
                breakpoint: 768,
                settings: {
                    dots: false,
                    autoplay: true
                }
            }]
        }
        return (
        
            <div>
        <div className="section section-padding-two bg-cover bg-center  pt-0 pb-5 category-section light-pic bg-danger " style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/banner/tdh-m2-desgin.png)", paddingBottom: '0px!important', height: '100vh' }}>
          <div className="container m2-desgin  ">
            <Slider className="category-slider" {...settings} ref={c => (this.slider = c)}>
              {products.map((item, i) => (
                <div key={i} className="ct-category category-2 fixed">
                  <div  className="m2-image" >
                    <img  src={process.env.PUBLIC_URL + "/" + item.img} alt={item.name} />
                  </div>
                  <div className="ct-category-desc m2-content bg-overlay light-overlay p-4">
                    {item.category.slice(0, 1).map((category) => (
                      productcategory.filter(item => {
                        return item.id === category
                      }).map((cat, i) => (
                        <h5 className="custom-primary " style={{display:'none'}} key={i}>{cat.title}</h5>
                      ))
                    ))}
                    {/* <h5 className="text-light back-custom " style={{fontSize:'13px'}} >100 % Oraganic </h5> */}
                    <h3 className=''>{item.name}</h3>
                    <p className=''>{item.shortdesc}</p>
                    <a href={item.urls} target='_blank' className="btn-custom">Order Now</a>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}
export default Latestproducts;