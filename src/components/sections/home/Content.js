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

import Latestproducts from './Latestupdate';
const pagelocation = 'home'



class Content extends Component {
    render() {
        return (
            <Fragment>
                <Banner />
                <Aboutcompany pagename={{pagename: pagelocation}}/>
                <Process />
                <Productcards />
                <Nutrients/>
             
                <Latestproducts/>
               
                <Camapaing/>
               
                <Benefits/>
              

                <Menuitems />

               
                <Stats />

                <Paragraph />
                
                <Reviews/>

                <Socialmedia />
                <Feedback/>
               
               
              
            </Fragment>
        );
    }
}

export default Content;