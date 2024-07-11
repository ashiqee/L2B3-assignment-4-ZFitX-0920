import MainTttle from '@/components/reusableComponents/MainTttle';
import PageBanner from '@/components/reusableComponents/PageBanner';

import { ShoppingBag } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { img, reternPolicy } from '@/static/pageContent';

import CartModal from '@/components/reusableComponents/CartModal';


const ProductDetails = () => {
const thumbsImages = [
    {
      imgUrl: img,
    },
    {
      imgUrl: img,
    },
    {
      imgUrl: img,
    },
    {
      imgUrl: img,
    },
    {
      imgUrl: img,
    },
    {
      imgUrl: img,
    },
    {
      imgUrl: img,
    },
    {
      imgUrl: img,
    },
  ];
  return (
    <div>
      <PageBanner img={img} />

      {/* product details section  */}
      <section className="py-10 container mx-auto px-4">
        {/* image view */}
        <div className="grid grid-cols-2 gap-6">
          <div className="flex xl:gap-6">
            <div className=" space-y-3  flex flex-col   overflow-x-hidden scrollbar-hide   justify-center  md:min-w-[150px]   max-h-[520px]">
              {thumbsImages?.map((image) => (
                <img
                  className="w-28 mx-auto  min-h-28 object-cover"
                  src={img}
                />
              ))}
            </div>
            <div className=" h-[520px] overflow-hidden  ">
              <img className="h-[520px] hover:scale-125 transition-all duration-500 cursor-pointer w-full object-cover " src={img} />
            </div>
          </div>

          {/* detail  */}

          <div className="p-2 space-y-3">
            <MainTttle
              className="subpixel-antialiased"
              title={'AB Dual Wheel Roller'}
            />
            <p className="text-[15px] subpixel-antialiased text-primary flex gap-2 items-center">
              <ShoppingBag /> 23 Itemssold in last 23 hours
            </p>
            {/* product price  */}
            <h4 className="text-2xl font-bold">
              $2,0000.00{' '}
              <span className="line-through text-[14px]">$2,4000.00</span>
            </h4>
            {/* sort description  */}
            <p>Bring the performance of a commercial LifeCycle </p>
            <p>Product Category:</p>
            <p className="p-1  outline-1 outline my-2 w-28 font-semibold text-center">
              12 in stock
            </p>

            <div className="flex items-center gap-6">
              <div className=" flex justify-between items-center outline-1 outline p-2 my-2 w-28 font-semibold text-center">
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
              <CartModal/>
            
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
  <TabsContent value="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo officiis inventore enim explicabo corporis! Animi aut illum vel laudantium impedit laboriosam autem, quidem, deleniti deserunt nisi, ea accusantium provident voluptate.</TabsContent>
  <TabsContent value="ship">{reternPolicy}</TabsContent>
</Tabs>

      </section>


      </section>
  
    </div>
  );
};

export default ProductDetails;
