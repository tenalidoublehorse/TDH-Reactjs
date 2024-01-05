import React, { Component } from 'react';
import Sidebar from '../../layouts/Blogsidebar'

class Sumabanner extends Component {
    render() {
        return (<div className="">
                <img src={process.env.PUBLIC_URL + "/assets/img/banner/suma-banner.png"} alt="img" className='' />
            </div>
            
        );
    }
}

export default Sumabanner;