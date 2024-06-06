// ViewProduct.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ViewProduct = () => {
  const { id } = useParams(); // Get the product ID from URL params
  const [product, setProduct] = useState(null); // State to hold product details
  const [editedDescription, setEditedDescription] = useState('');
  const [editedRating, setEditedRating] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
        setEditedDescription(data.description);
        setEditedRating(data.rating);
      } catch (error) {
        console.error('Error fetching product details: ', error);
      }
    };

    fetchProduct();
  }, [id]); // Fetch product details when ID changes

  const handleDescriptionChange = (e) => {
    setEditedDescription(e.target.value);
  };

  const handleRatingChange = (e) => {
    setEditedRating(e.target.value);
  };

  const handleSave = () => {
    // Perform save action here
    console.log('Updated description:', editedDescription);
    console.log('Updated rating:', editedRating);
    // You can send updated data to an API or perform any other action here
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Product Details</h1>
      {product ? (
        <div className="row">
          <div className="col-md-6">
            <img src={product.thumbnail} alt={product.title} style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-12">
                <h2>{product.title}</h2>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Description:</label>
                  <textarea className="form-control" id="description" value={editedDescription} onChange={handleDescriptionChange}></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="rating" className="form-label">Rating:</label>
                  <input type="text" className="form-control" id="rating" value={editedRating} onChange={handleRatingChange} />
                </div>
                <button className="btn btn-primary" onClick={handleSave}>Save</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ViewProduct;
