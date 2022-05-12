import React from "react";
import { useTranslation } from "react-i18next";
import { siteUrl } from "../Constants";

const Items = (props) => {
    const {item } = props;
    const { t, i18n } = useTranslation();
    return(
        <div className="row">
            <div className="col-md-2 col-lg-2 col-xl-2  col-xs-2">
                <img src={`${siteUrl}/images/${item ? item.image : ''}`}
                    className="img-fluid rounded-3" alt="Cotton T-shirt"/>
            </div>
            <div className="col-md-3 col-lg-3 col-xl-3 col-xs-3">
                <h6 className="text-muted">{item ? item.title : ''}</h6>
            </div>
            <div className="col-md-4 col-lg-4 col-xl-4 col-xs-4">
                <h6 className="text-black mb-0">{item ? item.description : ''}</h6>
            </div>
            <div className="col-md-1 col-lg-1 col-xl-1 col-xs-1">
                <h6 className="text-black mb-0">{item ? item.quantity : ''}</h6>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 col-xs-2">
                <h6 className="mb-0">{(item && item.price === 0) ? "" : new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(item && item.price)}</h6>
            </div>
        </div>
    )
}
export default Items;