import React, { Component } from 'react';
import WOW from 'wow.js';
import 'animate.css';
import { Link } from 'react-router-dom';


class submenu extends Component {
    componentDidMount() {
        new WOW().init();
    }
    render() {
        // const currentPageName = this.props.breadcrumb.pagename;
        return (
            <div className="container-fluid bg-danger submenu-section">
                <div className="row sub-pages-menu">
                    <ul className="d-flex justify-content-between pt-2" style={{ width: "100%" }}>
                        <li className={this.props.pagename.pagename === 'About Us' ? 'active' : ''}>
                            <Link to="/about">The Journey</Link>
                        </li>
                        <li className={this.props.pagename.pagename === 'Where we are' ? 'active' : ''}>
                            <Link to="/Where-we-are">Where we are</Link>
                        </li>
                        <li className={this.props.pagename.pagename === 'Awards & Recognitions' ? 'active' : ''}>
                            <Link to="/awards-recognitions">Awards & recognitions</Link>
                        </li>
                        <li className={this.props.pagename.pagename === 'CSR-activities' ? 'active' : ''}>
                            <Link to="/csr-activities">CSR Activities</Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default submenu;
