import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Content from '../sections/home-v2/Content';

const pagelocation = 'Homepage'

class Hometwo extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Tenali  doublehorse | {pagelocation}</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags>
                <div style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/bg/Tenali-Double-Horse-Background-image.jpg)" }}>
                <Header/>
                    <Content />
                    <Footer className="footer-with-border"   footer={{ style: "ct-footer", logo: "assets/img/tenali-double-horse-logo-250x73.png", backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/footer/footer-bg-image.png)" }} />
                </div>
            </Fragment>
        );
    }
}

export default Hometwo;