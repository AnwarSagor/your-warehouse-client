import './ProductPage.css';
import React, { useEffect, useState } from 'react';
import Product from './Product'

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        // fetch('products.json')
        fetch('http://localhost:5000/product')

            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div id='products' className='container'>
            <h2 class='products-title'> Products</h2>
            <div class='products-container'>

                {
                    products.map(product =>
                        <Product
                            key={product._id}
                            product={product}
                        ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;