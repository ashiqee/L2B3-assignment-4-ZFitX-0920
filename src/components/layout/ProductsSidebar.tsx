import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { Button } from '../ui/button';

const ProductsSidebar = () => {
  const [openMenus, setOpenMenus] = useState({
    equipments: false,
    yogaWear: false,
    gymWear: false,
    accessories: false,
  });

  const handleOpenMenu = (menu: boolean) => {
    setOpenMenus((prevState) => ({ ...prevState, [menu]: !prevState[menu] }));
  };
  return (
    <div className="max-w-72  ">
      <div className="shadow-xl p-1 mb-5 rounded-lg">
        <p className="text-2xl  py-1 p-1 bg-primary text-black font-medium">
          Search:
        </p>

        <div className="w-full my-8">
          <Input className="w-full mt-8" type="text" placeholder="Search..." />
        </div>
      </div>

      {/* filter  */}
      <div className="shadow-xl p-1 mb-5 rounded-lg">
        <p className="text-2xl  py-1 p-1 bg-primary text-black font-medium">
          Filter:
        </p>

        <div className="w-full my-8">
          <ul className="space-y-3">
            <li>In Stock (20)</li>
            <li>Out of Stock (5)</li>
          </ul>
        </div>
      </div>
      {/* Category  */}
      <div className="shadow-xl p-1 mb-5 rounded-lg">
        <p className="text-2xl  py-1 p-1 bg-primary text-black font-medium">
          Category:
        </p>

        <div className="w-full my-8">
          <ul className="space-y-3">
            <li className="">
              <div className="flex justify-between items-center pr-4">
                <p>Equipments</p>
                <button
                  onClick={() => handleOpenMenu('equipments')}
                  className="text-xl"
                >
                  {openMenus.equipments ? '-' : '+'}
                </button>
              </div>
              {openMenus.equipments && (
                <ul className="ml-4 space-y-2 py-2">
                  <li className="flex gap-2">
                   <input type="checkbox" name="" id="" /> <p>Yoga</p>
                  </li>
                  <li className="flex gap-2">
                   <input type="checkbox" name="" id="" /> <p>Gym</p>
                  </li>
                  <li className="flex gap-2">
                   <input type="checkbox" name="" id="" /> <p>Accessories</p>
                  </li>
                 
                </ul>
              )}
            </li>
            {/* Yoga Wear */}
            <li className="">
              <div className="flex justify-between items-center pr-4">
                <p>Yoga Wear</p>
                <button
                  onClick={() => handleOpenMenu('yogaWear')}
                  className="text-xl"
                >
                  {openMenus.yogaWear ? '-' : '+'}
                </button>
              </div>
              {openMenus.yogaWear && (
                <ul className="ml-4 list-disc space-y-2 py-2">
                  <li className="">
                    <p>Yoga</p>
                  </li>
                  <li className="">
                    <p>Gym</p>
                  </li>
                  <li className="">
                    <p>Accessories</p>
                  </li>
                </ul>
              )}
            </li>
            {/* Gym Wear */}
            <li className="">
              <div className="flex justify-between items-center pr-4">
                <p>Gym Wear</p>
                <button
                  onClick={() => handleOpenMenu('gymWear')}
                  className="text-xl"
                >
                  {openMenus.gymWear ? '-' : '+'}
                </button>
              </div>
              {openMenus.gymWear && (
                <ul className="ml-4 list-disc space-y-2 py-2">
                  <li className="">
                    <p>Yoga</p>
                  </li>
                  <li className="">
                    <p>Gym</p>
                  </li>
                  <li className="">
                    <p>Accessories</p>
                  </li>
                </ul>
              )}
            </li>






         
          </ul>
        </div>
      </div>
         {/* filter  */}
         <div className="shadow-xl p-1 mb-5 flex justify-end rounded-lg">
          <Button  >Clear Filter:</Button>
      

        
      </div>
    </div>
  );
};

export default ProductsSidebar;
