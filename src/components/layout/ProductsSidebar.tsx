import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Slider } from "@/components/ui/slider"


const ProductsSidebar = ({
  filters,
  handleFilterChange,
  handleFilterSubmit,
  categories,
  handleCheckboxChange,
  selectedCategories,
  initialFilterValues,
  resetFilters
}) => {
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
      <form onSubmit={handleFilterSubmit} onChange={handleFilterChange}>
        <div className="shadow-xl p-1 mb-5 rounded-lg">
          <p className="text-2xl  py-1 p-1 bg-primary text-black font-medium">
            Search:
          </p>

          <div className="w-full my-8">
            <Input
              name="searchTerm"
              className="w-full mt-8"
              type="text"
              placeholder="Search..."
            />
          </div>

          {/* <div>
            <p className="  py-3 p-1font-medium">Price Range</p>
        <Slider defaultValue={[33]} max={100} step={1} />

<div className="flex gap-4">
<Input
              name="minPrice"
              className="w-full mt-8"
              type="text"
              placeholder="0"
            />
             <Input
              name="maxPrice"
              className="w-full mt-8"
              type="text"
              placeholder="10000"
            />
</div>
        </div> */}
        </div>

        

        {/* filter  */}
        <div className="shadow-xl p-1 mb-5 rounded-lg">
          <p className="text-2xl  py-1 p-1 bg-primary text-black font-medium">
            Filter:
          </p>
          {/* onValueChange={handleFilterChange} */}
          <div className="w-full my-8">
            <RadioGroup name="stockStatus"  defaultValue={filters.stockStatus} >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="inStock" id="inStock" />
                <Label htmlFor="inStock">In Stock</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="outOfStock" id="outOfStock" />
                <Label htmlFor="outOfStock">Out of Stock</Label>
              </div>
            </RadioGroup>
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
                <div
                  onClick={() => handleOpenMenu('equipments')}
                  className="flex justify-between items-center pr-4"
                >
                  <p>Equipments</p>
                  <p className="text-xl">{openMenus.equipments ? '-' : '+'}</p>
                </div>
                {openMenus.equipments && (
                 <div className="w-full my-8">
                 <RadioGroup name="categoryFilters" >

                    
              {
                categories?.map((category,i)=>(
                    <div key={i} className="flex items-center space-x-2">
                      <input
              type="checkbox"
              id={category}
              value={category}
              checked={selectedCategories.includes(category)}
              onChange={() => handleCheckboxChange(category)}
            />
                    <Label htmlFor={category}>{category}</Label>
                  </div>
                ))
              }
                 
                 </RadioGroup>
               </div>
                )}
              </li>
            </ul>
          </div>
        </div>
        {/* filter  */}
        <div className="shadow-xl p-1 mb-5 flex justify-end rounded-lg">
          {/* <Button type="submit">Apply Filter:</Button> */}
          <Button onClick={resetFilters} >Clear Filter:</Button>
        </div>
      </form>
    </div>
  );
};

export default ProductsSidebar;
