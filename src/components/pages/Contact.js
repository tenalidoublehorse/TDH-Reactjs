import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Content from '../sections/contact/Content';
import Breadcrumbs from "../layouts/Breadcrumb"

const pagelocation = 'USA Outlets'
const bannerimg = "/assets/img/banner/tenali-double-horse-usa-top-banner.png"

class Contact extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Tenali Double Horse USA Shops - Authentic Indian Groceries Near You | {pagelocation}</title>
                    <meta
                        name="Discover Tenali Double Horse's USA shops near you and experience the convenience of purchasing authentic Indian groceries and spices. Explore our locations and bring the flavors of India closer to home"
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

export default Contact;