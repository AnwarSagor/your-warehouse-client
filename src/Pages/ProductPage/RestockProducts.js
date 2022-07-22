import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const RestockProducts = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const navigate = useNavigate();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    useEffect(() => {
        // const url = "products.json";
        const url = `https://infinite-badlands-56898.herokuapp.com/product/${productId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    const onSubmit = (data) => {
        const url = `https://infinite-badlands-56898.herokuapp.com/product/${productId}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                toast('Quantity Updated')
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    return (
        <div>

            <div className='container' id='product-detail'>
                <div class='product' className='text-center'>

                    <div id='product-image'>
                        <img src={product.img} alt="" />
                    </div>

                    <div>
                        <h4> {product.name}</h4>
                        <p><small>Product ID: {product._id}</small></p>
                        <p> Price starts from ${product.price}</p>
                        <p>Quantity: {product.quantity} <br /> Supplier name: {product.supplier}</p>
                        <p class='description' className='text-center'><small>{product.description}</small></p>
                    </div>

                    <div>
                        <button id='delivered-btn'>Delivered</button>
                    </div>

                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                type="number"
                                {...register("quantity")}
                                placeholder="Number of Quantity"
                            />
                            <input
                                type="submit"
                                value="Restock Product"
                            />
                        </form>
                    </div>

                    <div>
                        <button id='manage-btn' onClick={() => navigate("/manageProducts")}>Manage Products</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RestockProducts;