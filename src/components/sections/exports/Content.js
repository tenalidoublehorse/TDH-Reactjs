import React, { Component, Fragment } from 'react';


import Enquires from './Enquires';

import Feedback from '../home/Feedback';
import Messenger from '../home/Messenger';


class Content extends Component {
    render() {
        return (
            <Fragment>
              
               <Enquires/>
               <Feedback/>
               <Messenger/>
            
            </Fragment>
        );
    }
}

export default Content;