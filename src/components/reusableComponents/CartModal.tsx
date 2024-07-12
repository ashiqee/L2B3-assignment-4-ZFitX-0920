import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '../ui/button';
import { img } from '@/static/pageContent';
import { Trash } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCurrentCart } from '@/redux/features/products/productSlice';
import { useAppSelector } from '@/redux/hook';
import { useGetCartsProductsQuery } from '@/redux/features/products/productApi';

const CartModal = ({ handleAddtoCart, btnTitle,ifcart }) => {
  const carts = useAppSelector(useCurrentCart);
  const productIds = carts.items.map((product) => product.productId);
  const { data: cartsProductDetails } = useGetCartsProductsQuery(productIds);


  return (
    <Dialog>
      <DialogTrigger>
        {' '}
        <Button onClick={handleAddtoCart}>{btnTitle}</Button>
      </DialogTrigger>
      <DialogContent className=" ">
        <DialogHeader>
          <DialogTitle className="text-2xl">Shopping Cart</DialogTitle>
          <DialogDescription className="py-5 flex flex-col justify-between h-full">
            <div className="md:max-h-[260px] 2xl:max-h-[460px] flex  flex-col gap-3  overflow-x-hidden scrollbar-hide">
             {
              cartsProductDetails?.data?.map((product)=>(
<div className="flex justify-between bg-gray-900 px-4 rounded-lg shadow-2xl ">
                <div className="flex  gap-2">
                  <img className="w-28 object-cover h-28" src={product.p_images[0]} />
                  <div className="space-y-2">
                    <h4 className="text-sm text-primary">{product.p_name}</h4>
                    <div>
                      <p className="text-white text-md">${product.p_price}</p>
                    </div>
                    <div className=" flex justify-between text-md text-white items-center outline-1 outline p-2 my-2 w-28 font-semibold text-center">
                      <button>-</button>
                      <span>{ifcart}</span>
                      <button>+</button>
                    </div>
                  </div>
                </div>
                <div className="flex-col items-end justify-between flex p-3">
                  <button className="text-2xl flex-end text-right hover:text-primary text-white">
                    <Trash />
                  </button>
                  <p className="text-white text-[16px] pb-2 flex gap-3 items-center text-md">
                    Sub Total: ${ifcart*product.p_price}
                  </p>
                </div>
              </div>
              ))
             }
              

              {/* {carts?.items} */}
            </div>

            {/* check out  */}
            <div className="border-t-2 text-white mt-6 ">
              <div className="space-y-4 py-4">
                <h4 className="text-2xl flex  justify-between items-center">
                  Sub Total: <span>$2500</span>
                </h4>
                <p>Free delivery</p>
                <div className="flex items-center gap-4">
                  <Link className="w-full" to="/cart">
                    <Button className="w-full">View Cart</Button>
                  </Link>
                  <Link to="/checkout">
                    <Button className="w-full">Check Out</Button>
                  </Link>
                </div>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CartModal;
