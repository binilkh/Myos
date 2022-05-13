import React,{ useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import { getOrder } from "../../services/itemService";
import { useTranslation } from "react-i18next";
import ItemHeads from "./itemsHead";

const Order = (props) => {
    const [ items, setItems ] = useState([]);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { t, i18n } = useTranslation();
    useEffect(() => {
        async function fetchData() {
            const searchResult = await getOrder('');
            if(items && items.length === 0){
                setItems(searchResult);
            }
        }
        fetchData();
    },[]);
   
    const onSubmit = async (data,e) => {
        const {email} = data;
        const searchResult = await getOrder(email);
        setItems(searchResult);
        reset({ itemName:''});
    }
    var itemHeadArray = [];
    if(items && items.length > 0){
        itemHeadArray =  items.map(e=>e.id);
    }
    const uniqueHeads = [...new Set(itemHeadArray)];
    return(
        <section className="sliders mb-sm-4" data-testid="parent">
            <div className="container py-2 h-100">
            <div className="row">
                {t('My Orders')}
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-12 d-md-block d-lg-block d-xl-block">
                                    <form onSubmit={handleSubmit(onSubmit)} name="rform">
                                        <div className="row">
                                            <div className="col-md-2">
                                            <label htmlFor="Filter by">{t('Filter by email')}</label>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                <input className="form-control" style={{'width':'80%'}} type="text" name="email" id="email" {...register("email",{required: {value:true, message:'This field is Required'} })}/>
                                                    {errors.email && (
                                                    <p >{errors.email.message}</p>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <Button name="sbutton" id="submit" type="submit" variant="primary">{t('Search')}</Button>&nbsp;
                                                    <Button name="rbutton" id="reset" type="reset" variant="primary">{t('Clear')}</Button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                        
                                        </div>
                                    </form>
                                </div>
                                </div>
                                <hr className="my-2"/>
                            {
                                uniqueHeads && uniqueHeads.length > 0 ?
                                uniqueHeads.map((item,index)=>
                                    <ItemHeads item={item} index={index}  key={index} items={items}/>
                                )
                                :
                                ''
                            }
                            
                        </div>
                    </div>
                </div> 
            </div>
            </div>
        </section>
    )
}

export default Order;