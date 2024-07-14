
import { Input } from '@/components/ui/input';
import { Label } from '@radix-ui/react-label';
import {Search } from 'lucide-react';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

import AddNewProductModal from '@/components/reusableComponents/AddNewProductModal';
import ActionMenu from '@/components/reusableComponents/ActionMenu';

import { Toaster, toast } from 'sonner';
import { useGetProductsQuery } from '@/redux/features/products/productApi';
import { Link } from 'react-router-dom';
import {  ChangeEvent, useState } from 'react';
import { useDeleteProductMutation } from '@/redux/features/products/productApi';
import { TProduct } from '@/types/Interface';

interface TFilters{
  searchTerm:string;
}

const initialFilterValues:TFilters = {
  searchTerm: '',
  
};

const ProductManagement = () => {
  
  const [deleteProduct] = useDeleteProductMutation()
  const [filters, setFilters] = useState<TFilters>(initialFilterValues);
  const { data: products, isLoading } = useGetProductsQuery(filters);
 
 
 if(isLoading){
  return <>Loading...</>
 }
 
  const handleDeletedProduct = (id:string) => {
   const res = deleteProduct(id);
  if(res.arg.track){
    toast.error('Product Deleted', {
      position: 'bottom-right',
    });
  }
   
   
  }


  const handleFilterChange = (e:ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    e.preventDefault()
    const { name, value } = e.target;
    setFilters((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  console.log(filters);
  

  return (
    <div className="2xl:mt-20">
      <Toaster />
      <div className="container px-4 2xl:px-0 mx-auto py-10">
        {/* navbar product manage  */}
 
       <div className="flex items-center gap-10 justify-between">
       <form  className="flex items-center w-full justify-between">
          <div className="flex gap-3">
            <Label>Showing</Label>

            <select defaultValue={5} className="text-black" name="pageLimit" onChange={handleFilterChange} id="">
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
            </select>
          </div>

          {/* Search here  */}
          <div className="xl:flex hidden items-center    relative">
            <Input
            name="searchTerm"
              className="rounded-sm w-60 hover:border-primary"
              type="text"
              placeholder="Search"
              onChange={handleFilterChange}
            />
            <button className="absolute hover:text-primary right-2">
              <Search />
            </button>
          </div>
          </form>
          {/* add new button  */}
          <div>
            <AddNewProductModal toast={toast} />
          </div>
        </div>
    
        {/* product table  */}
        <div className="py-10">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    #
                  </th>
                  <th scope="col" className="px-2 py-3">
                    Product Image
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Product name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Stock
                  </th>

                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {products?.data?.length > 0
                  ? products?.data?.map((product:TProduct, i:number) => (
                      <tr
                        key={i}
                        className="odd:bg-slate-900 odd:dark:bg-primary-900 text-white even:bg-primary-500 even:dark:bg-gray-800 border-b dark:border-gray-700"
                      >
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium  whitespace-nowrap text-white"
                        >
                          {i + 1}
                        </th>
                        <th
                          scope="row"
                          className="px-2 py-4 font-medium   text-white"
                        >
                          <Link to={`/products/${product._id}`}>
                            <img
                              className="h-20 w-20 hover:resize-150  hover:scale-150 object-cover"
                              src={product.p_images[0]}
                              alt=""
                            />
                          </Link>
                        </th>
                        <th
                          scope="row"
                          className="px-6 py-4  font-medium max-w-60  text-white"
                        >
                          <Link to={`/products/${product._id}`}>
                            {product.p_name}
                          </Link>
                        </th>

                        <td className="px-6 py-4">{product.p_category}</td>
                        <td className="px-6 py-4">{product.p_stock}</td>
                        <td className="px-6 py-4">${product.p_price}</td>
                        <td className="px-6 py-4">
                          <ActionMenu 
                          product={product} 
                          handleDeletedProduct={handleDeletedProduct}
                          toast={toast} />
                        </td>
                      </tr>
                    ))
                  : <p className="  text-3xl text-center py-20">This products are not available</p>}
              </tbody>
            </table>
          </div>
        </div>
        {/* pagination  */}
        <div>
          
          <Pagination >
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#"  />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
         
        </div>
      </div>
    </div>
  );
};

export default ProductManagement;
