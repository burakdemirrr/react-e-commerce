import React from 'react'
import { useDispatch } from 'react-redux';
import { addItemToCart } from "../../features/CartSlice";
import "./Product.css"
const Product = ({item}) => {
  const dispatch=useDispatch();
  return (
    <div className='product'>
        <div className="">
            <img src={item.img} alt="" />
        </div>
        <div className="description">
                <h2 className="title" >{item.name}</h2>
                <p className="price">${item.price}</p>
                <button class="cta" onClick={
                  ()=>{
                    alert("haha")
                    dispatch(addItemToCart({item}))
                }
                  }>
  <span class="hover-underline-animation"> Add To Cart</span>
  <svg id="arrow-horizontal" xmlns="http://www.w3.org/2000/svg" width="30" height="10" viewBox="0 0 46 16">
    <path id="Path_10" data-name="Path 10" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" transform="translate(30)"></path>
  </svg>
</button>
            </div>
    </div>
  )
}

export default Product