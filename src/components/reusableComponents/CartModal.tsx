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

const CartModal = () => {
  return (
    <Dialog>
      <DialogTrigger>
        {' '}
        <Button>Add to cart</Button>
      </DialogTrigger>
      <DialogContent className=" ">
        <DialogHeader>
          <DialogTitle className="text-2xl">Shopping Cart</DialogTitle>
          <DialogDescription className="py-5 flex flex-col justify-between h-full">
           <div className='max-h-[560px]  flex  flex-col gap-3  overflow-x-hidden scrollbar-hide'>
           <div className="flex justify-between bg-gray-900 px-4 rounded-lg shadow-2xl ">
              <div className="flex  gap-2">
                <img className="w-28 object-cover h-28" src={img} />
                <div className="space-y-2">
                  <h4 className="text-xl text-primary">Product Title</h4>
                  <div>
                  <p className="text-white text-md">$2500</p>
                 
                  </div>
                  <div className=" flex justify-between text-md text-white items-center outline-1 outline p-2 my-2 w-28 font-semibold text-center">
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>

                  </div>
                 
                </div>
              </div>
              <div className='flex-col items-end justify-between flex p-3'>
                
              <button className="text-2xl flex-end text-right hover:text-primary text-white">
                <Trash />
              </button>
              <p className="text-white text-[16px] pb-2 flex gap-3 items-center text-md">Sub Total: $2500</p>
              </div>
            </div>
            <div className="flex justify-between bg-gray-900 px-4 rounded-lg shadow-2xl ">
              <div className="flex  gap-2">
                <img className="w-28 object-cover h-28" src={img} />
                <div className="space-y-2">
                  <h4 className="text-xl text-primary">Product Title</h4>
                  <p className="text-white text-md">$2500</p>
                  <div className=" flex justify-between text-md text-white items-center outline-1 outline p-2 my-2 w-28 font-semibold text-center">
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                  </div>
                </div>
              </div>
              <button className="text-2xl hover:text-primary text-white">
                <Trash />
              </button>
            </div>
            <div className="flex justify-between bg-gray-900 px-4 rounded-lg shadow-2xl ">
              <div className="flex  gap-2">
                <img className="w-28 object-cover h-28" src={img} />
                <div className="space-y-2">
                  <h4 className="text-xl text-primary">Product Title</h4>
                  <p className="text-white text-md">$2500</p>
                  <div className=" flex justify-between text-md text-white items-center outline-1 outline p-2 my-2 w-28 font-semibold text-center">
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                  </div>
                </div>
              </div>
              <button className="text-2xl hover:text-primary text-white">
                <Trash />
              </button>
            </div>
           </div>

            {/* check out  */}
            <div className="border-t-2 text-white mt-6 ">
              <div className="space-y-4 py-4">
                <h4 className="text-2xl flex  justify-between items-center">
                  Sub Total: <span>$2500</span>
                </h4>
                <p>Free delivery</p>
                <div className='flex items-center gap-4'>
                <Link className='w-full' to='/cart'>
                <Button className="w-full">
                  
                  View Cart
                </Button>
                  </Link>
                  <Link to='/checkout'>
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
