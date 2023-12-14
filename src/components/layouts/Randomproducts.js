import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import Quickview from './Quickview';
import products from "../../data/product.json";
import { Rating } from "../../helper/helper";



class Relatedproduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalshow: false,
            lastActiveBox: -1,
        };
        this.modalShow = this.modalShow.bind(this);
        this.modalClose = this.modalClose.bind(this);
    }

    // Modal
    modalShow(index) {
        this.setState({ modalshow: true, lastActiveBox: index });
    }
    modalClose() {
        this.setState({ modalshow: false });
    }

    getRandomProducts() {
        const excludedIndices = [0, 1, 2]; // Exclude the first three products
        const randomProducts = [];

        while (randomProducts.length < 3) {
            const randomIndex = Math.floor(Math.random() * products.length);
            if (!excludedIndices.includes(randomIndex)) {
                randomProducts.push(products[randomIndex]);
                excludedIndices.push(randomIndex); // To avoid duplicates
            }
        }

        return randomProducts;
    }

    render() {
        const randomProducts = this.getRandomProducts();

        return (
            <div className="section section-padding related-products pt-0">
                <div className="container">
                    <h3>You might also like</h3>
                    <div className="row menu-v2">
                        {/* Product Start */}
                        {randomProducts.map((item, i) => (
                            <div key={i} className="col-lg-4 col-md-6">
                                <div className="product">
                                    <div className="favorite">
                                        <i className="far fa-heart" />
                                    </div>
                                    <Link className="product-thumb" to={"/menu-item-v1/" + item.id}>
                                        <img src={process.env.PUBLIC_URL + "/" + item.img} alt={item.name} />
                                    </Link>
                                    <div className="product-body">
                                        <div className="product-desc">
                                            <h4> <Link to={"/menu-item-v1/" + item.id}>{item.name}</Link></h4>
                                            <div className="ct-rating-wrapper">
                                                <div className="ct-rating">
                                                    {Rating(item.rating)}
                                                </div>
                                            </div>
                                            <p>{item.shortdesc}</p>
                                         
                                        </div>
                                        <div className="product-controls">
                                            <p className="product-price">{new Intl.NumberFormat().format((item.price).toFixed(2))}₹</p>
                                            <button type="button" className="order-item btn-custom btn-sm shadow-none" onClick={(e) => this.modalShow(item.id)}> More info<i className="fas fa-plus" /> </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {/* Product End */}
                    </div>
                </div>
                <Modal show={this.state.modalshow} id="customizeModal" onHide={this.modalClose} aria-labelledby="contained-modal-title-vcenter" size="lg" centered>
                    <Quickview productId={this.state.lastActiveBox} />
                </Modal>
            </div>
        );
    }
}

export default Relatedproduct;
