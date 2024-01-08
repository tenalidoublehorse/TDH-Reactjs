import React, { Component, Fragment } from 'react';
import Banner from '../home-v2/Indusbanner';
// import Aboutcompany from '../home/Aboutcompany';
import Sumabanner from "./Sumabanner"
import Productsbanner from "./Productsbanner"
import Productcards from '../../sections/blog-grid/Productcards'
import Tdhfoods from "./Tdhfoods"
import AboutTdhf from './AboutTdhf';
import TdhProducts from "./TdhProducts"
import ConnectForm from "./ConnectForm"
import Abouindusfood from "./Abouindusfood"
import Abouttdh from "./Abouttdh"
import Indusimageslider from "./Indusimageslider"

const pagelocation = 'indus foods'



class Content extends Component {
    render() {
        return (
            <Fragment>
                <Banner />
                <Abouindusfood/>
                <ConnectForm/>
                <Indusimageslider/>
                <Sumabanner />
                <Abouttdh />
                <TdhProducts />
                <Productsbanner />
                <AboutTdhf/>
                <Tdhfoods/>
            
                {/* <Feedback/> */}
            </Fragment>
        );
    }
}

export default Content;