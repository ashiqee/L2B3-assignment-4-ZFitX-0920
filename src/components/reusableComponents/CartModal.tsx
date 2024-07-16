import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '../ui/button';

import { Trash } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
 
  removeProductFromCart,
  useCurrentCart,
} from '@/redux/features/products/productSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { useGetCartsProductsQuery } from '@/redux/features/products/productApi';
import { useEffect, useState } from 'react';
import { AddProductCartAction, TProduct } from '@/types/Interface';

import { Dispatch } from 'redux';

type SetIsStockFunction = (isStock: number) => void;

interface Payload {
  productId: string;
  quantity: number;
}

interface TCartModalProps {
  handleAddToCart?: () => void;
  ifcart: number;
  btnTitle: string;
  handleIncrementQty: (
    id: string,
    pQty: number,
    isStock: number,
    setIsStock: SetIsStockFunction,
    dispatch: Dispatch<AddProductCartAction>,
    addProductCart: (payload: Payload) => AddProductCartAction
  ) => void;
  handleDecrementQty: (
    id: string,
    pQty: number,
    isStock: number,
    setIsStock: SetIsStockFunction,
    dispatch: Dispatch<AddProductCartAction>,
    addProductCart: (payload: Payload) => AddProductCartAction
  ) => void;
  isStock: number;
  setIsStock: SetIsStockFunction,
  dispatch: Dispatch<AddProductCartAction>;
  addProductCart: (payload: {
    productId: string;
    quantity: number;
  }) => AddProductCartAction;
}





const CartModal:React.FC<TCartModalProps> = ({
  handleAddToCart,
  ifcart,
  btnTitle,
  handleIncrementQty,
  handleDecrementQty,
  isStock,
  setIsStock,
  addProductCart,
}) => {
  const carts = useAppSelector(useCurrentCart);
  const dispatch = useAppDispatch();
  const [qty, setQty] = useState<number[]>([]);

  const productIds = carts.items.map((product) => product.productId);
  const {
    data: cartsProductDetails,
    isLoading,
    isError,
  } = useGetCartsProductsQuery(productIds);

  useEffect(() => {
    //quantities from cart item for localstorage
    const newQty = carts?.items?.map((product) => product.quantity);

    //  console.log(newQty);

    setQty(newQty)
  }, [carts]);

  const totalItems = qty?.reduce((total, quantity) => total + quantity, 0);

  const totalAmount = cartsProductDetails?.data?.reduce((total:number, product:TProduct, i:number) => {
    return total + product.p_price * qty[i];
  }, 0);

  const handleRemoveFromCart = (id: string) => {
    dispatch(removeProductFromCart(id));
  };

  return (
    <Dialog>
      <DialogTrigger>
        {' '}
        <Button onClick={handleAddToCart}>{btnTitle}</Button>
      </DialogTrigger>
      <DialogContent className=" ">
        <DialogHeader>
          <DialogTitle className="text-2xl">Shopping Cart</DialogTitle>
          <DialogDescription className="py-5 flex flex-col justify-between h-full">
            {isLoading ? (
              <div>Loading...</div>
            ) : isError ? (
              <div className="text-center space-y-10">
                <p className="text-red-600 text-xl">
                  Your shopping cart is empty!
                </p>
                <div>
                  <Link to="/products">
                    <Button>Please Go Shop</Button>
                  </Link>
                </div>
              </div>
            ) : (
              <div className="md:max-h-[260px] 2xl:min-h-[460px] flex  flex-col gap-3  overflow-x-hidden scrollbar-hide">
                {cartsProductDetails?.data?.map((product:TProduct, i:number) => (
                  <div className="flex justify-between text-left bg-base-300 border-[0.1px] px-4 p-3 rounded-lg shadow-2xl ">
                    <div className="flex  gap-2">
                      <img
                        className="w-28 object-cover h-28"
                        src={product.p_images[0]}
                      />
                      <div className="space-y-2">
                        <Link to={`/products/${product._id}`}>
                          {' '}
                          <h4 className="text-[12px]   md:text-sm text-primary">
                            {product.p_name.slice(0, 15)}
                          </h4>
                        </Link>
                        <div>
                          <p className="text-white md:text-md">
                            ${product.p_price}
                          </p>
                        </div>
                        <div className=" flex justify-between text-md text-white items-center outline-1 outline p-1 md:p-2 md:my-2 max-w-20 md:w-28 font-semibold text-center">
                          <button
                            onClick={() =>
                              handleDecrementQty(
                                
                                product._id,
                                qty[i],
                                product.p_stock,
                              
                                setIsStock,
                                dispatch,
                                addProductCart,
                              )
                            }
                          >
                            -
                          </button>
                          <span>{qty[i]}</span>
                          <button
                            // disabled={
                            //   product?.p_stock === 0 || (isStock - ifcart) === 0
                            // }
                            onClick={() =>
                              handleIncrementQty(
                                product._id,
                                qty[i],
                                product.p_stock,
                               
                                setIsStock,
                                dispatch,
                                addProductCart,
                              )
                            }
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="flex-col flex-end h-full md:w-full w-24  items-end justify-between flex md:p-3">
                      <button
                        onClick={() => handleRemoveFromCart(product._id)}
                        className="md:text-2xl  text-right hover:text-primary text-white"
                      >
                        <Trash className='text-[8px]' />
                      </button>
                      <p className="text-white text-[12px] text-right md:text-[16px] pb-2 flex gap-3 items-center text-md">
                        Sub Total: ${qty?.[i] * product.p_price}
                      </p>
                    </div>
                  </div>
                ))}

                {/* {carts?.items} */}
              </div>
            )}
            {/* check out  */}
            {totalItems > 0 && (
              <div className="border-t-2 text-white mt-6 ">
                <div className="space-y-3 text-right py-4">
                  <p>Total Items: {totalItems} </p>
                  <h4 className="text-2xl ">
                    Total: <span>${totalAmount ? totalAmount : '0.00'}</span>
                  </h4>
                  <p>Free delivery</p>
                  <div className="flex items-center gap-4">
                    <Link className="w-full" to="/cart">
                      <Button className="w-full">View Cart</Button>
                    </Link>
                    <Link className="w-full" to="/checkout">
                      <Button className="w-full">Check Out</Button>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CartModal;
