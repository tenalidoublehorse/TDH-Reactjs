import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Headerinner';
import Footer from '../layouts/Footer';
import Content from '../sections/TermsOfUse/Content';
import Breadcrumbs from '../layouts/Breadcrumb';

const pagelocation = 'Terms-and-conditions'
const bannerimg = "/assets/img/banner/contact-header-banner.jpeg"

class Termsconditions extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Tenali  doublehorse | {pagelocation}</title>
                    <meta name="description" content="#" />
                </MetaTags> 
                <Header/>
                <Breadcrumbs breadcrumb={{ pagename: pagelocation,bannerimg:bannerimg }} />
                <Content/>
                <Footer footer={{ style:"ct-footer footer-dark", logo:"assets/img/tenali-double-horse-logo-250x73.png" }} />
            </Fragment>
        );
    }
}

export default Termsconditions;