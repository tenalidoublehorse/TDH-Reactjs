import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
// import Header from '../layouts/Headerinner';
import Footer from '../layouts/Footer';
import Content from '../sections/Indusfoods/Content';

const pagelocation = 'Home';

class Indusfoods extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>indus food source process collaborate || Tenali Double Horse| {pagelocation}</title>
                    <meta
                        name="Welcome to a world of unique taste with tenali double horse we would be delighted by your presences"
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

export default Indusfoods;