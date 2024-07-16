import { useGetCartsProductsQuery } from "@/redux/features/products/productApi";
import { TCartState, useCurrentCart } from "@/redux/features/products/productSlice";
import { useAppSelector } from "@/redux/hook";
import { TCartItem, TProduct } from "@/types/Interface";

import { PersistPartial } from "redux-persist/es/persistReducer";

interface TCartsProductsItems extends TCartItem{
    _id: string;
    p_name: string;
    p_category: string;
    p_images: string;
    p_price: number;
    p_stock:number;
}

interface UseCartDataResult{
    cartsProducts: TCartsProductsItems[];
    currentCarts: TCartState & PersistPartial;
    totalAmount:number;
    totalCartItems:number
}

const useCartData = ():UseCartDataResult => {
   
    const currentCarts = useAppSelector(useCurrentCart);
    const productIds = currentCarts.items.map((product) => product.productId);
    const { data,isLoading } = useGetCartsProductsQuery(productIds);


    if(isLoading){
        <>Loading...</>
    }

    const getCartsProducts = data?.data
   
    
    // combined cart 
    const cartsProducts:TCartsProductsItems[] = currentCarts.items.map((cartItem)=>{
        const products = getCartsProducts?.find((product:TProduct)=>product._id === cartItem.productId)
        return {
            ...cartItem,
            ...products,
        } as TCartsProductsItems;
    })


    
    const totalCartItems = cartsProducts?.reduce((total:number,item:TCartsProductsItems)=>{
        return total + item.quantity
    },0)

   
    const totalAmount = cartsProducts?.reduce(
        (total: number, item: TCartsProductsItems) => {
             
          return total + item.p_price * item.quantity;
        },
        0,
      );




    return {cartsProducts,currentCarts,totalAmount,totalCartItems}
};

export default useCartData;