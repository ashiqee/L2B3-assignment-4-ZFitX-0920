import { createSlice,PayloadAction  } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface TProduct{
    p_name: string;
    p_description:string;
    p_category:string;
    p_images:string[];
    p_price:number;
    p_stock:number;
    p_isDeleted: boolean;
}

type TProductState = {

    products: TProduct[];
    loading: boolean;
    error: string | null;
    
}


const initialState: TProductState= {
    products:[],
    loading:false,
    error:null
 
}

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers:{
       addProducts: (state,action: PayloadAction<TProduct>){

       }
    }
})


export const {}= productSlice.actions;

export default productSlice.reducer;


