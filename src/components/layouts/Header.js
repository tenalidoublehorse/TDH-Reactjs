import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import HeaderComponent from '../../helper/Navigationhelper';
// import Cartlist from '../layouts/Cartlist';
import Search from '../layouts/Search';
import Mobilemenu from '../layouts/NewmobileMenu';
import Newmenu from './Newmenu';
import classNames from 'classnames';
// import cartitem from '../../data/cartlist.json';

class Header extends HeaderComponent {
    constructor(props) {
        super(props);
        this.state = {
            isSticky: false,
            cartmethod: false,
            isScrolled: false,
            searchmethod: false,
            navmethod: false,
        };
    }

    handleScroll = () => {
        const headerHeight = 80; // You can adjust this value based on your header's height
        const isSticky = window.scrollY > headerHeight;
        // this.setState({ isSticky });
        const isScrolled = window.scrollY > 0; // Check if the user has scrolled (added)
        this.setState({ isSticky, isScrolled })
    };

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    cartToggle = () => {
        this.setState((prevState) => ({
            cartmethod: !prevState.cartmethod,
        }));
    };

    searchToggle = () => {
        this.setState((prevState) => ({
            searchmethod: !prevState.searchmethod,
        }));
    };

    toggleNav = () => {
        this.setState((prevState) => ({
            navmethod: !prevState.navmethod,
        }));
    };
    render() {
        const { isSticky, isScrolled } = this.state;
        const headerClass = classNames('main-header', 'header-1','header-absolute', {
            'header-sticky': isSticky || isScrolled, // Add 'isScrolled' to update the header color initially
        });
        return (
            <Fragment>
               
                <div className={classNames("search-form-wrapper", { "open": this.state.searchmethod })}>
                    <div className="search-trigger close-btn" onClick={this.searchToggle}>
                        <span />
                        <span />
                    </div>
                    <Search />
                </div>
             
                {/* Aside (Mobile Navigation) */}
                <aside className={classNames("main-aside", { "open": this.state.navmethod })}>
                    <Mobilemenu />
                </aside>
                <div className="aside-overlay aside-trigger" onClick={this.toggleNav} />
                {/* Header Start */}
                <header className={headerClass} style={{ backgroundColor: isSticky ? 'white' : 'transparent',boxShadow: isSticky ? '0px 4px 6px rgba(0, 0, 0, 0.1)':'0px 4px 6px rgba(0, 0, 0, 0)'}}>
                    
                    <div className="container">
                        <nav className="navbar">
                            {/* Logo */}
                            <Link className="navbar-brand" to="/">
                                <img src={process.env.PUBLIC_URL + "/assets/img/tenali-double-horse-logo-250x73.png"} alt="logo" />
                            </Link>
                            {/* Menu */}
                            <Newmenu/>
                            <div className="header-controls">
                                <ul className="header-controls-inner">
                                <div className="floating-container">
                                <div className="floating-button share-icon"> <img src={process.env.PUBLIC_URL + "/assets/img/header/network-connection.png"} alt="topicon" /></div>
                                <div className="element-container">
                               <span className="float-element tooltip-left" > <a href="https://www.facebook.com/tenalidoublehorse" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook-f"></i></a></span>
                                <span className="float-element"><a href="https://twitter.com/tnldoublehorse" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a></span>
                                 <span className="float-element"><a href="https://www.instagram.com/tenalidoublehorse/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a></span>
                                 <span className="float-element"><a href="https://www.linkedin.com/company/tenalidoublehorse/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin-in"></i></a></span>
                                
                                <span className="float-element"><a href="https://www.youtube.com/c/TenaliDoubleHorse" target="_blank" rel="noopener noreferrer"><i class="fab fa-youtube"></i></a></span>
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
                {/* Header End */}
            </Fragment>
        );
    }
}

export default Header;