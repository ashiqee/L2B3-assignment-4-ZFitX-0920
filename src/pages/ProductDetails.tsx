import MainTttle from '@/components/reusableComponents/MainTttle';
import PageBanner from '@/components/reusableComponents/PageBanner';

import { ShoppingBag } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {reternPolicy } from '@/static/pageContent';

import CartModal from '@/components/reusableComponents/CartModal';
import { useGetSingleProductsQuery } from '@/redux/features/products/productApi';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


const ProductDetails = () => {
  const {id} = useParams()
  const {data:product,isLoading}= useGetSingleProductsQuery(id)
  const [mainImgIndex,setMainImg] = useState(0)
  const [subTotal,setSubTotal] = useState(product?.data?.p_price )
  const [quantity,setQuantity] = useState(1)
  const [isStock,setIsStock] = useState(product?.data?.p_stock>0?1:0 )

  useEffect(()=>{
    setIsStock(product?.data?.p_stock)
    
    setSubTotal(product?.data?.p_price)
   


  },[product,isLoading])

  if(isLoading){
    return <>Loading...</>
  }

  const {
    p_name,
    p_description,
    p_category,
    p_images,
    p_price,
    p_stock,
  } = product.data;

  
  
  const handleIncrementQty = ()=>{
    const newQty = quantity+1;
    setQuantity(newQty);
    setSubTotal(newQty* p_price);
    setIsStock(isStock-1);
  }
  const handleDecrementQty = ()=>{
    if(quantity>1){
      const newQty = quantity-1;
      setQuantity(newQty);
      setSubTotal(newQty * p_price);
      setIsStock(isStock+1);
    }
  
  }


  return (
    <div>
      <PageBanner bannerTitle ={p_name} img={p_images.length > 1 ? p_images[1]:p_images[0]} />

      {/* product details section  */}
      <section className="py-10 container mx-auto px-4">
        {/* image view */}
        <div className="grid grid-cols-2 gap-6">
          <div className="flex xl:gap-6">
            <div className=" space-y-3  flex flex-col   overflow-x-hidden scrollbar-hide   justify-center  md:min-w-[150px]   max-h-[520px]">
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
             Sub Total: ${subTotal}
            
            </h4>
            {/* sort description  */}
            <p>{p_description.slice(0,30)} </p>
            <p>Product Category: {p_category}</p>
            <p className="p-1  outline-1 outline my-2 w-28 font-semibold text-center">
              {p_stock>0 ? `${isStock} in stock` : `Out of Stock`}
            </p>

            <div className="flex items-center gap-6">
              <div className=" flex justify-between items-center outline-1 outline p-2 my-2 w-28 font-semibold text-center">
                <button onClick={handleDecrementQty} >-</button>
                <span>{quantity}</span>
                <button onClick={handleIncrementQty}>+</button>
              </div>
              <CartModal />
            
            </div>
          </div>
        </div>


    {/* decription section  */}
    <section className='py-10 mx-5'>
      <Tabs defaultValue="description" className="w-full">
  <TabsList className='bg-blue-900 mb-5 bg-opacity-10 w-96 flex gap-10 text-left'>
    <TabsTrigger className='text-xl hover:text-primary' value="description">Description</TabsTrigger>
    <TabsTrigger  className='text-xl hover:text-primary' value="ship">Shipping Information</TabsTrigger>
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
