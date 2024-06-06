import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'; // Import Link from React Router

const ProductList = () => {
  const [Api, setApi] = useState([]);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  console.log("products",products);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        setApi(data.products);
        dispatch({ type: 'ADD_PRODUCTS', payload: data.products });
      } catch (error) {
        console.error('Error fetching products: ', error);
      }
    };

    fetchProducts();
  }, [dispatch]);

  return (
    <div className="container">
      <h2 className="text-center mb-4">Featured Products</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {products.map((product) => (
          <div key={product.id} className="col mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-body d-flex flex-column">
                <img 
                  src={product.thumbnail} 
                  className="card-img-top mb-3"
                  alt={product.name} 
                  style={{ 
                    objectFit: 'cover',
                    maxHeight: '200px', // Set a max height for the image
                  }} 
                />
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">${product.price}</p>
                <p className="card-text">Rating: {product.rating}</p>
                <Link to={`/products/${product.id}`} className="btn btn-primary mt-auto">View</Link> {/* Add Link */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
