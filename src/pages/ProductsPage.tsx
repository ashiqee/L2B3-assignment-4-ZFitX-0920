import PageBanner from '@/components/reusableComponents/PageBanner';
import { useCurrentPath } from '@/hooks/useCurrentPath';

const ProductsPage = () => {
    const currentPath = useCurrentPath()

   
    const img = "https://dt-fitfinity.myshopify.com/cdn/shop/files/AdobeStock_320492530_Preview.jpg?v=1701422683&width=1920"
    
    

  return (
    <div className=''>
      <PageBanner bannerProps={currentPath} img={img} />
    </div>
  );
};

export default ProductsPage;
