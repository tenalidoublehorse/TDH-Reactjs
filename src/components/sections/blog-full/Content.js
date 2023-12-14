import React, { Component , Fragment} from 'react';
import Ideabehind from './Ideabehind';
import Founder from './Founder';
import Newsletter from '../home-v2/Newsletter';
import Meetourteam from './Meetourteam';
import Greatplacetowork from './Greatplacetowork';
class Content extends Component {
    render() {
        return (
            <Fragment>
                <Ideabehind  style={{ marginBottom: 0 }} />
                <Founder/>
             <Meetourteam/>
                
                <Greatplacetowork/>
                <Newsletter/>
            </Fragment>
        );
    }
}

export default Content;