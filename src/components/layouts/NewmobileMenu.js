import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import navigationmenu from '../../data/mobilenavigation.json';
import HeaderComponent from '../../helper/Navigationhelper';

class Mobilemenu extends HeaderComponent {
    render() {
        const isMobile = window.innerWidth <= 990;

        return (
            <Fragment>
                <Link className="navbar-brand" to="/">
                    <img src={process.env.PUBLIC_URL + "/assets/img/tenali-double-horse-logo-135x73.png"} alt="logo" />
                </Link>
                <div className="aside-scroll">
                    <ul>
                        {navigationmenu.length > 0 ? navigationmenu.map((item, i) =>
                            // Exclude the "Blog" page from mobile menu
                            (isMobile && item.linkText === "Blog") ? null :
                            <li key={i} className={`menu-item ${item.child ? 'menu-item-has-children' : ''} `} onClick={this.triggerChild}>
                                {item.child ? <Link onClick={e => e.preventDefault()} to="/"> {item.linkText} </Link> : <Link to={item.link}> {item.linkText} </Link>}
                                {item.child ?
                                    <ul className={`submenu ${item.child ? 'menu-item-has-children' : ''}`}>
                                        {item.submenu.map((sub_item, j) => (
                                            <li key={j} className={`menu-item ${sub_item.child ? 'menu-item-has-children' : ''} `}>
                                                {sub_item.child ? <Link onClick={e => e.preventDefault()} to="/"> {sub_item.linkText} </Link> : <Link to={sub_item.link}> {sub_item.linkText} </Link>}
                                                {sub_item.submenu ?
                                                    <ul className="submenu">
                                                        {sub_item.submenu.map((third_item, k) => (
                                                            <li className="menu-item" key={k}><Link
                                                                to={third_item.link}>{third_item.linkText}</Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                    : null}
                                            </li>
                                        ))}
                                             {item.linkText === 'About' && isMobile && (
                                            <Fragment>
                                               
                                                <li className="menu-item">
                                                    <a href="https://phirseudaan.com/" target="_blank" rel="noopener noreferrer">CSR Initiatives</a>
                                                </li>
                                            </Fragment>
                                        )}
                                        {/* Add the "Tdh Products" and "Tdhf Products" links to the "Products" submenu */}
                                        {item.linkText === 'Products' && isMobile && (
                                            <Fragment>
                                               
                                                <li className="menu-item">
                                                    <a href="https://tdhfoodproducts.com/" target="_blank" rel="noopener noreferrer">TDHF Products</a>
                                                </li>
                                            </Fragment>
                                        )}
                                    </ul>
                                    : null
                                }
                            </li>
                        ) : null}
                    </ul>
                </div>
            </Fragment>
        );
    }
}

export default Mobilemenu;
