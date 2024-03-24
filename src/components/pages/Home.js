import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
// import Header from '../layouts/Headerinner';
import Footer from '../layouts/Footer';
import Content from '../sections/home/Content';
// import Content from '../sections/Indusfoods/Content';
// import Campaign  from '../sections/home/Camapaing';
import Popup from '../sections/home-v3/Lazyload'

const pagelocation = 'Home';

class Home extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Quality Urad dal manufacture in Andhra & Telanagana, India || Tenali Double Horse| {pagelocation}</title>
                    <meta
                        name="We, Tenali Double Horse are the Top quality Urad dal manufacturing & suppliers in andhra & telangana, India at affordable prices"
                        content="#"
                    />
                </MetaTags> 
                <Header/>
                <Popup/>
            
                <Content/>
                <Footer className="footer-with-border"   footer={{ style: "ct-footer", logo: "assets/img/footer-bg-image.png"}} />
                {/* <Footer footer={{ style:"ct-footer footer-dark", logo:"assets/img/transparent-logo.png" }} /> */}
            </Fragment>
        );
    }
}

export default Home;