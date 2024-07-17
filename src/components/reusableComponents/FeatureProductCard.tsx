import {
  Card,
  CardContent,
 
  CardHeader,
  
} from '@/components/ui/card';
import { Button } from '../ui/button';

import { Heart  } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { TProduct } from '@/types/Interface';

interface TCardDataProps{
  data: TProduct;
}

const FeatureProductCard = ({data}:TCardDataProps) => {
  const {
    p_name,
p_category,
p_images,
p_price,
p_stock,
_id
  } =data;
  const [open, setOpen] = useState(false);
    
    
  return (
    <Card className="md:min-h-[480px]  max-h-96 md:max-h-[480px] p-0  bg-opacity-10">
      <CardHeader className="p-0 px-0">
       
      </CardHeader>
      <CardContent  onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} className="px-0 pb-0 mb-4 relative   overflow-hidden">
       <div className='md:max-h-[360px]  max-h-52 md:min-h-[360px]'>
       <img className='hover:scale-125 md:max-h-[360px] min-h-52 max-h-52 md:min-h-[360px] overflow-hidden  object-cover transition-transform w-full duration-1000' 
        src={p_images[0]}/>
        {!p_stock && <p className='text-white p-1 px-2 rounded-md bg-red-800 absolute top-3 left-2'>Sold Out</p>
        }
       </div>
       {
        open && <div className="absolute -left-2 w-20  flex flex-col gap-3 text-white justify-center items-center inset-0 ">
        
      
        <button className="hover:text-white hover:bg-gray-600 text-black bg-primary rounded-full p-2  text-sm" >
          {p_stock}
        
        </button>
        <button className="hover:text-white hover:bg-gray-600 text-black bg-primary rounded-full p-2 text-xl" >  <Heart /></button>
        </div>
       }
      </CardContent>
      
      <div className="space-y-2">
       <div className=" md:flex justify-between items-center gap-3">
       <p className="text-primary uppercase text-[10px] md:text-[12px]">{p_category}</p>
       <p className="text-primary uppercase text-[13px] md:text-[20px]">${p_price}</p>
       </div>
       <div className=" md:flex justify-between items-center gap-3">
      <h3 className="hover:text-primary text-[12px] md:text-md text-white">
       {p_name.slice(0,30)}{p_name.length > 30 && <span> ...</span>}
       </h3>
 <div>
 <Link to={`/products/${_id}`}>
  <Button className="px-1 md:px-3 mt-1 py-0">View Details</Button>
  </Link>
 </div>
    
       </div>
       
      </div>
    
    </Card>
  );
};

export default FeatureProductCard;
