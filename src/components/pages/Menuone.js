import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
// import Header from '../layouts/Headertwo';
import Header from '../layouts/Header';
// import Header from '../layouts/Headerinner';


import Breadcrumbs from '../layouts/ProductsBreadcrumbs';
import Footer from '../layouts/Footer';
import Content from '../sections/menu-v1/Content';

const pagelocation = 'Tenali Double Horse'
const bannerimg = "/assets/img/bg/products.png"

class Menuone extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Buy Dals and Pulses Online in India || Tenali Double Horse| {pagelocation}</title>
                    <meta
                        name="We are the Online finest dals and pulses supplier across the india such as Chana dal, Moong dal, Idly Rava etc."
                        content="#"
                    />
                </MetaTags> 
                <Header/>
                <Breadcrumbs breadcrumb={{ pagename: pagelocation,bannerimg:bannerimg }} />
                <Content/>
                <Footer footer={{ style:"ct-footer footer-dark", logo:"assets/img/tenali-double-horse-logo-250x73.png" }} />
            </Fragment>
        );
    }
}

export default Menuone;