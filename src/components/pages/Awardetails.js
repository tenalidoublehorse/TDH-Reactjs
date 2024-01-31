import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";

import Header from '../layouts/Header';
import Breadcrumbs from '../layouts/Breadcrumblack';
import Footer from '../layouts/Footer';
import Content from '../sections/awardetails/content';

const pagelocation = 'Awards & Recognitions'
const bannerimg = "/assets/img/banner/tdh-awards-recoginations.png"

class Locations extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Tenali Double Horse Awards & Recognitions| {pagelocation}</title>
                    <meta
                        name="Our unwavering dedication to quality and authenticity has earned us prestigious honors, validating our commitment to delivering exceptional agricultural products"
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