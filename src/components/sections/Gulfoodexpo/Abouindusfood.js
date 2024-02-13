import React, { Component,Link } from 'react';


class Abouindusfood extends Component {
    render() {
        return (
            <div className="section" >
                <div className="container-fluid">
                {/* <div className="section-title-wrap section-header text-center ">
                    <h2 className="title">Indulge in Tradition and Convenience</h2>
                    <p className="subtitle">
                    Explore TDH Foods, our renowned subsidiary brand known for iconic Sunnundalu and instant mixes like dosa, idly, and vada. Elevate your culinary journey with authentic flavors and easy preparation.
                    </p>
                </div> */}
                    <div className="row ">
                        <div className='col-md-12'>
                        <h2 className='title text-center' style={{fontSize:'33px'}}>Welcome to Tenali Double Horse at Gulfood Expo 2024</h2>

                        </div>
                        <div className="col-lg-6 mb-lg-30  d-flex flex-column order-1 order-lg-2 tdh-shop aligen-items-center my-auto" >
                        <img src={process.env.PUBLIC_URL + "/assets/img/banner/tdh-shop-ai.png"} alt="img" className='' />
                       
                        </div>
                        <div className="col-lg-6 alignments d-flex flex-column order-1 order-lg-1">
                        <div className="section-title-wrap mr-lg-30 mt-lg-2">
                               
                                <h4 style={{ color: "#ea202f" }}>Join Us at Gulfood Expo</h4>
                                <p className="subtitle" style={{ textAlign: 'justify' }}>
                                
Tenali Double Horse is thrilled to be participating in the Gulfood Expo 2024, the world's largest annual food and beverage trade event! We invite you to join us at our booth to explore our latest products, engage with our team, and discover exciting business opportunities.

</p>
                                {/* <a  href="https://tdhfoodproducts.com/about/" rel="noopener noreferrer" target="_blank" class="btn-custom  shadow-none ">View More</a> */}


                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Abouindusfood;