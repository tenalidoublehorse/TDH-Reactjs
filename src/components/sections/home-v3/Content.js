import React, { Component, Fragment } from 'react';

// import PortfolioV1 from './PortfolioV1';
import PortfolioV2 from './Profile'

import Feedback from '../home/Feedback';
import Messenger from '../home/Messenger';
// import AppleFactsSlider from '../home/Newproduct';

class Content extends Component {
    render() {
        return (
            <Fragment>
              
               <PortfolioV2/>
               <Feedback/>
               <Messenger/>
               {/* <AppleFactsSlider/> */}
            </Fragment>
        );
    }
}

export default Content;