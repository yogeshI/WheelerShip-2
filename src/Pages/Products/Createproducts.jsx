import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateProduct = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    id: '',
    title: "",
    description: "",
    category: "",
    brand: "",
    price: "",
    rating: "",
    stock: "",
    discountPercentage: "",
    thumbnail: "",
  });

  const [responseMessage, setResponseMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send a POST request to the API to create the product
    axios
  .post("https://dummyjson.com/products/", product)
  .then((response) => {
    console.log("Product added successfully:", response.data);
    alert("Product added successfully")
    setResponseMessage("Product added successfully.");
    navigate('/product');
  })
  .catch((error) => {
    console.error("Error adding product:", error);
    setResponseMessage("Error adding product. Please try again.");
    alert("Error adding product")
  });

  };

  return (
    <div className="container">
      <div className="row mt-5">
        <h3 className="text-center text-dark mt-5">Create A Product</h3>
        <div className="col-lg-6 col-md-8 col-sm-10 mx-auto p-5">
          <form
            onSubmit={handleSubmit}
            style={{
              padding: "20px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              boxShadow: "0px 0px 10px #aaa",
            }}
          >
            <div className="mt-4">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  value={product.title}
                  onChange={handleChange}
                  placeholder="Product Name"
                />
              </div>

              <div className="form-group">
                <textarea
                  className="form-control"
                  rows={4}
                  name="description"
                  value={product.description}
                  onChange={handleChange}
                  placeholder="Product Description"
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="category"
                  value={product.category}
                  onChange={handleChange}
                  placeholder="Category"
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="brand"
                  value={product.brand}
                  onChange={handleChange}
                  placeholder="Brand"
                />
              </div>

              <div className="form-group">
                <input
                  type="number"
                  className="form-control"
                  name="price"
                  value={product.price}
                  onChange={handleChange}
                  placeholder="Price"
                />
              </div>

              <div className="form-group">
                <input
                  type="number"
                  className="form-control"
                  name="rating"
                  value={product.rating}
                  onChange={handleChange}
                  placeholder="Rating"
                />
              </div>

              <div className="form-group">
                <input
                  type="number"
                  className="form-control"
                  name="stock"
                  value={product.stock}
                  onChange={handleChange}
                  placeholder="Stock"
                />
              </div>

              <div className="form-group">
                <input
                  type="number"
                  className="form-control"
                  name="discountPercentage"
                  value={product.discountPercentage}
                  onChange={handleChange}
                  placeholder="Discount Percentage"
                />
              </div>

              <div className="form-group">
                <input
                  type="url"
                  className="form-control"
                  name="thumbnail"
                  value={product.thumbnail}
                  onChange={handleChange}
                  placeholder="Image URL"
                />
              </div>

              <div className="d-flex mt-3">
                <button type="submit" className="btn btn-primary">
                  Add Product
                </button>
                <button type="reset" className="btn btn-warning ml-2">
                  Reset
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
