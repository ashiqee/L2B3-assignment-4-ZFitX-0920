import {
  Card,
  CardContent,
 
  CardHeader,
  
} from '@/components/ui/card';
import { Button } from '../ui/button';

const FeatureProductCard = () => {
    
  return (
    <Card className="min-h-96 p-0  bg-opacity-10">
      <CardHeader className="p-0 px-0">
       
      </CardHeader>
      <CardContent className="px-0 pb-0 mb-4  overflow-hidden">
        <img className='hover:scale-125  object-cover transition-transform w-full duration-1000' 
        src="https://dt-fitfinity.myshopify.com/cdn/shop/products/prod12a.jpg?v=1701158983&width=720"/>
       
      </CardContent>
      <div className="space-y-2">
       <p className="text-primary uppercase text-[13px] md:text-[15px]">ELITE Fitness</p>
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
