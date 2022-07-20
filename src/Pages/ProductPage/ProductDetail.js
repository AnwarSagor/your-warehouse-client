import './ProductPage.css';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        // const url = "products.json";
        const url = `http://localhost:5000/product/${productId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    return (
        <div className='container' id='product-detail'>
            <div class='product' className='text-center'>
                <div id='product-image'><img src={product.img} alt="" /></div>
                <h4> {product.name}</h4>
                <p><small>Product ID: {product._id}</small></p>
                <p>{product.price}</p>
                <p>Quantity: {product.quantity} <br /> Supplier name: {product.supplier}</p>
                <p class='description' className='text-center'><small>{product.description}</small></p>
                <div>
                    <button id='delivered-btn'>Delivered</button>
                    <button id='manage-btn' onClick={() => navigate("/manageProducts")}>Manage Products</button>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default ProductDetail;