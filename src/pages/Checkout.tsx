import PageBanner from '@/components/reusableComponents/PageBanner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { checkoutImg, img } from '@/static/pageContent';
import { Label } from '@radix-ui/react-label';
import { ArrowLeftFromLine } from 'lucide-react';
import { Link } from 'react-router-dom';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const Checkout = () => {
  return (
    <div>
      <PageBanner bannerTitle='Check Out' img={checkoutImg} />
      <form>
        <div className="container  mx-auto grid grid-cols-2 gap-6">
          <div className="p-10 space-y-4 py-14">
            <p>Contact</p>
            <div className="space-y-10">
              <Input type="email" placeholder="Email" />

              <div className="space-y-4">
                <p>Shipping address</p>

                <div className="space-y-4">
                  <div className="flex gap-4">
                    <Input type="text" placeholder="First Name" />
                    <Input type="text" placeholder="Last Name" />
                  </div>
                  <Input type="text" placeholder="Address" />
                  <div className="flex gap-4">
                    <Input type="text" placeholder="City" />
                    <Input type="text" placeholder="State" />
                  </div>
                  <Input type="phone" placeholder="Phone" />
                </div>
              </div>
            </div>
              <Label className="flex pt-4 max-w-[10vw] hover:text-primary   cursor-pointer  ">
            <Link className="flex gap-4  items-center"  to="/cart">
                {' '}
                <ArrowLeftFromLine /> Return to cart
            </Link>
              </Label>
          </div>

          {/* order Information */}
          <div className="bg-gray-900 p-10 space-y-6 bg-opacity-30">
            <p>Checkout Summary</p>
            {/* product info  */}
            <div className="flex justify-between  items-center">
              <div className="flex gap-4 items-center">
                <div className="relative">
                  <img
                    className="w-20  object-cover h-20 rounded-lg"
                    src={img}
                  />
                  <p className=" w-6 absolute -top-2 -right-2.5 text-[12px] h-6 p-1 text-center rounded-full bg-primary text-black">
                    3
                  </p>
                </div>
                <div>
                  <p>Product title</p>
                  <p>category</p>
                </div>
              </div>

              <p>$20000</p>
            </div>
            <div className="flex justify-between  items-center">
              <div className="flex gap-4 items-center">
                <div className="relative">
                  <img
                    className="w-20  object-cover h-20 rounded-lg"
                    src={img}
                  />
                  <p className=" w-6 absolute -top-2 -right-2.5 text-[12px] h-6 p-1 text-center rounded-full bg-primary text-black">
                    3
                  </p>
                </div>
                <div>
                  <p>Product title</p>
                  <p>category</p>
                </div>
              </div>

              <p>$20000</p>
            </div>

            {/* total info  */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <p>Subtotal</p>
                <p>
                  $<span>{'20000'}</span>{' '}
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
                  $<span>{'20000'}</span>{' '}
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

                  <Button type='submit' >Confirm Order</Button>
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
