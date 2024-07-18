import { TProduct } from '@/types/Interface';
import { Link } from 'react-router-dom';

const ProductSearchModal = ({ products, searchValues,setSearchTerm }) => {
  console.log(searchValues?.searchTerm);

  return (
    <>
      {searchValues?.searchTerm && (
        <div className="max-w-sm min-w-sm max-h-96 z-50 overflow-x-hidden mx-auto absolute top-24 mt-1 right-20 bg-slate-600/60 ">
          {products?.data ? (
            <div className="grid  grid-flow-row gap-4 p-4">
              {' '}
              {products?.data?.slice(-5)?.map((product: TProduct) => (
                <Link key={product._id} to={`/products/${product._id}`}>
                  <div onClick={()=>setSearchTerm({searchTerm:""})} className="flex shadow-lg hover:bg-primary/10 items-center gap-2 p-2">
                    <img
                      className="w-16"
                      src={product.p_images[0] ?? '#'}
                      alt=""
                    />
                    <p>{product.p_name?.slice(0, 60)}</p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <>
              <p className="text-red-600 p-4">
                Searching product not available
              </p>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default ProductSearchModal;
