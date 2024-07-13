import MainTttle from '@/components/reusableComponents/MainTttle';
import PageBanner from '@/components/reusableComponents/PageBanner';

import { ShoppingBag } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {reternPolicy } from '@/static/pageContent';

import CartModal from '@/components/reusableComponents/CartModal';
import { useGetSingleProductsQuery } from '@/redux/features/products/productApi';
import {  useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { addProductCart, useCurrentCart } from '@/redux/features/products/productSlice';
import { handleDecrementQty, handleIncrementQty } from '@/utils/quantityUtils';


const ProductDetails = () => {
  const {id} = useParams()
  const {data:product,isLoading}= useGetSingleProductsQuery(id)
  const [mainImgIndex,setMainImg] = useState(0)

  const [qty, setQty] = useState<number[]>([]);
  const [isStock,setIsStock] = useState(product?.data?.p_stock>0?1:0 )
  const dispatch=useAppDispatch()
  const cartsItems = useAppSelector(useCurrentCart);
const cartItem = cartsItems?.items.find(item=>item.productId === id);
  

  useEffect(()=>{
    if(product){
      setIsStock(product?.data?.p_stock)

    }
    const newQty = cartsItems?.items?.map((product) => product.quantity)||[];
    
setQty(newQty)

  },[product,cartsItems])

  if(isLoading){
    return <>Loading...</>
  }

  if(!product){
    return <>Product Not found</>
  }


  const {
    p_name,
    p_description,
    p_category,
    p_images,
    p_price,
    p_stock,
    _id
  } = product.data;

  

  
  // todo thid from cart
  const ifcart = cartItem ? cartItem.quantity:0
  

  const handleAddToCart =()=>{
    dispatch(addProductCart({productId:_id,quantity:ifcart|1}))
  }
  


  return (
    <div>
      <PageBanner bannerTitle ={p_name} img={p_images.length > 1 ? p_images[1]:p_images[0]} />

      {/* product details section  */}
      <section className="py-10 container mx-auto px-4">
        {/* image view */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:flex md:flex-row flex flex-col-reverse xl:gap-6">
            <div className=" space-y-3  flex md:flex-col overflow-y-hidden  md:overflow-x-hidden scrollbar-hide   justify-center  md:min-w-[150px]   max-h-[520px]">
              {p_images?.map((image:string,i:number) => (
                <img
                key={i}
                onClick={()=>setMainImg(i)}
                  className="w-28 mx-auto  min-h-28 object-cover"
                  src={image}
                />
              ))}
            </div>
            <div className=" h-[520px] overflow-hidden  ">
              <img className="h-[520px] hover:scale-125 transition-all duration-500 cursor-pointer w-full object-cover " src={p_images[mainImgIndex]} />
            </div>
          </div>

          {/* detail  */}

          <div className="p-2 space-y-3">
            <MainTttle
              className="subpixel-antialiased"
              title={p_name}
            />
            <p className="text-[15px] subpixel-antialiased text-primary flex gap-2 items-center">
              <ShoppingBag /> 23 Itemssold in last 23 hours
            </p>
            {/* product price  */}
            <h4 className="text-2xl font-bold">
              ${p_price}{' '}
              <span className="line-through text-[14px]">${p_price+350.00}</span>
            </h4>
            <h4 className="text-md font-bold">
             Sub Total: ${ifcart ? p_price*ifcart : p_price }
            
            </h4>
            {/* sort description  */}
            <p>{p_description.slice(0,30)} </p>
            <p>Product Category: {p_category}</p>
            <div className='md:flex gap-4 items-center'>
            <p className="p-1  outline-1 outline my-2 w-28 font-semibold text-center">
            {p_stock>0 ? `${isStock-ifcart} in stock` : `Out of Stock`}
            </p>
           {ifcart>0 &&  <p>You have {ifcart} of this item in your cart.</p>}
            </div>
          

            <div className="flex items-center gap-6">
              <div className=" flex justify-between items-center outline-1 outline p-2 my-2 w-28 font-semibold text-center">
              <button  onClick={()=>handleDecrementQty(_id,qty[0], p_stock, setIsStock, dispatch, addProductCart)}>-</button>
                  <span>{ifcart ? ifcart : 1}</span>
                  <button disabled={p_stock===0 || (isStock-ifcart) ===0}  onClick={() => handleIncrementQty(_id,qty[0], p_stock,setIsStock, dispatch, addProductCart)}>+</button>
             
              </div>
              <CartModal
                btnTitle={ifcart > 0 ? "View cart" : "Add to cart"}
                ifcart={ifcart}
                handleAddToCart={handleAddToCart}
                handleDecrementQty={handleDecrementQty}
                handleIncrementQty={handleIncrementQty}
                isStock={isStock}
             
                setIsStock={setIsStock}
                dispatch={dispatch}
                addProductCart={addProductCart}
              />
            
            </div>
          </div>
        </div>


    {/* decription section  */}
    <section className='py-10 mx-5'>
      <Tabs defaultValue="description" className="w-full">
  <TabsList className='bg-blue-900 mb-5 bg-opacity-10 w-96 flex gap-10 text-left'>
    <TabsTrigger className='md:text-xl hover:text-primary' value="description">Description</TabsTrigger>
    <TabsTrigger  className='md:text-xl hover:text-primary' value="ship">Shipping Information</TabsTrigger>
  </TabsList>
  <TabsContent value="description">{p_description}</TabsContent>
  <TabsContent value="ship">{reternPolicy}</TabsContent>
</Tabs>

      </section>


      </section>
  
    </div>
  );
};

export default ProductDetails;
