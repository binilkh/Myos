import React,{ useState } from "react";
import { siteUrl } from '../Constants';
import "./shop.css";
const Items = (props) => {
    const [num, setNum] = useState(1);
    const {item, cartItems, addTocart,index} = props;
    const incNum = () =>{
        setNum(parseInt(num)+1);
    };
    const decNum = () => {
        if(num>1){
          setNum(parseInt(num) - 1);
        }
    }
    const handleChange = (val) => {
       setNum(val);
    }
    const handleSubmit = (data) => {
        const {title,description,price,id} = data;
        const itemsPrice = (parseInt(num)*price);
        const cartItem = {
            title : title,
            description : description,
            quantity: num,
            itemPrice : itemsPrice,
            id : id
        }
        cartItems.push(cartItem);
        addTocart(cartItems);
    }
    return(
        <>
        <div className="row" key={index}>
        <div className="col-md-2 col-lg-2 col-xl-2 col-xs-2">
            <img src={`${siteUrl}/images/${item && item.image}`}
                className="img-fluid rounded-3" alt="Cotton T-shirt"/>
        </div>
        <div className="col-md-3 col-lg-3 col-xl-3 col-xs-3">
            <h6 className="text-muted">{item && item.title}</h6>
            <h6 className="text-black mb-0">{item && item.description}</h6>
        </div>
        <div className="col-md-3 col-lg-3 col-xl-3 col-xs-3 d-flex" style={{'padding':'0px'}}>
            <div className="row">
                <div className="col-md-3 col-lg-3 col-xl-3 col-xs-3" style={{'padding':'0px'}}>
                    <button className="btn btn-link px-2" id="dec" onClick={()=>decNum()}>
                        <i className="fa fa-minus"></i>
                    </button>
                </div>
                <div className="col-md-5 col-lg-5 col-xl-5 col-xs-5" style={{'padding':'0px'}}>
                <input id="form1" min="1" name="quantity" value={num} type="text" className="form-control form-control-sm" onChange={(e)=>handleChange(e.target.value)}/>
                </div>
                <div className="col-md-4 col-lg-4 col-xl-4 col-xs-4" style={{'padding':'0px'}}>
                <button className="btn btn-link px-2" id="inc" onClick={()=>incNum()}>
                    <i className="fa fa-plus"></i>
                </button>
                </div>
            </div>
        </div>
        <div className="col-md-2 col-lg-2 col-xl-2 col-xs-2">
            <h6 className="mb-0">{(item && item.price === 0) ? "" : new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(item && item.price)}</h6>
        </div>
        <div className="col-md-2 col-lg-2 col-xl-2 col-xs-2" >
            <a href="#" className="text-muted" id="addToCart" onClick={()=>handleSubmit(item)}><i className="fa fa-shopping-cart"></i></a>
        </div>
    </div>
    <hr className="my-2"/>
    </>
    )
}


export default Items;