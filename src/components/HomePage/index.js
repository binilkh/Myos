import React, { useState } from "react";
import { Routes, Route,Link } from "react-router-dom";
import Shop from "../Shop"
import Order from "../Order";
import { useTranslation } from "react-i18next";
import "./homePage.css";

const HomePage= (props) => {
  const { t, i18n } = useTranslation();
  const [ count, setCount ] = useState(0);
  var shopActive, orderActive = "";
  switch(count){
    case 0: {
        shopActive='active';
        orderActive='';
        break
    }
    case 1: {
      shopActive='';
      orderActive='active';
      break;
  }
    default:{
      shopActive='active';
      orderActive='';
      break;
    }
  }
  return (
    <div className="HomePage">
       <div className="row">
       <div className="col-md-2">
         <div class="vertical-menu">
          <Link title="shop" class={shopActive} to="/Shop" onClick={()=>setCount(0)}>{t("Shop")}</Link>
          <Link title="order" class={orderActive} to="/Order" onClick={()=>setCount(1)}>{t("My Orders")}</Link>
        </div>
      </div>
      <div className="col-md-10 d-sm-block maincol">
          <Routes>
              <Route exact path="/" element={<Shop {...props}/>} />
              <Route exact path="/Shop" element={<Shop {...props}/>} />
              <Route exact path="/Order" element={<Order {...props}/>} />
          </Routes>
        </div>
       </div>
      </div>
  );
}
export default HomePage;