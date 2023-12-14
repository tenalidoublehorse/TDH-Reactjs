import React, { Component, Fragment } from 'react';



import Feedback from '../home/Feedback';
import Messenger from '../home/Messenger';
import Distrubutions from './Distrubutions';


class Content extends Component {
    render() {
        return (
            <Fragment>
              
           <Distrubutions/>
               <Feedback/>
               <Messenger/>
            
            </Fragment>
        );
    }
}

export default Content;