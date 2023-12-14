import React, { Component } from 'react';
import $ from 'jquery'; // Import jQuery
import img1 from '../../../assets/img/team/tenali-double-horse-varalakshmi-vartam-campaign-image.webp'
import img2 from '../../../assets/img/team/tenali-double-horse-seed-ganesh-campaign-image.webp'
import img3 from '../../../assets/img/team/tenali-double-horse-phir-se-udan-campaingh.webp'
import img4 from '../../../assets/img/team/tenali-double-horse-seed-ganesh-campaign-image.webp'
import img5 from '../../../assets/img/team/tenali-double-horse-Raksha-bandhan-campaign-image.webp'
import img6 from '../../../assets/img/team/tenali-double-horse-Raksha-bandhan-campaign-image.webp'
import img7 from '../../../assets/img/team/tenali-double-horse-seed-ganesh-campaign-image.webp'



class Container extends Component {
  
    componentDidMount() {
        this.rotateInterval = window.setInterval(this.rotate, 4000);
    }

    componentWillUnmount() {
        clearInterval(this.rotateInterval);
    }

    rotate = () => {
        const lastChild = $('.slider-activities div:last-child').clone();
        $('.slider-activities div').removeClass('firstSlide');
        $('.slider-activities div:last-child').remove();
        $('.slider-activities').prepend(lastChild);
        $(lastChild).addClass('firstSlide');
    };

    render() {
        
        return (
            <div className="container-ac">
        {/* <h2 className='title text-center pt-lg-5  mt-lg-5'></h2> */}
        <div className="section-title-wrap section-header  mb-md-5 mt-lg-5 mt-xl-5  mt-xxl-5 text-center ">
                    <h5 className="custom-primary">Campaign Chronicles  </h5>
                    <h2 className="title">Explore Our Ongoing Campaigns</h2>
                    <p className="subtitle ">
                    Discover the latest buzz in the digital realm. Dive into our ongoing digital or PR campaigns that bring you exciting updates, engaging content, and a taste of the future with Tenali Double Horse.
                    </p>
                </div>
       
                               
       
                <div className="slider-activities">
                    <div className= "box1-activities firstSlide" style={{ backgroundImage: `url(${img1})` }}> </div>
                    <div className="box2-activities"  style={{ backgroundImage: `url(${img2})`}}></div>
                    <div className="box3-activities" style={{ backgroundImage: `url(${img3})` }}></div>
                    <div className="box4-activities" style={{ backgroundImage: `url(${img4})` }}></div>
                    <div className="box5-activities" style={{ backgroundImage: `url(${img5})` }}></div>
                    <div className="box6-activities"style={{ backgroundImage: `url(${img6})` }} ></div>
                    <div className="box7-activities" style={{ backgroundImage: `url(${img7})` }}> </div>
                </div>
            </div>
        );
    }
}

class TestDiv extends Component {
    render() {
        return (
            <div id="test"></div>
        );
    }
}




class Instagram extends Component {
    render() {
        return (
            <div>
                <Container />
                <TestDiv />
            </div>
        );
    }
}

export default Instagram;
