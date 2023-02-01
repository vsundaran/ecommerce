import "./cart.css";
import "./buyNow.css";
import React from "react";
import { MyContext } from "../App";
import { Link } from "react-router-dom";

function BuyNow(){
    let refershRef = React.useRef()
    let refershRef1 = React.useRef()
    let refershRef2 = React.useRef()
    let refershRef3 = React.useRef()
    let [confrim,setConfrim] = React.useState(false)
    let bag = React.useContext(MyContext);
    let badgeCount = bag.badgeCount;
    let buyNowProduct = bag.buyNowProduct;

    function buyNow(e){
        e.preventDefault();
        setConfrim(true);
        refershRef.current.value = ""
        refershRef1.current.value = ""
        refershRef2.current.value = ""
        refershRef3.current.value = ""
        
    }
    return(
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
            <div className="buy-now-details">
                <div className="img-wrapper">
                    <img src={buyNowProduct.images[0]} className="buying-product"/>
                </div>
                <div className="buying-product-details">
                    <div className="upper">
                        <p className="buy-product-name">{buyNowProduct.title}</p>
                        <p className="brand">{buyNowProduct.brand}</p>
                        <p className="rating">{buyNowProduct.rating} <span class="material-symbols-outlined star">star</span></p>
                        <div className="d-flex">
                            <span class="material-symbols-outlined doller">attach_money</span>
                            <p className="price">{buyNowProduct.price}</p>
                        </div>
                        <p className="discountPercentage">Offer : {buyNowProduct.discountPercentage} %</p>
                        <p className="description-title">Discription</p>
                        <p className="description">{buyNowProduct.description}</p>
                    </div>
                    <div className="lower">
                        <form>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Name</label>
                                <input ref={refershRef1} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/> 
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">e-mail</label>
                                <input  ref={refershRef2} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Address</label>
                                <input  ref={refershRef3} type="text" class="form-control" id="exampleInputPassword1" required/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Zip-Code</label>
                                <input  ref={refershRef} type="number" class="form-control" id="exampleInputPassword1" required/>
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" disabled/>
                                <label class="form-check-label" for="exampleCheck1">Online Payment</label>
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" required/>
                                <label class="form-check-label" for="exampleCheck1">Cash on Delivery</label>
                            </div>
                            <button type="submit" class="btn btn-primary"  onClick={buyNow}>Submit</button>
                        </form>
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
            {
                confrim ? <div className="notification">
                <div className="white">
                    <h1 className="mt-3">Congratulations !!!</h1>
                    <img className="tik" src="https://media.istockphoto.com/id/1305827140/vector/check-mark-icon-tik-mark-icon.jpg?s=612x612&w=0&k=20&c=lAczsDIdnDQX6iUMdDNewLw4c0S5v4emvVapMuuJQGg="/>
                    <p className="mb-4">Order Successfully Placed</p>
                    <span className="close mb-3" onClick={()=>setConfrim(false)}>Close</span>
                </div>
            </div> : false

            }
            
        </div>
    )
}

export default BuyNow;