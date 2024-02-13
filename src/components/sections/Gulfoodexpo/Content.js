import React, { Component, Fragment } from 'react';
import Banner from '../home-v2/Gulfoodexpobanner';
// import Aboutcompany from '../home/Aboutcompany';
import Sumabanner from "./Sumabanner"
import TdhProducts from "./TdhProducts"
import ConnectForm from "./ConnectForm"
import Abouindusfood from "./Abouindusfood"

const pagelocation = 'indus foods'



class Content extends Component {
    render() {
        return (
            <Fragment>
                <Banner />
                <Abouindusfood/>
                <ConnectForm/>
                <TdhProducts />
                <Sumabanner />
            
                {/* <Feedback/> */}
            </Fragment>
        );
    }
}

export default Content;