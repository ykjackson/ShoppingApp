import { useEffect, useState } from "react";
import Card from './Card';
function Loader(){
    return(
        <div className="spinner"></div>
    )
}
export default function CompBody(){
    const url="https://fakestoreapi.com/products";
    const [apiData,setApiData]=useState([]);
    const [loading,setLoading]=useState(false);
    async function callApi(){
        try{
        setLoading(true);
        const object=await fetch(url);
        const data=await object.json();
        console.log(data);
        setApiData(data);
        setLoading(false);
        }
        catch(e){
            alert("Data not found");
            setApiData([]);
        }
    }
    useEffect(()=>{
        callApi();
    },[]);

    return(
        <div className="w-full flex justify-center">
             {!loading?
             (<div className="w-[70%] flex flex-wrap justify-center items-start gap-3 p-4">
                {apiData.map((element)=>{
                    return(
                    <Card key={element.id} data={element}/>
                    )
                    }) 
                }
            </div> )
            :<Loader/>}
        </div>
    )
}