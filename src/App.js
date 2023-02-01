import React from "react";
import Home from "./Home";
import Login from "./Login";
import Register from "./Rigister";
import Cart from "./components/cart";
import Myaccount from "./components/Myaccount";
import { Route, Routes } from "react-router-dom";
import BuyNow from "./components/buyNow";

export const MyContext = React.createContext();

function App() {
  let [auth,setAuth] = React.useState(false);
  let [forMap,setForMap] = React.useState([]);
  let [cartArr,setCartArr] = React.useState([]);
  let [badgeCount,setBadgeCount] = React.useState(0);
  let [buyNowProduct,setBuyNowProduct] = React.useState({});
  let [registerDetails,setRegisterDetails] = React.useState({});

  let bag = {
    auth:auth,
    setAuth:setAuth,
    registerDetails:registerDetails,
    setRegisterDetails:setRegisterDetails,
    forMap : forMap,
    setForMap : setForMap,
    cartArr : cartArr,
    setCartArr:setCartArr,
    badgeCount:badgeCount,
    setBadgeCount:setBadgeCount,
    buyNowProduct:buyNowProduct,
    setBuyNowProduct:setBuyNowProduct,
  }

  
  React.useEffect(()=>{
    async function hitApi(){
      let fatchedData = await fetch("https://dummyjson.com/products");
      let jsonData = await fatchedData.json();
     
      setForMap(jsonData.products)
      console.log(jsonData.products);
    };
    hitApi();
  },[]);
  
  return (
    <MyContext.Provider value={bag}>
      <Routes>
        <Route path="/" element={<Register/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Cart" element={<Cart/>}/>
        <Route path="/Myaccount" element={<Myaccount/>}/>
        <Route path="/Buynow" element={<BuyNow/>}/>
      </Routes>
    </MyContext.Provider>
  );
}

export default App;
