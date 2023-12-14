import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";

import Header from '../layouts/Header';
import Breadcrumbs from '../layouts/Breadcrumb';
import Footer from '../layouts/Footer';
import Content from '../sections/Contactus/Content';

const pagelocation = 'Contact'
const bannerimg = "/assets/img/bg/tenali-double-horse-contact-page-banner.png"

class Locations extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Best Quality Dal & Pulses Company in India | {pagelocation}</title>
                    <meta
                        name="Reach us today for thr best quality dals and pulses for the healthy life and boost your immunity"
                        content="#"
                    />
                </MetaTags> 
                <Header/>
                <Breadcrumbs breadcrumb={{ pagename: pagelocation,bannerimg:bannerimg }} />
                <Content/>
                <Footer footer={{ style:"ct-footer footer-dark", logo:"assets/img/tenali-double-horse-logo-135x73.png" }} />
            </Fragment>
        );
    }
}

export default Locations;