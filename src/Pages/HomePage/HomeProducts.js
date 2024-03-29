import './HomePage.css'
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HomeProduct from './HomeProduct';

const HomeProducts = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // fetch('products.json')
        fetch('https://infinite-badlands-56898.herokuapp.com/product')

            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div id='products' className='container'>
            <h2 class='products-title'> Products</h2>
            <div class='products-container'>

                {
                    products.slice(0, 6).map(product =>
                        <HomeProduct
                            key={product._id}
                            product={product}
                        ></HomeProduct>)
                }

            </div>
            <div >
                <button class='manage-products' onClick={() => navigate("/manageProducts")}>Manage Products</button>
            </div>
        </div>
    );
};

export default HomeProducts;