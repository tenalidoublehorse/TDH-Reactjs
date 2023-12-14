import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import navigationmenu from '../../data/navigation.json';

class UpdatedMenu extends Component {
    render() {
        return (
            <ul className="navbar-nav">
                {navigationmenu.length > 0 ? navigationmenu.slice(0, 3).map((item, i) => (
                    <li key={i} className={`menu-item ${item.child ? 'menu-item-has-children' : ''} `} onClick={this.triggerChild}>
                        {item.child ? <Link onClick={e => e.preventDefault()} to="/"> {item.linkText} </Link> : <Link to={item.link}> {item.linkText} </Link>}
                        {item.child ?
                            <ul className="submenu" role="menu">
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
                )) : null}
               <li className="menu-item menu-item-has-children mega-menu-wrapper" >
                    <Link>Products</Link>
                    <ul className="submenu" >
                        <li className='d-flex' >
                            <div className="container-small"  >
                                <div className="row">
                                    <div className="col-lg-12 product-hover-sec"  > 
                                    <h5 className='text-center'>Explore Our Products Range </h5>
                                        <div className="mega-menu-item d-flex justify-content-center align-items-center"  >
                                            <div className='col-lg-6 d-flex flex-column justify-content-center align-items-center'>
                                           
                                            <Link to="/tenali-double-horse-products"> <img src={process.env.PUBLIC_URL + "/assets/img/prods/tenali-double-horse-icon.png"}   alt="pizza" /></Link>
                                            <Link to="/tenali-double-horse-products"><a  className="btn-custom  shadow-none btn-sm">View More</a></Link>
                                            </div>
                                            <div className='col-lg-6 d-flex flex-column justify-content-center align-items-center'>
                                            <a href={"https://tdhfoodproducts.com/shop/"} target='_blank'> <img src={process.env.PUBLIC_URL + "/assets/img/prods/tdh-icon-instant-foods.png"}  alt="pizza" /></a>
                                            <a href={"https://tdhfoodproducts.com/shop/"} target='_blank'><button className="btn-custom  shadow-none btn-sm">View More</button></a>
                                            </div>
                                        </div>
                                    </div>
                                   
                                   
                                </div>
                            </div>
                          
                           
                        </li>
                    </ul>
                </li>
                {navigationmenu.length > 0 ? navigationmenu.slice(4, 10).map((item, i) => (
                    <li key={i} className={`menu-item ${item.child ? 'menu-item-has-children' : ''} `} onClick={this.triggerChild}>
                        {item.child ? <Link onClick={e => e.preventDefault()} to="/"> {item.linkText} </Link> : <Link to={item.link}> {item.linkText} </Link>}
                        {item.child ?
                            <ul className="sub-menu" role="menu">
                                {item.submenu.map((sub_item, i) => (
                                    <li key={i} className={`menu-item ${sub_item.child ? 'menu-item-has-children' : ''} `}>
                                        {sub_item.child ? <Link onClick={e => e.preventDefault()} to="/"> {sub_item.linkText} </Link> : <Link to={sub_item.link}> {sub_item.linkText} </Link>}
                                        {sub_item.submenu ?
                                            <ul className="sub-menu">
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
                )) : null}
            </ul>

        );
    }
}

export default UpdatedMenu;