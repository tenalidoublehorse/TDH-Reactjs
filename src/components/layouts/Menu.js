import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import navigationmenu from '../../data/navigation.json';

class Menu extends Component {
    render() {
        return (
            <ul className="navbar-nav">
                {/* Render the first section of the menu (sliced from index 0 to 2) */}
                {navigationmenu.length > 0 ? navigationmenu.slice(0, 3).map((item, i) => (
                    <li key={i} className={`menu-item ${item.child ? 'menu-item-has-children' : ''} `} onClick={this.triggerChild}>
                        {item.child ? <Link onClick={e => e.preventDefault()} to="/"> {item.linkText} </Link> : <Link to={item.link}> {item.linkText} </Link>}
                        {/* Render submenu if exists */}
                        {item.child ?
                            <ul className="submenu" role="menu">
                                {item.submenu.map((sub_item, i) => (
                                    <li key={i} className={`menu-item ${sub_item.child ? 'menu-item-has-children' : ''} `}>
                                        {sub_item.child ? <Link onClick={e => e.preventDefault()} to="/"> {sub_item.linkText} </Link> : <Link to={sub_item.link}> {sub_item.linkText} </Link>}
                                        {/* Render third level submenu if exists */}
                                        {sub_item.submenu ?
                                            <ul className="submenu">
                                                {sub_item.submenu.map((third_item, i) => (
                                                    <li className="menu-item" key={i}>
                                                        <Link to={third_item.link}>{third_item.linkText}</Link>
                                                    </li>
                                                ))}
                                            </ul> : null}
                                    </li>
                                ))}
                                {item.linkText === 'Products' ? (
                                                    <Fragment>
                                                        <li className="menu-item">
                                                            {/* <button>tdhf</button> */}
                                                            <a href="https://tdhfoodproducts.com/" target="_blank" rel="noopener noreferrer">TDH Rishika</a>
                                                        </li>
                                                    </Fragment>
                                                ) : null}
                            </ul>
                            : null
                        }
                    </li>
                )) : null}

                {/* Render the second section of the menu (sliced from index 4 to 9) */}
                {navigationmenu.length > 0 ? navigationmenu.slice(4, 10).map((item, i) => (
                    <li key={i} className={`menu-item ${item.child ? 'menu-item-has-children' : ''} `} onClick={this.triggerChild}>
                        {item.child ? <Link onClick={e => e.preventDefault()} to="/"> {item.linkText} </Link> : <Link to={item.link}> {item.linkText} </Link>}
                        {/* Render submenu if exists */}
                        {item.child ?
                            <ul className="sub-menu" role="menu">
                                {item.submenu.map((sub_item, i) => (
                                    <li key={i} className={`menu-item ${sub_item.child ? 'menu-item-has-children' : ''} `}>
                                        {sub_item.child ? <Link onClick={e => e.preventDefault()} to="/"> {sub_item.linkText} </Link> : <Link to={sub_item.link}> {sub_item.linkText} </Link>}
                                        {/* Render third level submenu if exists */}
                                        {sub_item.submenu ?
                                            <ul className="sub-menu">
                                                {sub_item.submenu.map((third_item, i) => (
                                                    <li className="menu-item" key={i}><Link to={third_item.link}>{third_item.linkText}</Link></li>
                                                ))}
                                                {/* Special handling for 'TDHF' menu item */}
                                                
                                            </ul> : null}
                                    </li>
                                ))}
                            </ul>
                            : null
                        }
                    </li>
                )) : null}
            </ul>
        );
    }
}

export default Menu;
