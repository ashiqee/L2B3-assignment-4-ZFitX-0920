import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Button } from "../ui/button";
import { useState } from "react";
import { Delete, Edit, EllipsisVertical } from "lucide-react";
import EditProductModal from "./EditProductModal";
   

const ActionMenu = () => {
    const [position, setPosition] = useState("bottom")
 
    return (
        <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <p className="font-medium text-blue-600 dark:text-blue-500 hover:underline" > <EllipsisVertical /></p>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="absolute right-20 bottom-5 border " >
     
            
            <div className="space-y-3 p-2 ">
                <EditProductModal/>
            
            <button className="flex  hover:text-primary gap-2 items-center "><Delete/> Delete</button>
             
            </div>
       
        </DropdownMenuContent>
      </DropdownMenu>
    );
};

export default ActionMenu;