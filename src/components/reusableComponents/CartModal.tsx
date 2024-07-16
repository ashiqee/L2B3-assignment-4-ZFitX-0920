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
import { removeProductFromCart } from '@/redux/features/products/productSlice';
import { useAppDispatch } from '@/redux/hook';
import useCartData from '@/hooks/useCartData';
import { addProductCart } from '@/redux/features/products/productSlice';

interface TCartModalProps {
  btnTitle: string;
  productId: string;
  ifcart:number;
}

const CartModal: React.FC<TCartModalProps> = ({ btnTitle, productId,ifcart }) => {
  const dispatch = useAppDispatch();
  const { cartsProducts, totalAmount } = useCartData();

 
  // add card new or exiting
  const handleAddToCart = (productId: string, qty: number) => {
    dispatch(addProductCart({ productId: productId, quantity: qty }));
  };
 

  const handleRemoveFromCart = (id: string[]) => {
    dispatch(removeProductFromCart(id));
  };

  return (
    <Dialog>
      <DialogTrigger>
        {' '}
        <Button onClick={ifcart > 0 ? undefined : () => handleAddToCart(productId, 1)} >
          {btnTitle}
        </Button>
      </DialogTrigger>
      <DialogContent className=" ">
        <DialogHeader>
          <DialogTitle className="text-2xl">Shopping Cart</DialogTitle>
          <DialogDescription className="py-5 flex flex-col justify-between h-full">
            {totalAmount === 0 ? (
              <div>Your cart is empty</div>
            ) : (
              <div className="md:max-h-[260px] 2xl:min-h-[460px] flex  flex-col gap-3  overflow-x-hidden scrollbar-hide">
                {cartsProducts?.map((product) => (
                  <div
                    key={product._id}
                    className="flex justify-between text-left bg-base-300 hover:bg-primary/5 border-[0.1px] px-4 p-3 rounded-lg shadow-2xl "
                  >
                    <div className="flex justify-between  w-full  md:gap-4">
                      <div className="flex gap-2 w-1/2">
                        <button
                          onClick={() => handleRemoveFromCart([product._id])}
                          className="md:text-2xl  text-right hover:text-primary text-white"
                        >
                          <Trash size={20} />
                        </button>
                        <Link
                          className="w-28  h-28"
                          to={`/products/${product._id}`}
                        >
                          <img
                            className="w-28 h-28 object-cover hover:scale-110"
                            src={product?.p_images?.[0] ?? '#'} alt="Product Image" 
                          />
                        </Link>
                      </div>
                      <div className="space-y-2 ml-8 md:ml-0 p-1 w-full ">
                        <Link to={`/products/${product._id}`}>
                          {' '}
                          <h4 className="text-[12px]   md:text-sm text-primary">
                            {product?.p_name?.slice(0, 15)}
                          </h4>
                        </Link>

                        <p className="text-white text-[14px] text-right md:text-[16px] pb-2 flex gap-3 items-center text-md">
                          ${product.quantity * product.p_price}
                        </p>

                        <p className="text-white  text-[12px]">
                          Catergory: {product.p_category}
                        </p>
                      </div>
                      <div className=" flex flex-col-reverse justify-between text-md text-white items-center  p-1 md:p-2 md:my-2 max-w-20 md:w-28 font-semibold text-center">
                        <button
                           disabled={
                            ifcart <= 0
                         }
                          onClick={() => handleAddToCart(product._id, -1)}
                        >
                          -
                        </button>
                        <span>{product?.quantity}</span>
                        <button
                          disabled={
                            product?.p_stock === 0 || (product.p_stock - ifcart) === 0
                          }
                          onClick={() => handleAddToCart(product._id, +1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                {/* {carts?.items} */}
              </div>
            )}
            {/* check out  */}
            {cartsProducts?.length > 0 && (
              <div className="border-t-2 text-white mt-6 ">
                <div className="space-y-3 text-right py-4">
                  <p>Total Items: {10} </p>
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
