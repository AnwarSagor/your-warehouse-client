import React from 'react';
import useProducts from '../../hooks/useProducts';

const ManageProducts = () => {
    const [products, setProducts] = useProducts();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure to delete?');
        if (proceed) {
            const url = `https://infinite-badlands-56898.herokuapp.com/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining);
                })
        }
    }
    return (
        <div id='manage-products' className='container'>
            <h2 className='text-center'>Manage Your Products</h2>
            {
                products.map(product =>
                    <div id='manageProducts-container' key={product._id}>
                        <div>
                            <img src={product.img} alt="" />
                        </div>
                        <div className='text-center'>
                            <h5>{product.name} </h5>
                            <h6>{product.description}</h6>
                        </div>

                        <div >
                            <button id='delete-button' onClick={() => handleDelete(product._id)}>Delete</button>
                        </div>
                    </div>)
            }
        </div>
    );
};

export default ManageProducts;