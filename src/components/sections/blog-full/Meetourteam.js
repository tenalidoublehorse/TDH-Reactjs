import React, { Component } from 'react';


class Meetourteam extends Component {
    render() {
        return (
            <div class="container mb-5 pb-3">
                 <h5 className="custom-primary text-center">Meet the Masterminds</h5>
                                <h2 className="title text-center">Shaping Our Vision</h2>
    
    <div class="row">
        <div class="col-md-4">
            <div class="box">
                <div class="our-services settings">
                    <div class="icon"> <img src={process.env.PUBLIC_URL + "/assets/img/bg/women-avatar.png" } alt="women" style={{borderRadius:'50%'}}/>  </div>
                    <h4>Lailtha</h4>
                    <p className='justify-content'>Tenali Double Horse team is committed to provide the highest quality products and services to our customers to satisfy their needs and expectations of quality, reliability, and timely delivery. Here is some more information about us.</p>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="box">
                <div class="our-services speedup">
                    <div class="icon" > <img src={process.env.PUBLIC_URL + "/assets/img/bg/men-avatar.png"} alt="men" style={{borderRadius:'50%'}}/> </div>
                    <h4>Yajurved</h4>
                    <p className='justify-content'>The managing directors Shyam Prasad Garu, Yajurved Garu and Abhicharan Garu work hard to consistently meet and exceed the customer’s expectations for product quality and performance.</p>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="box">
                <div class="our-services backups">
                    <div class="icon" > <img src={process.env.PUBLIC_URL + "/assets/img/bg/men-avatar.png"} alt="men" style={{borderRadius:'50%'}}/> </div>
                    <h4>Krishna Prasad</h4>
                    <p className='justify-content'>A brand of Maharani Dall Mill has been the favorite choice for millions of women across  Indian. With an impeccable distribution network across the world, today reached every part of the world and has become part and parcel of life for millions of customers.</p>
                </div>
            </div>
        </div>
    </div>
    
</div>
        );
    }
}

export default Meetourteam;