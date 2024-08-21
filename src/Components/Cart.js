import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import CartCard from './CartCard';
import { useState } from 'react';
import { useEffect } from 'react';
// import {TotalItems} from './Navbar';
export default function Cart(){
    const cart=useSelector((state)=>state.cart);
    const [amount,setAmount]=useState(0);
    useEffect(()=>{
        let sum=0;
        cart.forEach(element => {
            sum +=element.item.price*element.quantity;
        });
        setAmount(sum);
    },cart); 
    console.log(cart);
    return(
        <div className=" w-[95%] md:w-[80%] flex  justify-center items-center gap-7">
            {cart.length!=0?
            (<div className='w-full flex flex-col md:flex-row pb-4'>  
                    <div className='w-full md:w-2/3'>
                    {cart.map((element,index)=>{
                        return(
                            <CartCard key={element.index} data={element.item} quantity={element.quantity} />
                        )
                    }) 
                    }
                    </div>
                    <div className=' w-full md:w-1/3 flex flex-col justify-between gap-2'>
                        <div>
                            <p className='text-green-600 font-bold text-2xl'>YOUR CART</p>
                            <h1 className='text-green-600 font-bold text-4xl'>SUMMARY</h1>
                            {/* <p className='font-bold'>Total Items:{TotalItems}</p> */}
                        </div>
                        <div>
                            <p className='font-bold text-gray-700'>Total Amount: <span className='text-black text-xl'>{amount}</span></p>
                            <button className='py-1 px-8 rounded-lg bg-green-600 text-white font-bold'>Checkout Now</button>
                        </div>
                    </div>
            </div>
            ):
            (<div className='flex flex-col  items-center gap-5'>
                <p className='font-bold text-2xl'>Your Cart is Empty</p>
                <NavLink to="/"><button className='py-1 px-3 border-2 border-green-600 rounded-full text-green-600 hover:bg-green-300'>Start Shopping</button></NavLink>
            </div>)
        }
            
            
        </div>
    )
}