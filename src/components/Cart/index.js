import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import {useNavigate} from 'react-router-dom';
import { insertOrder } from "../../services/itemService";
import "./cart.css";
const Cart = (props) => {
    const { addTocart, cartItems } = props;
    const [ emailCheckout, setEmailCheckout ] = useState("");
    const [ checkout, setCheckout ] = useState(false);
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    const total = cartItems && cartItems.reduce(function (acc, obj) { return acc + obj.itemPrice; }, 0);
    const removeCart = (itemIndex) => {
        cartItems.splice(itemIndex, 1);
        addTocart(cartItems);
    }
    const confirmCheckout = async () => {
        if(emailCheckout==="") return;
        const payload = {
            email : emailCheckout,
            items : cartItems,
            totalPrice : total,
            mode: 2
        }
        const insertData = await insertOrder(payload);
        navigate("/Order");
        sessionStorage.clear();
    }
    return(
        <>
        <div className="card" style={{'width':'98%'}}>
            <div className="row">
                <div className="col-md-12 d-md-block d-lg-block d-xl-block d-xs-block cart">
                {cartItems && cartItems.length > 0 ?
                    cartItems.map((cartItem, index) =>(
                        <div key={index}>
                            <div className="row" key={index}>
                                <div className="row main align-items-left" style={{'padding':'0'}}>
                                    <div className="col-5" style={{'padding':'0'}}>
                                        <div>{cartItem.title}&nbsp;{cartItem.quantity}</div>
                                    </div>
                                    <div className="col-5" style={{'padding':'0'}}>{(cartItem.itemPrice === '') ? "" : new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(cartItem.itemPrice)}</div>
                                    <div className="col-2" style={{'padding':'0'}}>
                                        <a href=" " title="Delete" className="text-muted" onClick={()=>removeCart(index)}><i className="fa fa-close"></i></a></div>
                                    </div>
                            </div>
                            <hr className="my-2"/>
                    </div>
                    ))
                    :
                    t('Please add items')
                    }
                    {cartItems && cartItems.length > 0 ?
                        <>
                            <div className="row">
                                <div className="row main">
                                    <div className="col-5">Total</div>
                                    <div className="col-7">{(total === 0) ? "" : new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(total)}</div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="row main">
                                    <Button name="sbutton" id="sbutton" type="button" variant="primary" onClick={()=>setCheckout(true)}>{t('Checkout')}</Button>
                                </div>
                            </div>
                            {checkout ? 
                                <>
                                    <div className="row">
                                        <div className="row main">
                                            <input id="email" value={emailCheckout} placeholder="Please enter your email id" type="email" className="form-control form-control-sm qtxt" required onChange={(e)=>setEmailCheckout(e.target.value)}/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="row main">
                                            <Button name="cbutton" id="cbutton" type="button" variant="primary" onClick={()=>confirmCheckout(true)}>{t('Complete order')}</Button>
                                        </div>
                                    </div>
                                </>
                                :
                                ''
                            }
                        </>
                    :
                    ''
                    }
                </div>
            </div>
        </div>       
        </>
    )
}

export default Cart;