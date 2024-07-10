import {
  Card,
  CardContent,
 
  CardHeader,
  
} from '@/components/ui/card';
import { Button } from '../ui/button';

import { ShoppingCart,Heart  } from 'lucide-react';
import { useState } from 'react';

const FeatureProductCard = () => {
  const [open, setOpen] = useState(false);
    
    
  return (
    <Card className="min-h-96 p-0  bg-opacity-10">
      <CardHeader className="p-0 px-0">
       
      </CardHeader>
      <CardContent  onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} className="px-0 pb-0 mb-4 relative   overflow-hidden">
       <div>
       <img className='hover:scale-125  object-cover transition-transform w-full duration-1000' 
        src="https://shop.lifefitness.com/cdn/shop/files/cybex-525at-silver-silver-1000x1000.jpg?v=1692635887&width=600"/>
       </div>
       {
        open && <div className="absolute -left-2 w-20  flex flex-col gap-3 text-white justify-center items-center inset-0 ">
        
      
        <button className="hover:text-white hover:bg-gray-600 text-black bg-primary rounded-full p-2  text-xl" >
          <ShoppingCart />
        
        </button>
        <button className="hover:text-white hover:bg-gray-600 text-black bg-primary rounded-full p-2 text-xl" >  <Heart /></button>
        </div>
       }
      </CardContent>
      
      <div className="space-y-2">
       <div className=" md:flex justify-between items-center gap-3">
       <p className="text-primary uppercase text-[13px] md:text-[12px]">ELITE Fitness</p>
       <p className="text-primary uppercase text-[13px] md:text-[20px]">$120</p>
       </div>
       <div className=" md:flex items-center gap-3">
      <h3 className="hover:text-primary text-md md:text-xl text-white">
       Foam Women's Gym Shoes
       </h3>
  <Button className="px-1 md:px-3 mt-1 py-0">View Details</Button>
    
       </div>
       
      </div>
    
    </Card>
  );
};

export default FeatureProductCard;
