import {AiOutlineShoppingCart} from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState} from "react";
import { useEffect } from "react";
export default function Navbar(){
    const cartArray=useSelector((state)=>state.cart);
    const [totalItems,setTotalItems]=useState(0);
    useEffect(()=>{
        let count=0;
        cartArray.forEach(element => {
            count +=element.quantity;
        });
        // totalItems=count;
        setTotalItems(count);
    },[cartArray]);
    return(
        <div className="w-full flex justify-evenly items-center p-1 bg-blue-900 text-white font-bold">
            <NavLink to="/"><img src="shopping.png"></img></NavLink>
            <div className="flex gap-3 items-center">
                <NavLink to="/"><span>Home</span></NavLink>
                <NavLink to="/cart"><div className="relative"><AiOutlineShoppingCart /><span className=" flex justify-center items-center absolute -top-4 -right-3 bg-red-500 rounded-full font-bold w-[18px] h-[18px] text-[13px] text-white">{totalItems}</span></div></NavLink>
            </div>
        </div>
    )
};