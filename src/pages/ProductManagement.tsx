import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@radix-ui/react-label';
import { Plus, Search } from 'lucide-react';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
  import { EllipsisVertical } from 'lucide-react';
import AddNewProductModal from '@/components/reusableComponents/AddNewProductModal';
import ActionMenu from '@/components/reusableComponents/ActionMenu';

import { Toaster, toast } from 'sonner';
import { useGetProductsQuery } from '@/redux/features/products/productApi';
import { Link } from 'react-router-dom';


const ProductManagement = () => {

    const {data:products,isLoading}=useGetProductsQuery()

    
    

  return (
    <div className="2xl:mt-20">
        <Toaster/>
      <div className="container px-4 2xl:px-0 mx-auto py-10">
        {/* navbar product manage  */}
        <div className="flex items-center justify-between">
          <div className="flex gap-3">
            <Label>Showing</Label>

            <select defaultValue={5} className="text-black" name="5" id="">
              <option value="">5</option>
              <option value="">10</option>
              <option value="">20</option>
            </select>
          </div>

          {/* Search here  */}
          <div className="xl:flex hidden items-center    relative">
            <Input
              className="rounded-sm w-60 hover:border-primary"
              type="text"
              placeholder="Search"
            />
            <button className="absolute hover:text-primary right-2">
              <Search />
            </button>
          </div>
          {/* add new button  */}
          <div>
           
           <AddNewProductModal toast={toast} />
          
          </div>
        </div>
{/* product table  */}
<div className='py-10' >


<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    #
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
      {
        products?.data?.length>0 ?       products?.data?.map((product,i)=>(
            <tr key={i} className="odd:bg-slate-900 odd:dark:bg-primary-900 text-white even:bg-primary-500 even:dark:bg-gray-800 border-b dark:border-gray-700">
        <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap text-white">
           {i+1}
        </th>
        <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap text-white">
            <Link to={`/products/${product._id}`}>{product.p_name}</Link>
        </th>
       
        <td className="px-6 py-4">
            {product.p_category}
        </td>
        <td className="px-6 py-4">
            {product.p_stock}
        </td>
        <td className="px-6 py-4">
            ${product.p_price}
        </td>
        <td className="px-6 py-4">
          <ActionMenu/>
        </td>
    </tr>
        )) : "There no product" 
      }
            
        </tbody>
    </table>
</div>

</div>
{/* pagination  */}
<div>
<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
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
