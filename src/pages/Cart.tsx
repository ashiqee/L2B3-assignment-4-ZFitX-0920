import { Button } from '../components/ui/button';
import { img } from '@/static/pageContent';
import { NotepadText, Trash } from 'lucide-react';
import PageBanner from '@/components/reusableComponents/PageBanner';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '@/redux/hook';
import {
  addProductCart,
  removeProductFromCart,

} from '@/redux/features/products/productSlice';
import { useState } from 'react';

import useCartData from '@/hooks/useCartData';

const Cart = () => {
  const dispatch = useAppDispatch();
   const {cartsProducts,totalAmount}= useCartData()
   const [noteTrue,setNoteTrue]= useState(false)

  


    // add card new or exiting 
    const handleAddToCart = (id:string,qty:number) => {
          dispatch(addProductCart({ productId: id, quantity:  qty }));
    };
  
  
  const handleRemoveFromCart = (id: string) => {
    dispatch(removeProductFromCart(id));
  };

  return (
    <div>
      <PageBanner bannerTitle={''} img={img} />

      {cartsProducts?.length > 0 ? (
        <div className="py-5 flex flex-col container mx-auto justify-between h-full">
          <div className="flex justify-between  border-b-[1px] mb-6 py-4 items-center px-6 md:text-xl">
            <p>Product details</p>
            <p>Quantity</p>
           
          </div>
          <div className=" flex px-2   flex-col gap-3  ">
            {cartsProducts?.length > 0 ? (
              cartsProducts?.map((product) => (
                <div
                  key={product._id}
                  className="flex border hover:bg-primary/5 justify-between items-center px-4 rounded-lg shadow-2xl "
                >
                  <div className="flex  w-[5060px]  items-center   gap-2">
                    <button
                      onClick={() => handleRemoveFromCart(product._id)}
                      className="text-2xl flex-end text-right hover:text-primary text-white"
                    >
                      <Trash />
                    </button>
                    <Link to={`/products/${product._id}`}>
                      {' '}
                      <img
                        className="md:min-w-28 min-w-20 max-h-24 hover:scale-150 hover:cursor-pointer object-cover h-28"
                        src={product?.p_images}
                      />
                    </Link>
{/* prodcut price details block  */}
                    <div className="">
                      <div className=" p-1 space-y-1 md:p-3">
                        <h4 className="md:text-sm hover:text-white text-[12px]  text-primary">
                        <Link to={`/products/${product._id}`}>
                          {product.p_name}
                          </Link>
                        </h4>
                        <p className="text-white  text-[12px]">
                          Catergory: {product.p_category}
                        </p>
                        <p className="text-white  md:text-[26px] pb-2  gap-3  text-md">
                          ${product.p_price * product.quantity}
                        </p>
                     
                       
                      </div>
                    </div>
                    {/* prodcut price details block end */}
                  </div>
                  <div className=" md:flex   justify-center text-md gap-4 text-white items-center  font-semibold text-center">
                    <div className="flex  flex-col-reverse justify-between text-md text-white items-center  p-2 my-2 w-12 font-semibold text-center">
                      <button
                       disabled={product.quantity === 1}
                        onClick={() =>handleAddToCart(product._id,-1)
                        }
                      >
                        -
                      </button>
                      <span>{product.quantity}</span>
                      <button
                        disabled={product.p_stock === product.quantity}
                        onClick={() =>handleAddToCart(product._id,+1)
                        }
                      >
                        +
                      </button>
     
                    </div>
                  </div>
                  {/* <div className=" p-3">
                    <p className="text-white w-full text-[26px] pb-2  gap-3 flex-end text-right items-center text-md">
                      ${product.p_price * qty[i]}
                    </p>
                  </div> */}
                </div>
              ))
            ) : (
              <p className="text-center text-2xl py-20">Your cart is empty! </p>
            )}
          </div>

          {/* check out  */}
          <div className="border-t-[1px] flex justify-between gap-4 p-2 md:p-10 text-white mt-6 ">
            <div className="  md:w-[30vw] space-y-4 py-4 w-full">
              <Label onClick={()=>setNoteTrue(!noteTrue)} className="flex gap-2 items-center" htmlFor="message">
                <NotepadText /> Add note
              </Label>
            {
              noteTrue &&   <Textarea placeholder="Type your message here." id="message" />
            }
            </div>
            <div className="space-y-4 w-full md:max-w-96 py-4">
              <h4 className=" text-md md:text-2xl flex  justify-between items-center">
                Sub Total: <span>${totalAmount ? totalAmount : '00'}</span>
              </h4>
              <p>Free delivery</p>
              <Link to="/checkout">
                <Button className="w-full my-2">Check Out</Button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-[50vh] flex justify-center items-center">
          Your cart is empty please shop now
        </div>
      )}
    </div>
  );
};

export default Cart;
