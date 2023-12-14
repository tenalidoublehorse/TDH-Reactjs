import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductsBreadcrumb extends Component {
    render() {
        return (
            <div className="sub-header-breadcrumbs " style={{ backgroundImage: `url(${process.env.PUBLIC_URL}${this.props.breadcrumb.bannerimg})` }}>
                <div className="container">
                    <div className="subheader-inner">
                        <h1 className='text-light  breadcrumb-mobile'>{this.props.breadcrumb.pagename}</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item  breadcrumb-mobile"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item active " aria-current="page">{this.props.breadcrumb.pagename}</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductsBreadcrumb;