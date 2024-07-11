
import { useGetProductsQuery } from '@/redux/features/products/productApi';
import FeatureProductCard from '../reusableComponents/FeatureProductCard';
import MainTttle from '../reusableComponents/MainTttle';
import TagTitle from '../reusableComponents/TagTitle';

interface TProduct{
    p_name: string;
    p_description:string;
    p_category:string;
    p_images:string[];
    p_price:number;
    p_stock:number;
    p_isDeleted?: boolean;
}

const FeaturedProduct = () => {
    const {data: products ,isLoading ,isError} = useGetProductsQuery({});

    if(isLoading){
      return <>Loading...</>
    }
    console.log(products?.data);

    return (
        <div className="space-y-10">
            <div className="text-center space-y-1.5 px-2 md:px-0">
            <TagTitle  tagTitle={"New Arrivals"}/>
            <MainTttle className="text-center" title={"Featured Products"} />
            <p>Aenean Vel Elit Scelerisque Mauris Pellentesque. At Varius Vel Pharetra Vel Turpis.Volutpat Odio <br/> Facilisis Mauris Sit Amet Massa Vitae Tortor Condimentum.</p>
            </div>
            
            {/* product list section  */}
            <section className="grid 
            grid-cols-2 
            md:grid-cols-3
            xl:grid-cols-4 
            px-2 md:px-4 xl:px-0  items-center container gap-2 md:gap-4 xl:gap-10">
{products?.data?.slice(0,8).map((product: TProduct) => (
  <FeatureProductCard data={product} key={product._id} />
))}
            </section>
        </div>
    );
};

export default FeaturedProduct;