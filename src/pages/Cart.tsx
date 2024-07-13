import { Button } from '../components/ui/button';
import { img } from '@/static/pageContent';
import { NotepadText, Trash } from 'lucide-react';
import PageBanner from '@/components/reusableComponents/PageBanner';
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Link } from 'react-router-dom';
import { useGetCartsProductsQuery } from '@/redux/features/products/productApi';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { addProductCart, removeProductFromCart, useCurrentCart } from '@/redux/features/products/productSlice';
import { useEffect, useState } from 'react';
import { handleDecrementQty, handleIncrementQty } from '@/utils/quantityUtils';
 

const Cart = () => {
  const dispatch=useAppDispatch()
  const carts = useAppSelector(useCurrentCart);
 const productIds = carts.items.map((product)=>product.productId) 
const { data:cartsProductDetails}= useGetCartsProductsQuery(productIds)
const [qty, setQty] = useState([]);
const [quantity,setQuantity] = useState(1)
const [isStock,setIsStock] = useState(1)

console.log(carts?.items[0]?.quantity);


useEffect(() => {

  
  //quantities from cart item for localstorage
  const newQty = carts?.items?.map((product) => product.quantity);
  //  console.log(newQty);

  setQty(newQty);
}, [carts]);

const totalItems = qty?.reduce((total, quantity) => total + quantity, 0);

  const totalAmount = cartsProductDetails?.data?.reduce((total, product, i) => {
    return total + product.p_price * qty[i];
  }, 0);

  const handleRemoveFromCart = (id) => {
    dispatch(removeProductFromCart(id));
    
  };



  return (
    <div>
      <PageBanner img={img} />
  
  {
    totalItems>0 ?     <div className="py-5 flex flex-col container mx-auto justify-between h-full">
    <div className='flex justify-between border-b-2 mb-6 py-4 items-center px-6 text-xl'>
              <p>Product</p>
              <p>Quantity</p>
              <p>Total</p>
          </div>
      <div className=" flex  flex-col gap-3  ">
        
       {
        carts?.items.length > 0 ?  cartsProductDetails?.data?.map((product,i)=>(
          <div key={i} className="flex justify-between items-center px-4 rounded-lg shadow-2xl ">
          <div className="flex  items-center   gap-2">
           <Link to={`/products/${product._id}`}> <img className="min-w-28 hover:scale-150 hover:cursor-pointer object-cover h-28" src={product.p_images[0]} /></Link>
            <div className="space-y-2">
              <h4 className="text-sm w-full  text-primary">{product.p_name}</h4>
              <div className="w-full">
                <p className="text-white  text-md">${product.p_price}</p>
                <p className="text-white  text-md">Catergory: {product.p_category}</p>
              </div>
             
            </div>
          
          </div>
          <div className=" flex w-full justify-between text-md gap-4 text-white items-center  font-semibold text-center">
                <div className='flex justify-between text-md text-white items-center outline-1 outline p-2 my-2 w-28 font-semibold text-center'>
                <button onClick={()=>handleDecrementQty(product._id,qty[i], product.p_stock, setQuantity, setIsStock, dispatch, addProductCart)}>-</button>
                <span>{qty[i]}</span>
                <button onClick={() => handleIncrementQty(product._id,qty[i], product.p_stock, setQuantity, setIsStock, dispatch, addProductCart)}>+</button>
           
                </div>
                <button onClick={()=>handleRemoveFromCart(product._id)} className="text-2xl flex-end text-right hover:text-primary text-white">
              <Trash />
            </button>
              </div>
          <div className=" p-3">
           
            <p className="text-white w-full text-[26px] pb-2 flex gap-3 items-center text-md">
               ${product.p_price*qty[i]}
            </p>
          </div>
        </div>
        )) : <p className='text-center text-2xl py-20'>Your cart is empty! </p>
       }
      
      </div>

      {/* check out  */}
      <div className="border-t-2 flex justify-between p-10 text-white mt-6 ">
      <div className="grid w-[30vw] gap-1.5">
    <Label className='flex gap-2 items-center' htmlFor="message"><NotepadText/> Add note</Label>
    <Textarea placeholder="Type your message here." id="message" />
  </div>
       <div className="space-y-4  py-4">
          <h4 className="text-2xl flex  justify-between items-center">
            Sub Total: <span>${totalAmount ? totalAmount: "00"}</span>
          </h4>
          <p>Free delivery</p>
          <Link to='/checkout'>
          <Button className="w-full my-2">Check Out</Button>
          </Link>
        </div>
      </div>
    </div> : <div className='min-h-[50vh] flex justify-center items-center'>Your cart is empty please shop now</div>
  }
    </div>
  );
};

export default Cart;
