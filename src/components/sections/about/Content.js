import React, { Component, Fragment } from 'react';
import Tdhabout from './Tdhabout'
import Stats from '../home/Stats';
import Rules from './Rules';
import Greatplacetowork from '../blog-full/Greatplacetowork'
import Tdhgroup from './Tdhgroup';
import Feedback from '../home/Feedback';
import Messenger from '../home/Messenger';
import Overview from "../about/Overview";
import Tdhf from './Tdhf';
import Aboutcompany from '../home/Aboutcompany';
import Grateplace from '../home/Grateplace';
const pagelocation = 'AboutUs'

class Content extends Component {
    render() {
        return (
            <Fragment>
               <Tdhabout/>
               <Rules/>
               <Aboutcompany pagename={{pagename: pagelocation}}/>
               <Tdhf/>
               {/* <Tdhgroup/> */}
               {/* <Overview/> */}
               {/* <HorizontalTimeline/> */}
               {/* <TimelineComponent/> */}
               {/* <Greatplacetowork/> */}
                <Stats/>
                <Grateplace/>
                <Feedback/>
                <Messenger/>
            </Fragment>
        );
    }
}

export default Content;