import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center text-lg-start text-white mt-5" style={{ backgroundColor: 'black', boxShadow: '5px 5px 5px 10px black' }}>
      <div className="container p-4 pb-0">
        <div className="row">
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Company name</h6>
            <p>
              Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
            <p>
              <a href="#" className="text-white">Smartphones</a>
            </p>
            <p>
              <a href="#" className="text-white">Laptops</a>
            </p>
            <p>
              <a href="#" className="text-white">Fragrances</a>
            </p>
            <p>
              <a href="#" className="text-white">Groceries</a>
            </p>
          </div>

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Useful links</h6>
            <p>
              <a href="#" className="text-white">Your Account</a>
            </p>
            <p>
              <a href="#" className="text-white">Become an Affiliate</a>
            </p>
            <p>
              <a href="#" className="text-white">Shipping Rates</a>
            </p>
            <p>
              <a href="#" className="text-white">Help</a>
            </p>
          </div>

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
            <p><i className="fas fa-home mr-3" /> New York, NY 10012, US</p>
            <p><i className="fas fa-envelope mr-3" /> info@gmail.com</p>
            <p><i className="fas fa-phone mr-3" /> +01 234 567 88</p>
            <p><i className="fas fa-print mr-3" /> +01 234 567 89</p>
          </div>
        </div>

        <hr className="my-3" />

        <div className="row d-flex align-items-center">
          <div className="col-md-7 col-lg-8 text-center text-md-start">
            <div className="p-3">
              © 2023 Copyright:
              <a href="#" className="text-white">API-Task@2023</a>
            </div>
          </div>
          <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
            <a href="#" className="btn btn-outline-light btn-floating m-1" role="button"><i className="fab fa-facebook-f" /></a>
            <a href="#" className="btn btn-outline-light btn-floating m-1" role="button"><i className="fab fa-twitter" /></a>
            <a href="#" className="btn btn-outline-light btn-floating m-1" role="button"><i className="fab fa-google" /></a>
            <a href="#" className="btn btn-outline-light btn-floating m-1" role="button"><i className="fab fa-instagram" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
