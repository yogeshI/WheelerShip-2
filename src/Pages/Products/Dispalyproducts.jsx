import React, { useState, useEffect } from "react";
import "./Products.css";
import { Link } from "react-router-dom";

const DisplayProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products); // Update the products state
      })
      .catch((error) => console.log(error));
  }, []);

  const handleDelete = (id) => {
    const shouldDelete = window.confirm("Are you sure you want to delete this item?");

    if (shouldDelete) {
      const dataFilter = products.filter((item) => item.id !== id);
      setProducts(dataFilter);
    }
  };

  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col mt-5">
          <Link to="/Create" className="btn btn-info ml-md-auto">
            + Add Products
          </Link>
          <h1>Product List</h1>
          <ul className="list-unstyled">
            {products.map((product) => (
              <li key={product.id}>
                <div className="card mb-3" style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)" }}>
                  <div className="row g-0">
                    <div className="col-md-4 col-sm-12">
                      <div id={`carousel-${product.id}`} className="carousel slide">
                        <img src={product.thumbnail} alt={product.title} className="img-fluid" />
                      </div>
                    </div>
                    <div className="col-md-8 col-sm-12">
                      <div className="card-body">
                        <h5 className="card-title" style={{ color: "#333" }}>
                          {product.title}
                        </h5>
                        <p className="card-text">{product.description}</p>
                        <p className="card-text" style={{ color: "#555" }}>
                          <strong>Category:</strong> {product.category}
                        </p>
                        <p className="card-text" style={{ color: "#555" }}>
                          <strong>Brand:</strong> {product.brand}
                        </p>
                        <p className="card-text" style={{ color: "#555" }}>
                          <strong>Price:</strong> ${product.price}
                        </p>
                        <p className="card-text" style={{ color: "#555" }}>
                          <strong>Rating:</strong> {product.rating} stars
                        </p>
                        <p className="card-text" style={{ color: "#555" }}>
                          <strong>Stock:</strong> {product.stock} available
                        </p>
                        <p className="card-text" style={{ color: "#555" }}>
                          <strong>Discount:</strong> {product.discountPercentage} available
                        </p>
                      </div>

                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                        <Link to={`/update/${product.id}`} className="btn btn-danger" style={{ margin: "5px" }}>
                        Update
                      </Link>
                          <button
                            className="btn btn-info"
                            style={{ margin: "5px" }}
                            onClick={() => handleDelete(product.id)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DisplayProducts;
