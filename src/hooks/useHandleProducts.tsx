import { removeProductFromCart } from "@/redux/features/products/productSlice";
import { useAppDispatch } from "@/redux/hook";


const useHandleProducts = () => {
  const dispatch = useAppDispatch();


  // remover product from cahce 
  const handleRemoveFromCart = (id: string[]) => {
    dispatch(removeProductFromCart(id));
  };


  return {handleRemoveFromCart}
};

export default useHandleProducts;

