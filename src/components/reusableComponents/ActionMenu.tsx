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
import { useAppDispatch } from './../../redux/hook';
import { useDeleteProductMutation } from "@/redux/features/products/productApi";
   

const ActionMenu = ({product,handleDeletedProduct,toast}) => {
    const [position, setPosition] = useState("bottom")


    
 
    return (
        <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <p className="font-medium text-blue-600 dark:text-blue-500 hover:underline" > <EllipsisVertical /></p>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="absolute right-16 -bottom-16 border " >
     
            
            <div className="space-y-3 p-2 ">
                <EditProductModal toast={toast} product={product}/>
            
            <button  onClick={() => handleDeletedProduct(product._id)}  className="flex  hover:text-primary gap-2 items-center "><Delete/> Delete</button>
             
            </div>
       
        </DropdownMenuContent>
      </DropdownMenu>
    );
};

export default ActionMenu;