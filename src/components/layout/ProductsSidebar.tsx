import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { Button } from '../ui/button';

const stock =[
  
]


const ProductsSidebar = ({setFieldValue,values}) => {
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
          <Input 
          name='searchTerm'
           onChange={(e)=>setFieldValue("searchTerm",e.target.value)} 
          value={values.searchTerm}
          className="w-full mt-8" type="text" placeholder="Search..." />
        </div>
      </div>

      {/* filter  */}
      <div className="shadow-xl p-1 mb-5 rounded-lg">
        <p className="text-2xl  py-1 p-1 bg-primary text-black font-medium">
          Filter:
        </p>

        <div className="w-full my-8">
          <ul className="space-y-3">
          <li className="flex gap-2">
          <RadioButtons
              label="Sort by price"
              options={stock}
              name="sortByPrice"
              type="radio"
            /><p>In Stock (20)</p>
                  </li>
                  <li className="flex gap-2">
                   <input type="checkbox" name="outOfStock"  onChange={(e)=>setFieldValue("outOfStock",e.target.value)} 
                  value={values.outOfStock} /> <p>Out of Stock (5)</p>
                  </li>
        
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
              <div onClick={() => handleOpenMenu('equipments')} className="flex justify-between items-center pr-4">
                <p>Equipments</p>
                <p
                  
                  className="text-xl"
                >
                  {openMenus.equipments ? '-' : '+'}
                </p>
              </div>
              {openMenus.equipments && (
                <ul className="ml-4 space-y-2 py-2">
                  <li className="flex gap-2">
                   <input name="yoga"  type="checkbox" id="" /> <p>Yoga</p>
                  </li>
                  <li className="flex gap-2">
                   <input type="checkbox" name="gym" id="" /> <p>Gym</p>
                  </li>
                  <li className="flex gap-2">
                   <input type="checkbox" name="accesssories" id="" /> <p>Accessories</p>
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
