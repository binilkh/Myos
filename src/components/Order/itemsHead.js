import React from "react";
import { useTranslation } from "react-i18next";
import Items from "./item";

const ItemHeads = (props) => {
    const {item,items,index} = props;
    const { t, i18n } = useTranslation();
    const detailItem = items ? items.filter((el)=>el.id===item):[];
    const headItem = items ? items.find((el)=>el.id===item):{};
    const timeFormat = headItem && new Date(headItem.date);
    return(
        <>
        <hr className="my-2"/>
        <div className="row">
            <div className="col-md-1 col-lg-1 col-xl-1 d-flex">
                <h6 className="text-black mb-0">#{index+1}</h6>
            </div>
            <div className="col-md-4 col-lg-4 col-xl-4 d-flex">
                <h6 className="text-black mb-0">email:&nbsp;{headItem && headItem.email}</h6>
            </div>
            <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                <h6 className="text-black mb-0">Amount:&nbsp;{(headItem && headItem.totalPrice === 0) ? "" : new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(headItem && headItem.totalPrice)}</h6>
            </div>
            <div className="col-md-4 col-lg-4 col-xl-4 d-flex">
                <h6 className="text-black mb-0">Date:&nbsp;{timeFormat && timeFormat.toLocaleString('en-US',{dateStyle: 'medium'})}</h6>
            </div>
        </div>
        <hr className="my-2"/>
        {
            detailItem && detailItem.length > 0 ?
            detailItem.map((dItem,index)=>
                <Items item={dItem} key={index} items={items}/>
            )
            :
            ''
        }
        </>
    );
}

export default ItemHeads;