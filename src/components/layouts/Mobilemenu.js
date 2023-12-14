import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import navigationmenu from '../../data/navigation.json';
import HeaderComponent from '../../helper/Navigationhelper';

class Mobilemenu extends HeaderComponent {
    render() {
        const isMobile = window.innerWidth <= 767;

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
                                        {item.submenu.map((sub_item, i) => (
                                            <li key={i} className={`menu-item ${sub_item.child ? 'menu-item-has-children' : ''} `}>
                                                {sub_item.child ? <Link onClick={e => e.preventDefault()} to="/"> {sub_item.linkText} </Link> : <Link to={sub_item.link}> {sub_item.linkText} </Link>}
                                                {sub_item.submenu ?
                                                    <ul className="submenu">
                                                        {sub_item.submenu.map((third_item, i) => (
                                                            <li className="menu-item" key={i}><Link
                                                                to={third_item.link}>{third_item.linkText}</Link>
                                                            </li>
                                                        ))}
                                                    </ul> : null}
                                            </li>
                                        ))}
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