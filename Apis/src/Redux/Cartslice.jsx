import {createSlice} from '@reduxjs/toolkit'

const CartData=createSlice({
    name:"cartInfo",
    initialState:{
        cartStorage:[]
    },
    reducers:{
        addTocart:(state,action)=>{
            console.log(action,"-----------------------------------------");
            // let index=cartStorage.findIndex(item=>item.name===item.name)
           const qtycheck= state.cartStorage.findIndex((item)=>item.id===action.payload.id)
           console.log("The Qty is:",qtycheck);
           if(qtycheck){
            action.payload.qtycheck=qtycheck+1;
            state.cartStorage.push(action.payload)
           }
           else{
            state.cartStorage=state.cartStorage
           }
          

        },
        removeProduct:(state,action)=>{
            console.log("action values",action.payload);
            // state.cartStorage=[]
            // state.cartStorage.pop(action.payload)
            // state.cartStorage.splice(ID,1)
            state.cartStorage.splice(state.cartStorage.findIndex((item)=>item.id===action.payload,1))
          
        }
    }
})

export const {addTocart,removeProduct} =CartData.actions
export default CartData.reducer