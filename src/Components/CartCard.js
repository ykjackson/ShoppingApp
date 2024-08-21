import {useEffect, useState} from 'react';
import {AiFillDelete} from "react-icons/ai";
import {remove} from '../redux/slices/cartSlice';
import { useDispatch } from 'react-redux';
export default function CartCard({data,quantity}){
    const [selected,setSelected]=useState(false);
    const dispatch=useDispatch();
    function changeHandler(id){
        dispatch(remove(id));
    }
    const [datadispaly,setDatadisplay]=useState(false);
    function screenFunc(){
        if(window.innerWidth<712){
            console.log("kumar");
            setDatadisplay(true);
        }
        else{
            console.log("sagar");
            setDatadisplay(false);
        }
        return ()=>window.removeEventListener("resize",screenFunc);
    }
    window.addEventListener("resize",screenFunc);
    return(
        <div className="w-[90%] flex items-center p-5 gap-2 border-black border-b-2">
            <div className='w-2/5'><img src={data.image} className="w-[80%] h-[200px]"></img></div>
                <div className='w-3/5'>
                    <p className="font-bold">{data.title}</p>
                    <p className="text-sm text-gray-400 min-h-[80px]">{(datadispaly)?(data.description.substring(0,100)):(data.description)}</p>
                    <div className='w-full flex justify-between'>
                        <span className="text-green-500 font-bold">{`$${data.price}`}</span>
                        <span className='font-bold text-purple-950 text-2xl'>{quantity}</span>
                        <div className='p-2 bg-red-300 rounded-full hover:bg-red-600'><AiFillDelete onClick={()=>{changeHandler(data.id)}}/></div>
                    </div>
                <div>
            </div> 
            </div>
        </div>
    )
}