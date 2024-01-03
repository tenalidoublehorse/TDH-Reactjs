import React, { Component, Fragment } from 'react';
import Socialmedia from './Socialmedia';
// import Banner from '../home-v3/Banner';
// import Banner from '../home/Banner';
import Banner from '../home-v2/Banner';
// import Banner  from '../home/Banner-demo';
import Productcards from '../blog-grid/Productcards';
import Stats from './Stats';
// import CubeSlider from "../home-v2/Cubeslider"
import Menuitems from '../home-v2/Categories';
import Aboutcompany from './Aboutcompany';
import Process from '../home-v2/Process';
import Lazyload from '../home-v3/Lazyload';

import Camapaing  from './Camapaing';
import Paragraph from '../home-v2/Paragraph';
import Reviews from './Reviews';
import Feedback from './Feedback';

import Nutrients from './Nutrients'
import Benefits from '../home-v2/Benefits';
import Cockingtips from '../home-v2/Cockingtips';

import Latestproducts from './Latestupdate';
import Mainproductsslider from './Mainproductsslider';
import Ammammas from './Ammammas';
import Tdhexplore from "./Tdhexplore"
const pagelocation = 'home'



class Content extends Component {
    render() {
        return (
            <Fragment>
                <Banner />
                <Aboutcompany pagename={{pagename: pagelocation}}/>
                <Process />
                <Productcards />
                {/* <Nutrients/> ammas dosa batter */}
                {/* <Lazyload/> */}
                {/* <Latestproducts/> */}
                {/* <Mainproductsslider/> */}
                {/* <Camapaing/> */}
            
                {/* <Menuitems /> */}
                <Stats />
                <Tdhexplore/>
                {/* <Paragraph /> */}
                <Ammammas/>
                {/* <Cockingtips/> */}
                <Benefits/>
                <Reviews/>
                {/* <Socialmedia /> */}
                <Feedback/>
            </Fragment>
        );
    }
}

export default Content;