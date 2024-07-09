import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import { MenusProps } from "@/types/Interface";
import { PopoverClose } from "@radix-ui/react-popover";

import { NavLink } from "react-router-dom";


  
const MobileMenu = ({menus}:MenusProps) => {

  

    return (
        <Popover>
        <PopoverTrigger  className='text-2xl 2xl:hidden rotate-90'>III</PopoverTrigger>
       
       <PopoverContent className="w-[90vw] mt-7 flex items-start justify-between min-h-screen bg-opacity-70 bg-black text-white">
            <ul className="space-y-3">
                {
                   menus.map((menu)=> (<li className="text-xl " key={menu.menuId}> <NavLink 
                    className={({ isActive }) =>
                        isActive
                          ? 'text-primary px-4 text-center rounded-sm font-md '
                          : 'hover:text-primary font-md  px-4'
                      }
                    to={menu.path} >{menu.label}</NavLink></li> ) ) 
                }
            </ul>
            <PopoverClose className="text-3xl hover:text-primary">X</PopoverClose>
          
            
    
            </PopoverContent>
       
      </Popover>
      
    );
};

export default MobileMenu;