import React from 'react'



const Home = () => {
    return (
       <>
       
       <div id="carouselExampleIndicators" class="carousel slide" data-mdb-ride="carousel">
       <div class="carousel-indicators">
         <button
           type="button"
           data-mdb-target="#carouselExampleIndicators"
           data-mdb-slide-to="0"
           class="active"
           aria-current="true"
           aria-label="Slide 1"
         ></button>
         <button
           type="button"
           data-mdb-target="#carouselExampleIndicators"
           data-mdb-slide-to="1"
           aria-label="Slide 2"
         ></button>
         <button
           type="button"
           data-mdb-target="#carouselExampleIndicators"
           data-mdb-slide-to="2"
           aria-label="Slide 3"
         ></button>
       </div>
       <div class="carousel-inner">
         <div class="carousel-item active">
           <img src="https://plus.unsplash.com/premium_photo-1664201890375-f8fa405cdb7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" class="d-block w-100" alt="Wild Landscape"/>
         </div>
         <div class="carousel-item">
           <img src="https://img.freepik.com/premium-photo/woman-shopping-online-laptop-paying-purchased-goods-by-credit-card_746318-997.jpg?w=900" class="d-block w-100" alt="Camera"/>
         </div>
         <div class="carousel-item">
           <img src="https://img.freepik.com/free-photo/add-cart-buy-now-online-commerce-graphic-concept_53876-133964.jpg?size=626&ext=jpg&ga=GA1.1.1443169856.1696964361&semt=ais" class="d-block w-100" alt="Exotic Fruits"/>
         </div>
       </div>
       <button class="carousel-control-prev" type="button" data-mdb-target="#carouselExampleIndicators" data-mdb-slide="prev">
         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
         <span class="visually-hidden">Previous</span>
       </button>
       <button class="carousel-control-next" type="button" data-mdb-target="#carouselExampleIndicators" data-mdb-slide="next">
         <span class="carousel-control-next-icon" aria-hidden="true"></span>
         <span class="visually-hidden">Next</span>
       </button>
     </div>
       

     <div className="container">
     
     <div className="row">
     
     <div className="col   ">
     
     <h2 className='text-info'>     E-commerce   <strong>Application of e-Commerce | All you need to Know</strong>  </h2>

     <p>

Whether you're just getting started or ready to scale, we'll help you sell more stuff online.
     </p>
     
     </div>
     </div>
     </div>
       </>
    )
}

export default Home