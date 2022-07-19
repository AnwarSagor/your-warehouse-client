import './HomePage.css'
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HomeProduct from './HomeProduct';

const HomeProducts = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

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
                    products.slice(0, 3).map(product =>
                        <HomeProduct
                            key={product._id}
                            product={product}
                        ></HomeProduct>)
                }

            </div>
            <div >
                <button class='see-all-products' onClick={() => navigate("/products")}>See All Products</button>
            </div>
        </div>
    );
};

export default HomeProducts;