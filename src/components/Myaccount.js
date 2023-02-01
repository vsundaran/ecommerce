import React from "react";
import "./myAccount.css";
import { Link } from "react-router-dom";
import { MyContext } from "../App";

function Myaccount(){
    let bag = React.useContext(MyContext);
    let cartArr = bag.cartArr;
    let badgeCount = bag.badgeCount;
    let registerDetails = bag.registerDetails;
    let setBuyNowProduct = bag.setBuyNowProduct;
    let setCartArr = bag.setCartArr;
    let setBadgeCount = bag.setBadgeCount;
    

    function setBuyObject(index){
        let filteredObj = cartArr[index];
        setBuyNowProduct(filteredObj);
      }
  
    function deleteCart(index){
    alert("card is deleted")
    let filteredArr = cartArr.filter((item,i)=> i != index);
    setCartArr(filteredArr)
    setBadgeCount(badgeCount-1)
    }

    return (
        <div>
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
                <div className="tags">
                  <span className="material-symbols-outlined icon">home</span>
                  <Link to="/Home" className="cart-link"><p className="tag-name mt-1">Home</p></Link>
                </div>
              </div>
            </nav>
            <div className="myAccount-body">
                <div className="vertical-div">
                    <div className= "myAccount-top">
                        <div className="avator">
                            <img className="user-avator" src="https://developer.spotify.com/assets/branding-guidelines/icon4@2x.png"/>
                        </div>
                        <p>{registerDetails.firstName} {registerDetails.lastName}</p>
                    </div>
                    <div className="myAccount-bottom">
                        <div className="details-wrapper">
                            <p>User Name</p>
                            <div className="name-wrapper">{registerDetails.firstName} {registerDetails.lastName}</div>
                            <p>e-mail address</p>
                            <div className="name-wrapper">{registerDetails.emailAddress}</div>
                            <p>Passward</p>
                            <div className="name-wrapper">{registerDetails.password}</div>
                        </div>
                        <div className="button-wrapper">
                            <Link to="/" className="cart-link" ><button className="myAccount-button">Log Out</button></Link> 
                            <Link to="/Cart"><button className="myAccount-button">Cart</button></Link>
                        </div>
                    </div>
                </div>
                <div className="accout-cart-list">
                    <div className="cards-wrapper">
                    {
                    cartArr.map((item,index)=>{
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
                                <Link to="/Buynow"><button className="add-to-cart" onClick={()=>setBuyObject(index)}>Buy Now</button></Link>
                                <button className="buy-now delete-cart" onClick={()=>deleteCart(index)}>Delete Cart</button>
                            </div>
                            </div>
                        </div>
                        )
                    })
                    }      
                    </div>
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
            
        </div>
    )
}

export default Myaccount;