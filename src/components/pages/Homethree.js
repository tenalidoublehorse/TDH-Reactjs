import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Content from '../sections/home-v3/Content';
import Breadcrumbs from '../layouts/Breadcrumb';


const pagelocation = 'News Events'
const bannerimg = "/assets/img/banner/contact-header-banner.png"

class Homethree extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Premium Urad Dal & Pulses in Andhra & Telangana| {pagelocation}</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags> 
                <Header/>
                <Breadcrumbs breadcrumb={{ pagename: pagelocation,bannerimg:bannerimg }} />
                <Content/>
                <Footer footer={{ style:"ct-footer footer-dark", logo:"assets/img/logo-light.png" }} />
            </Fragment>
        );
    }
}

export default Homethree;