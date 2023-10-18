import React from 'react'

const About = () => {
  return (
    <>
      

    

    <div className="container mt-5 my-3 py-3">
    <br />
    <h1 className="text-center">About Us</h1>
    <hr />


        <p>
          Welcome to our website! We are a company dedicated to providing high-quality products to our customers.
        </p>
    <p className="lead ">
    <p>
    Welcome to our website! We are a customer-focused company committed to delivering high-quality products and exceptional services to our valued customers. With a passion for excellence and a dedication to innovation, we aim to provide you with the best solutions for your needs. Our team of experts works tirelessly to ensure that every product we offer meets the highest standards of quality and performance. As we continue to grow and evolve, we remain committed to our core values of integrity, customer satisfaction, and continuous improvement. Thank you for choosing us as your trusted partner for all your product needs.
  </p>
    </p>

    <h2 className="text-center py-4">Our Products</h2>

    <h2>Our Products</h2>
        <p>
          Here, you can find a selection of our top products.
        </p>
    <div className="row">
      <div className="col-md-3 col-sm-6 mb-3 px-3">
        <div className="card h-100">
          <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
          <div className="card-body">
            <h5 className="card-title text-center">Mens's Clothing</h5>
          </div>
        </div>
      </div>
      <div className="col-md-3 col-sm-6 mb-3 px-3">
        <div className="card h-100">
          <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
          <div className="card-body">
            <h5 className="card-title text-center">Women's Clothing</h5>
          </div>
        </div>
      </div>
      <div className="col-md-3 col-sm-6 mb-3 px-3">
        <div className="card h-100">
          <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
          <div className="card-body">
            <h5 className="card-title text-center">Jewelery</h5>
          </div>
        </div>
      </div>
      <div className="col-md-3 col-sm-6 mb-3 px-3">
        <div className="card h-100">
          <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
          <div className="card-body">
            <h5 className="card-title text-center">Electronics</h5>
          </div>
        </div>
      </div>
    </div>
  </div>

    </>
  )
}

export default About
