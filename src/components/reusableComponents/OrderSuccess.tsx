import { Link } from "react-router-dom";
import { Button } from "../ui/button";


const OrderSuccess = () => {
    return (
        <div className="min-h-[60vh] flex items-center text-center justify-center ">
 <div className="space-y-4">

 <i  className="checkmark text-[100px]">✓</i>
            <h1 className="text-3xl">Thank you for odering!</h1> 
        <p className="pb-5">We received your purchase request;<br/> we'll be in touch shortly!</p>
     <Link to="/products">
     <Button>
            Shop More
        </Button>
     </Link>
 </div>
        </div>
    );
};

export default OrderSuccess;