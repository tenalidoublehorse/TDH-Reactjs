import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import Loader from '../../layouts/Loader';
import classNames from 'classnames';
import Messenger from '../home/Messenger';
import Feedback from '../home/Feedback';
import Masonry from 'react-masonry-component';
import BlogPost from './Csrcard';

class Content extends Component {
    render() {
        return (
            <Fragment>
            
                <BlogPost/>
                <Feedback/>
                <Messenger/>
                
              
            </Fragment>
        );
    }
}

export default Content;