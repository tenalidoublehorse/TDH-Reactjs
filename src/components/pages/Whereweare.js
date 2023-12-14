import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
// import Header from '../layouts/Headerinner';
import Header from '../layouts/Header';
import Breadcrumbs from '../layouts/Breadcrumb';
import Footer from '../layouts/Footer';
import Content from '../sections/blog-grid/Content';
import Submenu from '../layouts/submenu';
const pagelocation = 'Where we are'
const bannerimg = "/assets/img/banner/contact-header-banner.png"

class Bloggrid extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Authentic Indian Groceries | Tenali Double Horse USA |Tenali Double Horse UAE| {pagelocation}</title>
                    <meta
                        name="We are the premium quality supplier of Urad dal and pulses in Andhra Pradesh & Telangana"
                        content="#"
                    />
                </MetaTags> 
                <Header/>
                <Breadcrumbs breadcrumb={{ pagename: pagelocation,bannerimg:bannerimg }} />
                <Submenu pagename={{pagename: pagelocation}}/>
                <Content tagId={this.props.match.params.tagId}/>
             
                <Footer footer={{ style:"ct-footer footer-dark", logo:"assets/img/transparent-logo.png" }} />
            </Fragment>
        );
    }
}

export default Bloggrid;