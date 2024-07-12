import ProductsSidebar from '@/components/layout/ProductsSidebar';
import FeatureProductCard from '@/components/reusableComponents/FeatureProductCard';
import PageBanner from '@/components/reusableComponents/PageBanner';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useGetProductsQuery } from '@/redux/features/products/productApi';
import { useForm } from 'react-hook-form';

const ProductsPage = () => {
  const {register,handleSubmit}= useForm()
  const { data: products, isLoading, isError } = useGetProductsQuery({});

  if (isLoading) {
    return <>Loading...</>;
  }
  


  const handleFilterSubmit =(filterQuery:string)=>{
   
    console.log(filterQuery);
    

  }


  const img =
    'https://dt-fitfinity.myshopify.com/cdn/shop/files/AdobeStock_320492530_Preview.jpg?v=1701422683&width=1920';

  return (
    <div className="">
      <PageBanner bannerTitle={''} img={img} />

      {/* product page layout  */}

      <section className="container py-10 grid grid-cols-5 gap-4">
        {/* Search and filter */}
<form onSubmit={handleSubmit(handleFilterSubmit)}>
        <ProductsSidebar register={register} />

</form>

        {/* product grid */}
        <div className="col-span-4">
          <form onChange={handleSubmit(handleFilterSubmit)}  >
            <div className="flex items-center py-2 p-2  border-[0.001px] mb-7 justify-between">
              <p>Showing 1–12 of 24 results</p>
              <button>
                <DropdownMenu>
                  <DropdownMenuTrigger>Sort by</DropdownMenuTrigger>
                  <DropdownMenuContent className="  mr-20 mt-2">
                    <DropdownMenuLabel>Featured</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={()=>handleFilterSubmit("asce")} className="hover:text-primary hover:bg-gray-700">
                      Price, low to high
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={()=>handleFilterSubmit("desc")}  className="hover:text-primary hover:bg-gray-700">
                      Price, high to low
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </button>
            </div>
          </form>
          <div className="grid w-full  grid-cols-4 gap-4">
            {/* Todo product card */}
            {products?.data?.map((product) => (
              <FeatureProductCard key={product._id} data={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
