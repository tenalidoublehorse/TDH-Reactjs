import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import Quickview from '../../layouts/Quickview';
import products from "../../../data/product.json";
import productcategory from "../../../data/productcategory.json";
import { Rating } from "../../../helper/helper";
import Tenalifoodproducts from './Tenalifoodproducts'

class Content extends Component {
   
    render() {
        return (
            <Tenalifoodproducts/>
        )
    }
}

export default Content;