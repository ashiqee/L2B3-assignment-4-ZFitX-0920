import { Link, NavLink } from 'react-router-dom';
import { Input } from '../ui/input';
import { Search, ShoppingBag, User } from 'lucide-react';
import MobileMenu from './MobileMenu';
import Logo from '../reusableComponents/Logo';

const NavBar = () => {
  const menus = [
    {
      menuId: 1,
      label: 'Home',
      path: '/',
    },
    {
      menuId: 2,
      label: 'Shop',
      path: '/shop',
    },
    {
      menuId: 3,
      label: 'About Us',
      path: '/about-us',
    },
    {
      menuId: 4,
      label: 'Cart',
      path: '/cart',
    },
  ];
  return (
    <div className="2xl:fixed px-5 2xl:px-0  w-full z-40 bg-black bg-opacity-70 top-0 border-b-[1px] py-6">
      <div className="container grid grid-cols-2 2xl:grid-cols-3  justify-start   items-center  mx-auto">
        {/* logo  */}
       
        <section className='flex gap-4'>
        {/* mobile menu  */}
        <MobileMenu menus={menus} />
        
         <Logo/>
        </section>

        {/* menu section  */}

        <ul className="2xl:flex hidden justify-center  gap-6 items-center">
          {menus.map((menu) => (
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
              placeholder="Search"
            />
            <button className="absolute hover:text-primary right-2">
              <Search />
            </button>
          </div>
          <button className=" xl:hidden hover:text-primary ">
              <Search />
            </button>
          <button className="hover:text-primary">
            <ShoppingBag />
          </button>
          <button className="hover:text-primary">
            <User />
          </button>
        </section>
      </div>
    </div>
  );
};

export default NavBar;
