import { Button } from '../components/ui/button';
import { img } from '@/static/pageContent';
import { NotepadText, Trash } from 'lucide-react';
import PageBanner from '@/components/reusableComponents/PageBanner';
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Link } from 'react-router-dom';
 

const Cart = () => {
  return (
    <div>
      <PageBanner img={img} />
      <div className="py-5 flex flex-col container mx-auto justify-between h-full">
      <div className='flex justify-between border-b-2 mb-6 py-4 items-center px-6 text-xl'>
                <p>Product</p>
                <p>Quantity</p>
                <p>Total</p>
            </div>
        <div className=" flex  flex-col gap-3  ">
          
          <div className="flex justify-between items-center px-4 rounded-lg shadow-2xl ">
            <div className="flex   gap-2">
              <img className="w-28 object-cover h-28" src={img} />
              <div className="space-y-2">
                <h4 className="text-xl text-primary">Product Title</h4>
                <div>
                  <p className="text-white text-md">$2500</p>
                  <p className="text-white text-md">Catergory:</p>
                </div>
               
              </div>
            
            </div>
            <div className=" flex justify-between text-md gap-4 text-white items-center  font-semibold text-center">
                  <div className='flex justify-between text-md text-white items-center outline-1 outline p-2 my-2 w-28 font-semibold text-center'>
                  <button>-</button>
                  <span>1</span>
                  <button>+</button>
                  </div>
                  <button className="text-2xl flex-end text-right hover:text-primary text-white">
                <Trash />
              </button>
                </div>
            <div className=" p-3">
             
              <p className="text-white text-[26px] pb-2 flex gap-3 items-center text-md">
                 $2500
              </p>
            </div>
          </div>
        
        </div>

        {/* check out  */}
        <div className="border-t-2 flex justify-between p-10 text-white mt-6 ">
        <div className="grid w-[30vw] gap-1.5">
      <Label className='flex gap-2 items-center' htmlFor="message"><NotepadText/> Add note</Label>
      <Textarea placeholder="Type your message here." id="message" />
    </div>
         <div className="space-y-4  py-4">
            <h4 className="text-2xl flex  justify-between items-center">
              Sub Total: <span>$2500</span>
            </h4>
            <p>Free delivery</p>
            <Link to='/checkout'>
            <Button className="w-full my-2">Check Out</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
