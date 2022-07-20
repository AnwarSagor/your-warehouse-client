import React from 'react';
import useProducts from '../../hooks/useProducts';

const ManageProducts = () => {
    const [products, setProducts] = useProducts();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure to delete?');
        if (proceed) {
            const url = `http://localhost:5000/product/${id}`;
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
        <div className='container w-50 mx-auto'>
            <h2>Manage Your Products</h2>
            {
                products.map(product => <div key={product._id}>
                    <p>{product.name} <button onClick={() => handleDelete(product._id)}>Delete</button></p>
                </div>)
            }
        </div>
    );
};

export default ManageProducts;