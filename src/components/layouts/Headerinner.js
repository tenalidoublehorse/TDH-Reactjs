import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import HeaderComponent from '../../helper/Navigationhelper';
import Cartlist from '../layouts/Cartlist';
import Search from '../layouts/Search';
import Mobilemenu from '../layouts/Mobilemenu';
import Newmenu from './Newmenu';
import classNames from 'classnames';
// import cartitem from '../../data/cartlist.json';
// import { StickyContainer, Sticky } from 'react-sticky';



class Headerinner extends HeaderComponent {
    render() {
        return (
            <Fragment>
                {/* Cart Sidebar Start */}
                <div className="cart-sidebar-wrapper">
                    <aside className={classNames("cart-sidebar", { "cart-open": this.state.cartmethod })}>
                        <div className="cart-sidebar-header">
                            <h3>Your Cart</h3>
                            <div className="close-btn cart-trigger close-dark" onClick={this.cartToggle}>
                                <span />
                                <span />
                            </div>
                        </div>
                        <Cartlist />
                    </aside>
                    <div className="cart-sidebar-overlay cart-trigger" onClick={this.cartToggle} />
                </div>
                {/* Cart Sidebar End */}
                {/* Search Form Start*/}
                <div className={classNames("search-form-wrapper", { "open": this.state.searchmethod })}>
                    <div className="search-trigger close-btn" onClick={this.searchToggle}>
                        <span />
                        <span />
                    </div>
                    <Search />
                </div>
                {/* Search Form End*/}
                {/* Aside (Mobile Navigation) */}
                <aside className={classNames("main-aside", { "open": this.state.navmethod })}>
                    <Mobilemenu />
                </aside>
                <div className="aside-overlay aside-trigger" onClick={this.toggleNav} />
                {/* Header Start */}
                
                <header className="main-header header-1 header-absolute header-light">
                   
                    <div className="container">
                        <nav className="navbar">
                            {/* Logo */}
                            <Link className="navbar-brand" to="/"> <img src={process.env.PUBLIC_URL + "/assets/img/tenali-double-horse-logo-250x73.png"} alt="logo" /> </Link>
                            {/* Menu */}
                            <Newmenu />
                            <div className="header-controls">
                                <ul className="header-controls-inner">
                                <div className="floating-container">
                                <div className="floating-button share-icon"> <img src={process.env.PUBLIC_URL + "/assets/img/header/network-connection.png"} alt="topicon" /></div>
                                <div className="element-container">
                                                <span className="float-element tooltip-left" >
                                                <a target="_blank" rel="noopener noreferrer" href={"https://www.facebook.com/tenalidoublehorse"} >
                                        <i class="fab fa-facebook-f"></i>
                                        </a>
                                                    </span>
                                                <span className="float-element">
                                        <a target="_blank" rel="noopener noreferrer" href={"https://twitter.com/i/flow/login?redirect_after_login=%2Ftnldoublehorse"} >
                                        <i class="fab fa-twitter"></i>
                                        </a>
                                        </span>
                                                <span className="float-element">
                                                <a target="_blank" rel="noopener noreferrer" href={"https://www.instagram.com/tenalidoublehorse/"} >
                                        <i class="fab fa-instagram"></i>
                                        </a>
                                                    </span>

                                                <span className="float-element">
                                                <a target="_blank" rel="noopener noreferrer" href={"https://www.linkedin.com/company/tenalidoublehorse/?originalSubdomain=in"} >
                                        <i class="fab fa-linkedin-in"></i>
                                        </a>
                                                    </span>

                                                <span className="float-element">
                                                <a target="_blank" rel="noopener noreferrer" href={"https://www.youtube.com/c/TenaliDoubleHorse"} >
                                        <i class="fab fa-youtube"></i>
                                        </a>
                                                    </span>
                                </div>
                                </div>
                                 
                                </ul>
                                {/* Toggler */}
                                <div className="aside-toggler aside-trigger" onClick={this.toggleNav}>
                                    <span />
                                    <span />
                                    <span />
                                </div>
                            </div>
                        </nav>
                    </div>
                </header>
               

            </Fragment>
        );
    }
}

export default Headerinner;