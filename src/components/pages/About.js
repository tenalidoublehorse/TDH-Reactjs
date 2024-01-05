import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
// import Header from '../layouts/Headerinner';
// import Header from '../layouts/Headerinner';
import Header from '../layouts/Header';
import Breadcrumbs from '../layouts/Breadcrumb';
import Footer from '../layouts/Footer';
import Content from '../sections/about/Content';
import Submenu from '../layouts/submenu';

const bannerimg = "/assets/img/banner/About-Us-page-Top-banner-2.png"
const pagelocation = 'The Journey'

class About extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Urad Dal Wholesale Supplier and Manufacturers in India || Tenali Double Horse | {pagelocation}</title>
                    <meta
                        name="At Tenali Double Horse, our journey began in 2005 with a vision to bring excellence and trust to every household in India"
                        content="#"
                    />
                </MetaTags> 
                <Header/>
                <Breadcrumbs breadcrumb={{ pagename: pagelocation,bannerimg:bannerimg }} />
                <Submenu pagename={{pagename: pagelocation}}/>
                <Content />
                <Footer footer={{ style:"ct-footer footer-dark", logo:"assets/img/tenali-double-horse-logo-135x73.png" }} />
            </Fragment>
        );
    }
} 

export default About;