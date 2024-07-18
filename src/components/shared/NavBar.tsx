import {  Link, NavLink } from 'react-router-dom';
import { Input } from '../ui/input';
import { Search, ShoppingBag, User } from 'lucide-react';
import MobileMenu from '../shared/MobileMenu';
import Logo from '../reusableComponents/Logo';
import {  TMenuItem } from '@/types/Interface';
import useCartData from '@/hooks/useCartData';
import ProductSearchModal from '../reusableComponents/ProductSearchModal';
import { useState } from 'react';
import { useGetProductsQuery } from '@/redux/features/products/productApi';
import LoadingPage from './LoadingPage';

export interface TSearchValue{
  searchTerm: string;
}

const initialFilterValues: TSearchValue = {
  searchTerm: '',
};

const NavBar = () => {
  const {totalCartItems}=useCartData()
  const [searchValues, setSearchTerm] = useState<TSearchValue>(initialFilterValues);

  
  const { data: getResults, isLoading } = useGetProductsQuery(searchValues);

  const products = getResults?.data?.result;


  if (isLoading) {
    return (
      <>
        <LoadingPage />
      </>
    );
  }
  const menus = [
    {
      menuId: 1,
      label: 'Home',
      path: '/',
    },
    {
      menuId: 2,
      label: 'Products',
      path: '/products',
    },
    {
      menuId: 3,
      label: 'About Us',
      path: '/about-us',
    },
    // {
    //   menuId: 4,
    //   label: 'Cart',
    //   path: '/cart',
    // },
    {
      menuId: 4,
      label: 'Dashboard',
      path: '/product-management',
    },
  ];
  return (
    <div className="2xl:fixed px-5 2xl:px-0  w-full z-40 bg-black/90 bg-opacity-70 top-0 border-b-[1px] py-6">
      <div className="container grid grid-cols-2 2xl:grid-cols-3  justify-start   items-center  mx-auto">
        {/* logo  */}
       
        <section className='flex gap-4'>
        {/* mobile menu  */}
        <MobileMenu menus={menus} />
        
         <Logo/>
        </section>

        {/* menu section  */}

        <ul className="2xl:flex hidden justify-center  gap-6 items-center">
          {menus.map((menu:TMenuItem) => (
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'bg-primary px-4 text-center rounded-sm font-md text-black'
                  : 'hover:text-primary font-md  px-4'
              }
              key={menu.menuId}
              to={menu.path}
            >
              <li className="text-xl">{menu.label}</li>
            </NavLink>
          ))}
        </ul>

        {/* navend section  */}

        <section className="flex  justify-end  gap-6 md:space-x-4 items-center">
          <div className="xl:flex hidden items-center    relative">
            <Input
              className="rounded-sm w-60 hover:border-primary"
              type="text"
              value={searchValues.searchTerm}
              placeholder="Search..."
              onChange={(e)=>setSearchTerm({searchTerm:e.target.value})}
            />
            <button className="absolute hover:text-primary right-2">
              <Search />
            </button>
          </div>
          <div className=''>
            <ProductSearchModal searchValues={searchValues} setSearchTerm={setSearchTerm} products={products} />
          </div>
          <button className=" xl:hidden hover:text-primary ">
              <Search />
            </button>
          <button className="hover:text-primary">
            <Link to='/cart'>
           <p className='relative'> <ShoppingBag  /></p> 
          {totalCartItems !== 0 &&  <p className='absolute top-8 ml-6 bg-primary/50 px-1 rounded-full'> {totalCartItems}</p> }
            </Link>
          </button>
      <Link to='/product-management'>
      <button className="hover:text-primary">
            <User />
          </button>
      </Link>
        </section>
      </div>
    </div>
  );
};

export default NavBar;
