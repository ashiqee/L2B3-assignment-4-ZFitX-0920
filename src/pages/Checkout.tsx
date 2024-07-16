import PageBanner from '@/components/reusableComponents/PageBanner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { checkoutImg } from '@/static/pageContent';
import { Label } from '@radix-ui/react-label';
import { ArrowLeftFromLine } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import useCartData from '@/hooks/useCartData';
import { SubmitHandler, useForm } from "react-hook-form";
import { useAddOrderMutation } from '@/redux/features/Orders/OrdersApi';
import { toast,Toaster } from 'sonner';
import useHandleProducts from '@/hooks/useHandleProducts';
import { TOrder } from '@/types/Interface';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

const Checkout = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<TOrder>();
  const [addOrder] = useAddOrderMutation();
  const { cartsProducts,currentCarts, totalAmount } = useCartData();
  const {handleRemoveFromCart}=useHandleProducts()
const navigate= useNavigate()

  const cartItems = currentCarts?.items
  

  const handdleOrderPlacement:SubmitHandler<TOrder> = async (orderData) =>{
    

    
    const res = await addOrder({
      ...orderData,
      o_cartItems:cartItems
      
    });



if(res?.data?.success){
 
  
  toast?.success("Your Order placed succesfully")
  const productIdsToRemove =cartItems.map(item=> item.productId);
  handleRemoveFromCart(productIdsToRemove)
  navigate("/order-success")



  }else{
  if(res.error){
    if ('data' in res.error) {
      const error = res.error as FetchBaseQueryError;
      toast.error((error.data as { message: string }).message || "Something went wrong in fetching");
    } else {
      toast.error("Something went wrong");
    }
  }else{
    toast.error("Something went wrong");
  }
  }
  
    
  
  }



  return (

    <div>
      <PageBanner bannerTitle="Check Out" img={checkoutImg} />
      <Toaster />
      <form onSubmit={handleSubmit(handdleOrderPlacement)}>
        <div className="container  mx-auto md:flex    justify-between  gap-6">
          <div className="p-10 space-y-4 w-full py-14">
            <p>Contact</p>
            <div className="space-y-10">
              <Input type="email"   {...register("o_email",{ required: true })} placeholder="Email" />
              {errors.o_email && <span className='text-red-600 text-[12px]'>Email must be required</span>}

              <div className="space-y-4">
                <p>Shipping address</p>

                <div className="space-y-4">
                  <div className="flex gap-4">
                    <Input type="text"   {...register("o_firstName",{ required: true })} placeholder="First Name" />
          
                    
                    <Input type="text"  {...register("o_lastName")} placeholder="Last Name" />
                  </div>
                  {errors.o_firstName && <span className='text-red-600 text-[12px]'>First Name must be required</span>}
                  <Input type="text" {...register("o_address",{required:true})} placeholder="Address" />
                  {errors.o_address && <span className='text-red-600 text-[12px]'>Address must be required</span>}
                  <div className="flex gap-4">
                    <Input type="text" {...register("o_city")} placeholder="City" />
                    <Input type="text"  {...register("o_state")} placeholder="State" />
                  </div>
                  <Input type="phone"  {...register("o_phone",{required:true})} placeholder="Phone" />
                  {errors.o_phone && <span className='text-red-600 text-[12px]'>Phone must be required</span>}
                </div>
              </div>
            </div>
            <Label className="flex pt-4 max-w-[10vw] hover:text-primary   cursor-pointer  ">
              <Link className="flex gap-4  items-center" to="/cart">
                {' '}
                <ArrowLeftFromLine /> Return to cart
              </Link>
            </Label>
          </div>

          {/* order Information */}
          <div className="bg-primary/5 p-10 w-full space-y-6 bg-opacity-30">
            <p>Checkout Summary</p>

            <div>
              {cartsProducts?.map((item,i) => (
                <div
                  key={i}
                  className="flex justify-between  items-center"
                >
                  <div className="flex gap-4 items-center">
                    <div className="relative">
                      <Link to={`/products/${item._id}`}>
                        <img
                          className="w-20  object-cover h-20 rounded-lg"
                          src={item?.p_images[0] ?? "#"}
                        />
                      </Link>
                      <p className=" w-6 absolute -top-2 -right-2.5 text-[12px] h-6 p-1 text-center rounded-full bg-primary text-black">
                        {item.quantity}
                      </p>
                    </div>
                    <div>
                      <p>{item?.p_name?.slice(0, 50)}</p>
                      <p className="text-[12px]">{item.p_category}</p>
                    </div>
                  </div>

                  <p>${item.p_price * item.quantity}</p>
                </div>
              ))}
            </div>

            {/* total info  */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <p>Subtotal</p>
                <p>
                  $<span>{totalAmount}</span>{' '}
                </p>
              </div>
              <div className="flex justify-between items-center">
                <p>Shipping</p>
                <p>
                  <span>{'Free'}</span>{' '}
                </p>
              </div>
              <div className="flex justify-between items-center">
                <p>Estimated taxes</p>
                <p>
                  <span>{'Free'}</span>{' '}
                </p>
              </div>
              <div className="flex text-xl py-4 justify-between items-center">
                <p>Total</p>
                <p>
                  $<span>{totalAmount}</span>{' '}
                </p>
              </div>
              <div className="space-y-4">
                <p>Payment method</p>
                <div className="flex justify-between items-center">
                  <div className="flex gap-2 items-center">
                    <RadioGroup defaultValue="option-one">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-one" id="option-one" />
                        <Label htmlFor="option-one">Cash on delivery</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-two" id="option-two" />
                        <Label
                          className="flex gap-2 items-center"
                          htmlFor="option-two"
                        >
                          Pay with{' '}
                          <img
                            className="w-20 h-12"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png"
                          />
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

 
                  <Button type="submit">Confirm Order</Button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
