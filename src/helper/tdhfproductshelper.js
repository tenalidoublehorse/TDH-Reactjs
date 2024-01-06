import products from "../data/tdhproduct.json";

function getProduct(id) {
    return products.filter(product => { return product.id === parseInt(id) })[0];
}


export { getProduct };