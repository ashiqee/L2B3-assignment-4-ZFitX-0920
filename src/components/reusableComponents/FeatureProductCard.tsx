import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '../ui/button';

const FeatureProductCard = () => {
    
  return (
    <Card className="min-h-96 p-0  bg-opacity-10">
      <CardHeader className="p-0 px-0">
        {/* <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription> */}
      </CardHeader>
      <CardContent className="px-0 pb-0 mb-4  overflow-hidden">
        <img className='hover:scale-125  object-cover transition-transform w-full duration-1000' 
        src="https://dt-fitfinity.myshopify.com/cdn/shop/products/prod12a.jpg?v=1701158983&width=720"/>
       
      </CardContent>
      <div className="space-y-2">
       <p className="text-primary uppercase font-[8px]">ELITE Fitness</p>
       <div className=" flex items-center gap-3">
      <h3 className="hover:text-primary text-xl text-white">
       Foam Women's Gym Shoes
       </h3>
      <Button>View Details</Button>
       </div>
       
      </div>
      {/* <CardFooter className="bg-black bottom-0 text-white bg-opacity-50">
        <p>Card Footer</p>
      </CardFooter> */}
    </Card>
  );
};

export default FeatureProductCard;
