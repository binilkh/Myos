import React,{ useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Cart from "../Cart";
import Button from "react-bootstrap/Button";
import { getItems } from "../../services/itemService";
import { useTranslation } from "react-i18next";
import Items from "./items";
import "./shop.css";

const Shop = (props) => {
    const sessionCart = JSON.parse(sessionStorage.getItem('elCart')) || [];
    const [ cart, setCart ] = useState(sessionCart);
    const [ items, setItems ] = useState([]);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { t, i18n } = useTranslation();
    const addTocart = cartItem => {
        setCart([...cartItem]);
        sessionStorage.setItem('elCart',JSON.stringify(cartItem))
    }
    const onSubmit = async (data, e) => {
        const {itemName} = data;
        const searchResult = await getItems(itemName);
        setItems(searchResult);
        reset({ itemName:''});
    }

    useEffect(() => {
        async function fetchData() {
            const searchResult = await getItems('');
            if(items && items.length === 0){
                setItems(searchResult);
            }
        }
        fetchData();
    });
    
    return(
        <section className="sliders mb-sm-4" data-testid="parent">
            <div className="container py-2 h-100">
            <div className="row">
                {t('Shop')}
            </div>
            <div className="row">
                <div className="col-md-12" style={{"padding":"0px"}}>
                    <div className="row">
                        <div className="col-md-9">
                            <div className="row">
                                <div className="col-md-12 d-md-block d-lg-block d-xl-block d-xs-block" style={{'padding':'0px'}}>
                                    <form onSubmit={handleSubmit(onSubmit)} name="rform">
                                        <div className="row">
                                            <div className="col-md-3" style={{'padding':'0px'}}>
                                            <label htmlFor="Filter by">{t('Filter by title/description')}</label>
                                            </div>
                                            <div className="col-md-4" style={{'padding':'0px'}}>
                                                <div className="form-group">
                                                    <input className="form-control" style={{'width':'80%'}} type="text" name="itemName" id="itemName" {...register("itemName",{required: {value:true, message:'This field is Required'} })}/>
                                                        {errors.itemName && (
                                                        <p >{errors.itemName.message}</p>
                                                        )}
                                                </div>
                                            </div>
                                            <div className="col-md-5" style={{'padding':'0px'}}>
                                                <div className="form-group">
                                                    <Button name="sbutton" type="submit" variant="primary">{t('Search')}</Button>&nbsp;
                                                    <Button name="rbutton" type="reset" variant="primary">{t('Clear')}</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                </div>
                                <hr className="my-2"/>
                            {
                                items && items.length > 0 ?
                                items.map((item,index)=>
                                    <Items item={item} key={index} index={index} addTocart={addTocart} cartItems={cart}/>
                                )
                                :
                                ''
                            }
                            
                        </div>
                        <div className="col-md-3">
                            <h6><div className="fw-normal mb-0 text-black">{t('Cart')}</div></h6>
                            <Cart cartItems={cart} addTocart={addTocart}/>
                        </div>
                    </div>
                </div> 
            </div>
            </div>
        </section>
    )
}

export default Shop;