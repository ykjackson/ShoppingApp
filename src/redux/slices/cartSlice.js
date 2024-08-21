import {createSlice} from '@reduxjs/toolkit';
export const CartSlice=createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        add:(state,action)=>{
            state.push({item:action.payload,quantity:1});
        },
        addItem:(state,action)=>{
            state.forEach(element=>{
                if(element.item.id==action.payload){
                    element.quantity +=1;
                }
            });
            console.log(state);
        },
        remove:(state,action)=>{
            return state.filter((element)=>element.item.id!=action.payload);
        },
        removeItem:(state,action)=>{
            let i=0;
            state.forEach(element=>{
                if(element.item.id==action.payload){
                    element.quantity -=1;
                }
                if(element.quantity==0){
                    state.splice(i,1);
                }
                i++;
            });
        }
    }
});
export const {add,remove,addItem,removeItem}=CartSlice.actions;
export default CartSlice.reducer;
