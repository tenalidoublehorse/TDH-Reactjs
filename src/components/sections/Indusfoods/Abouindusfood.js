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
                        <div className="col-lg-6 mb-lg-30  d-flex flex-column order-1 order-lg-2 tdh-shop aligen-items-center my-auto" >
                        <img src={process.env.PUBLIC_URL + "/assets/img/banner/tdh-shop-ai.png"} alt="img" className='' />
                       
                        </div>
                        <div className="col-lg-6 alignments d-flex flex-column order-1 order-lg-1">
                        <div className="section-title-wrap mr-lg-30 mt-lg-2">
                               
                                <h2 className='title' style={{fontSize:'33px'}}>Dal Se Lekar Dil Tak</h2>
                                <p className="subtitle" style={{ textAlign: 'justify' }}>
                                For over three decades, Tenali Double Horse have built close relationships with the farmers of Andhra's fertile Tenali region. We've sourced the best dals, millets, and spices, earning your trust in quality and nutrition.
                                From our heart to yours, our gold-standard dals, convenient instant mixes, wholesome millet meals, the cherished Sunnundalu, authentic spices, homemade masalas and pickles have found a special place in over a million homes.
                                </p>
                                <p className="subtitle" style={{ textAlign: 'justify' }}>Our journey mirrors the flavor we bring into your lives. As we venture beyond Andhra's borders, get ready for more delicious reasons to cherish where we come from a legacy of quality that speaks to your heart.</p>
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