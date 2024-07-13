import { RootState } from "@/redux/store";
import { createSlice,PayloadAction  } from "@reduxjs/toolkit";

interface TCartItem{
    productId: string;
    quantity:number;
    
}

type TCartState = {

    items:TCartItem[];
    loading: boolean;
    error: string | null;
    
}


const initialState: TCartState= {
    items:[],
    loading:false,
    error:null
 
}

const cartSlice = createSlice({
    name: 'carts',
    initialState,
    reducers:{
       addProductCart: (state,action: PayloadAction<TCartItem>)=>{
     
        const {productId,quantity}=action.payload;

       const exitstingItem = state.items.find(item=> item.productId === productId);
       if(exitstingItem){
        exitstingItem.quantity = quantity;
       }else{
        state.items.push({productId,quantity})
       }

        
        
       },
       removeProductFromCart:(state,action: PayloadAction<string>)=>{
        state.items = state.items.filter(item=>item.productId !== action.payload);
       }
    }
})


export const {addProductCart,removeProductFromCart}= cartSlice.actions;

export default cartSlice.reducer;

export const useCurrentCart = (state: RootState)=>state.carts;
