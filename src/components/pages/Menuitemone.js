import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
// import Header from '../layouts/Headerinner';
import Header from '../layouts/Header';
import Breadcrumbs from '../layouts/Breadcrumb';
import Footer from '../layouts/Footer';
import Content from '../sections/menu-item-v1/Content';

const pagelocation = 'Tenali Double Horse'
const bannerimg = "/assets/img/banner/contact-header-banner.jpeg"
class Menuitemone extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Tenali Double Horse Products - Authentic Indian Ingredients and Spices | {pagelocation}</title>
                    <meta
                        name="Discover the excellence of Tenali Double Horse's Urad Gota. Shop online for the finest quality 1kg sourced from the heart of India. Elevate your culinary experience with our authentic Indian products"
                        content="#"
                    />
                </MetaTags> 
                <Header/>
                <Breadcrumbs breadcrumb={{ pagename: pagelocation,bannerimg:bannerimg }} />
                <Content productId={this.props.match.params.id}/>
                <Footer footer={{ style:"ct-footer footer-dark", logo:"assets/img/transparent-logo.png" }} />
            </Fragment>
        );
    }
}

export default Menuitemone;