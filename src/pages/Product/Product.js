import React from 'react';
import './Product.css'

const Product = () => {

    return (
        <>
            <h1>Product</h1>
            <p>Dit is de product overview pagina</p>

            <nav>
                <ul>
                    <li><a href="product/1">Product 1</a></li>
                    <li><a href="product/2">Product 2</a></li>
                    <li><a href="product/3">Product 3</a></li>
                </ul>
            </nav>
            <hr/>
        </>
    );
};

export default Product;