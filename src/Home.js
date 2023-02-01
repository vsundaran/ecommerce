import "./Home.css";
import './Media.css';
import React, { useEffect } from 'react';
import Error from "./Error";
import { MyContext } from "./App";
import { Link } from "react-router-dom";

function Home() {
  let bag = React.useContext(MyContext);
  let auth = bag.auth;
  let forMap = bag.forMap
  let setForMap = bag.setForMap;
  let cartArr = bag.cartArr;
  let setCartArr = bag.setCartArr;
  let badgeCount = bag.badgeCount;
  let setBadgeCount = bag.setBadgeCount;
  let setBuyNowProduct = bag.setBuyNowProduct;


  function addCart(index){
    setBadgeCount(badgeCount + 1);
    let picker = forMap.slice(index,index+1);
    setCartArr([...cartArr,...picker]);
  }
  function setBuyObject(index){debugger
    let filteredObj = forMap[index];
    console.log(filteredObj)
    setBuyNowProduct(filteredObj);
  }

  return (
    <div>
        {
            auth ?  <div className='home-parent-wrapper'>
            <nav className='nav'>
              <div className="container">
                <img className="brand-logo" src="https://cdn.selloship.com/images/store_logo_sm/8a820c873d63d20dc52442343ce97988.png"/>
                <div className="input-group mb-3">
                  <input type="text" className="form-control input" placeholder="Search Products Here" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                  <span className="input-group-text search-symbal" id="basic-addon2"><span className="material-symbols-outlined">search</span></span>
                </div>
                <div className="tags">
                  <span className="material-symbols-outlined icon">account_circle</span>
                  <Link to="/Myaccount" className="cart-link"><p className="tag-name mt-1">My Account</p></Link>
                </div>
                <div className="tags cart-tag">
                  <span className="material-symbols-outlined icon">shopping_cart</span>
                  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger badge-notification">{badgeCount}<span class="visually-hidden">unread messages</span></span>
                  <Link to="/Cart" className="cart-link" ><p className="tag-name">My Cart</p></Link> 
                </div>
                <div className="tags  home">
                  <span className="material-symbols-outlined icon">home</span>
                  <Link to="/Home" className="cart-link"><p className="tag-name mt-1">Home</p></Link>
                </div>
              </div>
            </nav>
            <div className="scrolling-show-case">
              <div id="carouselExampleIndicators" className="carousel slide carousel-media" data-bs-ride="true">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="https://m.media-amazon.com/images/I/61j6PauxYdL._SX3000_.jpg" className ="d-block w-100 show-case-image" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img  src="https://m.media-amazon.com/images/I/81XKmTLsyBL._SX3000_.jpg" className="d-block w-100 show-case-image" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img  src="https://m.media-amazon.com/images/I/61aURrton0L._SX3000_.jpg" className="d-block w-100 show-case-image" alt="..."/>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>  
              <div className="cards-wrapper">
                {
                  forMap.map((item,index)=>{
                    return(
                      <div className="card" key={index}>
                        <div className="card-img-wrapper">
                          <img className="card-image" src={item.images[0]}/>
                        </div>
                        <div className="details-wrapper">
                          <p className="product-brand">{item.brand}</p>
                          <p className="product-name">{item.title}</p>
                          <p className="product-price"><span className="material-symbols-outlined rupees">attach_money</span><span className="product-price">{item.price}</span><span className="strike-wrapper"><span className="material-symbols-outlined rupees">attach_money</span><span className="product-strike-price">2000</span></span></p>
                          <div className="buy-cart-button-wrapper">
                            <button className="add-to-cart" onClick={()=>addCart(index)}>Add to cart</button>
                            <Link to="/Buynow"><button className="add-to-cart orange" onClick={()=>setBuyObject(index)}>Buy Now</button></Link>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }      
              </div>
            </div>
            <div className="foot-navbar">
                <div className="tags-bottom">
                  <span className="material-symbols-outlined icon">account_circle</span>
                  <Link to="/Myaccount" className="cart-link"><p className="tag-name mt-1">My Account</p></Link>
                </div>
                <div className="tags-bottom cart-tag">
                  <span className="material-symbols-outlined icon">shopping_cart</span>
                  <span class="position-static top-0 start-100 translate-middle badge rounded-pill bg-danger badge-notification">{badgeCount}<span class="visually-hidden">unread messages</span></span>
                  <Link to="/Cart" className="cart-link" ><p className="tag-name">My Cart</p></Link> 
                </div>
                <div className="tags-bottom  home">
                  <span className="material-symbols-outlined icon">home</span>
                  <Link to="/Home" className="cart-link"><p className="tag-name mt-1">Home</p></Link>
                </div>
            </div>
            
          </div> : <Error/>
        }
     
    </div>
  )
}

export default Home;
