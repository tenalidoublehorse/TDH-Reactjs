import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Breadcrumb extends Component {
    render() {
      
        return (
            <div className="sub-header-breadcrumbs " style={{ backgroundImage: `url(${process.env.PUBLIC_URL}${this.props.breadcrumb.bannerimg})`, height:"auto" }}>
                <div className="container">
                    <div className="subheader-inner">
                        <h1 className='text-light breadcrumb-mobile'>{this.props.breadcrumb.pagename}</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item "><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item active " aria-current="page">{this.props.breadcrumb.pagename}</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}

export default Breadcrumb;