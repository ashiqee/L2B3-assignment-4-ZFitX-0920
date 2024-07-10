import ProductsSidebar from '@/components/layout/ProductsSidebar';
import FeatureProductCard from '@/components/reusableComponents/FeatureProductCard';
import PageBanner from '@/components/reusableComponents/PageBanner';
import { Input } from '@/components/ui/input';

const ProductsPage = () => {
  const img =
    'https://dt-fitfinity.myshopify.com/cdn/shop/files/AdobeStock_320492530_Preview.jpg?v=1701422683&width=1920';

  return (
    <div className="">
      <PageBanner img={img} />

      {/* product page layout  */}

      <section className="container py-10 grid grid-cols-5 gap-4">
        {/* Search and filter */}
        <ProductsSidebar/>

        {/* product grid */}
      <div className="col-span-4">
        <div>
          <p>Showing 1–12 of 24 results</p>
          <button></button>
        </div>
      <div className="grid w-full  grid-cols-4 gap-4">
          
          <FeatureProductCard/>
          <FeatureProductCard/>
          <FeatureProductCard/>
          <FeatureProductCard/>
          
        </div>
      </div>
      </section>
    </div>
  );
};

export default ProductsPage;
