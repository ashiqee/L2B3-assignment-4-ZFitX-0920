import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Link } from "react-router-dom";
  
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const OrderDetailModal = ({products}:any) => {
    
    
    return (
        <Dialog>
  <DialogTrigger>Order Details</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Order list</DialogTitle>
      <DialogDescription>
        <ul className="grid grid-cols-1 gap-4">
        {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            products?.map((product:any)=>(
              <div className="border p-4 flex justify-between text-white">
              <li>
               <Link to={`/products/${product?.productId?._id}`}> <img className="w-28 h-28 object-cover" src={product?.productId?.p_images[0]} /></Link>
               </li>
            <div>
            <li>{product?.productId?.p_name?.slice(0,20)}</li>
            <li>${product?.productId?.p_price}</li>
            </div>
            
            <div>
                Total
            <li><p className="text-md ">Item: {product?.quantity}</p></li>
            <li><p className="text-xl ">Price: ${product?.quantity * product?.productId?.p_price}</p></li>
            </div>
              </div>
            
            ))

        }
        </ul>
      
   
    
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

    );
};

export default OrderDetailModal;