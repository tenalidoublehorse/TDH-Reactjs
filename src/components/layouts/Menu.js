import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import navigationmenu from '../../data/navigation.json';

class Menu extends Component {
    render() {
        return (
            <ul className="navbar-nav ">
                {navigationmenu.length > 0 ? navigationmenu.slice(0,2).map((item, i) => (
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
                <li className="menu-item menu-item-has-children mega-menu-wrapper">
                    <Link to="/menu-v1">Products</Link>
                    {/* <ul className="submenu">
                        <li>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="mega-menu-item d-flex">
                                            <div className='col-lg-7'>
                                            <h5>New Product</h5>
                                            <p>
                                            Fine-textured semolina used to make traditional South Indian idlis, offering a fluffy and nutritious breakfast option
                      </p>
                                            <a href={"/menu-v1"} className="btn-custom secondary shadow-none btn-sm">Purchase</a>
                                            </div>
                                            <div className='col-lg-3'>
                                            <a href={"/menu-v1"}> <img src={process.env.PUBLIC_URL + "/assets/img/prods-sm/tenali-double-horse-idly-rava-300x300.png"} alt="pizza" /></a>
                                            </div>
                                        </div>
                                    </div>
                                   
                                    <div className="col-12 mega-menu-promotion-wrapper">
                                        <div className="row">
                                        
                                            <div className="col-3">
                                                <div className="mega-menu-promotion">
                                                    <a href={"/menu-v1"}><img src={process.env.PUBLIC_URL + "/assets/img/prods-sm/Tenali-Double-Horse-Urad-Gota-300x300.png"} alt="pizza" /></a>
                                                    <div className="mega-menu-promotion-text">
                                                        <h4><a href={"/menu-v1"}>Urad Gota</a></h4>
                                                        <span>₹165</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div className="mega-menu-promotion">
                                                    <a href={"/menu-v1"}><img src={process.env.PUBLIC_URL + "/assets/img/prods-sm/Tenali-Double-Horse-Urad-Dall-300x300.png"} alt="pizza" /></a>
                                                    <div className="mega-menu-promotion-text">
                                                        <h4><a href={"/menu-v1"}>Maharani Urad Dall </a></h4>
                                                        <span>₹143.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div className="mega-menu-promotion">
                                                    <a href={"/menu-v1"}><img src={process.env.PUBLIC_URL + "/assets/img/prods-sm/Tenali-Double-Horse-Urad-Dal-300x300.png"} alt="pizza" /></a>
                                                    <div className="mega-menu-promotion-text">
                                                        <h4><a href={"/menu-v1"}>Urad Dall</a></h4>
                                                        <span>₹149.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                           
                                            <div className="col-3">
                                                <div className="mega-menu-promotion">
                                                    <a href={"/menu-v1"}><img src={process.env.PUBLIC_URL + "/assets/img/prods-sm/Tenali-Double-Horse-Husked-Urad-Dall-300x300.png"} alt="pizza" /></a>
                                                    <div className="mega-menu-promotion-text">
                                                        <h4><a href={"/menu-v1"}>Husked Black Gram Dall</a></h4>
                                                        <span>₹143.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul> */}
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

export default Menu;