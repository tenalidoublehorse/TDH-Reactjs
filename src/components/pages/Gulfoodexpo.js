import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
// import Header from '../layouts/Headerinner';
import Footer from '../layouts/Footer';
import Content from '../sections/Gulfoodexpo/Content';

const pagelocation = 'Home';

class Gulfoodexpo extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Welcome to Tenali Double Horse at Gulfood Expo 2024  || Tenali Double Horse| {pagelocation}</title>
                    <meta
                        name="Welcome to Tenali Double Horse at Gulfood Expo 2024"
                        content="#"
                    />
                </MetaTags> 
                <Header/>
            
                <Content/>
                <Footer className="footer-with-border"   footer={{ style: "ct-footer", logo: "assets/img/footer-bg-image.png"}} />
            </Fragment>
        );
    }
}

export default Gulfoodexpo;