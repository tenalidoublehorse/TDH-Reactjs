import React, { Component, Fragment } from 'react';
import Products from '../home/Products';
import Testimonials from '../home/Testimonials';
// import Banner from '../home/Banner';
import Banner  from '../home/Banner-demo';
import Categories from './Categories';
import Newsletter from './Newsletter';
import Offer from './Offer';
import Paragraph  from './Paragraph';
import Process from './Process';
import Partners from './Partners';
import Benefits from './Benefits';
import Greatplacetowork from '../blog-full/Greatplacetowork';
import Lazyload from '../home-v3/Lazyload'
// import MyComponent from './MyComponent';



class Content extends Component {
    render() {
        return (
            <Fragment>
                <Banner />
                <div className='activites mb-4'>
                    <h2 className='title text-center'>Notable Activities</h2>
                    <div className='social-media-actives'>
                        <img src={process.env.PUBLIC_URL + "/assets/img/misc/aha.png"} className="aha" alt="aha"/>
                        <img src={process.env.PUBLIC_URL + "/assets/img/misc/double-horse.png"} className="aha" alt="aha"/>
                        <img src={process.env.PUBLIC_URL + "/assets/img/misc/amma-kuchi.png"} className="aha" alt="aha"/>   
                    </div>
                </div>
                
                <Offer />
                <Process/>
                <Categories className="mb-2" />
                <Paragraph/>
                
                {/* <div className="section pt-0 products-section">
                    <Products />
                </div> */}
                
                <Benefits/>
                <Testimonials/>
                {/* <MyComponent/> */}
                {/* <Partners/> */}
                <Lazyload/>
                <Newsletter />
                <Greatplacetowork/>
            </Fragment>
        );
    }
}

export default Content;