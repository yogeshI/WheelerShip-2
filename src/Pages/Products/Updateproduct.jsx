import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";




const UpdateProduct = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState({});
  const history = useNavigate();

  useEffect(() => {
    // Fetch the product data by ID from your API or data source
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data); // Update the product state with the fetched data
      })
      .catch((error) => console.log(error));
  }, [id]);

  const handleUpdate = () => {
    // Define the API endpoint for updating a product (replace with your actual endpoint)
    const updateUrl = `https://dummyjson.com/products/${id}`;
  
    // Data to be sent for the update (replace with the updated data)
    const updatedData = {
      title: product.title,
      description: product.description,
      category: product.category,
      brand: product.brand,
      price: product.price,
      rating: product.rating,
      stock: product.stock,
      discountPercentage: product.discountPercentage,
      thumbnail: product.thumbnail,
    };
  
    // Send a PUT request to update the product
    fetch(updateUrl, {
      method: "PUT", // Use PUT or PATCH as per your API's requirements
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((response) => {
        if (response.ok) {
          // Product updated successfully, show a success toast message
         alert("Product updated successfully", { autoClose: 2000 });
          history("/WheelerShip-2/product");
        } else {
          // Failed to update the product, show an error toast message
         alert("Failed to update product. Please try again later.");
        }
      })
      .catch((error) => {
        console.error("Error updating product:", error);
       alert("An error occurred while updating the product.");
      });
  };
  

  return (
    <div className="container mt-5">
      <h1>Edit Product</h1>
      <form className="mt-5">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={product.title}
            onChange={(e) => setProduct({ ...product, title: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            value={product.description}
            onChange={(e) => setProduct({ ...product, description: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <input
            type="text"
            className="form-control"
            id="category"
            value={product.category}
            onChange={(e) => setProduct({ ...product, category: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="brand" className="form-label">
            Brand
          </label>
          <input
            type="text"
            className="form-control"
            id="brand"
            value={product.brand}
            onChange={(e) => setProduct({ ...product, brand: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            value={product.price}
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="rating" className="form-label">
            Rating
          </label>
          <input
            type="number"
            className="form-control"
            id="rating"
            value={product.rating}
            onChange={(e) => setProduct({ ...product, rating: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="stock" className="form-label">
            Stock
          </label>
          <input
            type="number"
            className="form-control"
            id="stock"
            value={product.stock}
            onChange={(e) => setProduct({ ...product, stock: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="discount" className="form-label">
            Discount Percentage
          </label>
          <input
            type="number"
            className="form-control"
            id="discount"
            value={product.discountPercentage}
            onChange={(e) => setProduct({ ...product, discountPercentage: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="thumbnail" className="form-label">
            Thumbnail Image
          </label>
          <input
            type="url"
            className="form-control"
            id="thumbnail"
            value={product.thumbnail}
            onChange={(e) => setProduct({ ...product, thumbnail: e.target.value })}
          />
        </div>

        <button type="button" className="btn btn-primary" onClick={handleUpdate}>
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;
