import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
// import Header from '../layouts/Headerinner';
import Header from '../layouts/Header';
import Breadcrumbs from '../layouts/Breadcrumb';
import Footer from '../layouts/Footer';
import Content from '../sections/menu-item-v2/Content';

const pagelocation = 'TDHFoods'
const bannerimg = "/assets/img/banner/contact-header-banner.jpeg"

class Menuitemtwo extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>tenali double horse | {pagelocation}</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags> 
                <Header/>
                <Breadcrumbs breadcrumb={{ pagename: pagelocation,bannerimg:bannerimg }} />
                <Content productId={this.props.match.params.id}/>
                <Footer footer={{ style:"ct-footer footer-dark", logo:"assets/img/logo-light.png" }} />
            </Fragment>
        );
    }
}

export default Menuitemtwo;