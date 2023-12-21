import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Breadcrumb extends Component {
    render() {
      
        return (
            <div className="sub-header-breadcrumbs  " style={{ backgroundImage: `url(${process.env.PUBLIC_URL}${this.props.breadcrumb.bannerimg})`, height:"auto" }}>
                <div className="container">
                    <div className="subheader-inner">
                        <h1 className='text-black breadcrumb-mobile' style={{fontWeight:"600"}}>{this.props.breadcrumb.pagename}</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb text-black">
                                <li className="breadcrumb-item "><Link className='dark-colour' to="/">Home</Link></li>
                                <li className="breadcrumb-item active dark-colour " aria-current="page">{this.props.breadcrumb.pagename}</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}

export default Breadcrumb;