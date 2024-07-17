import MainTttle from "@/components/reusableComponents/MainTttle";
import OrderDetailModal from "@/components/reusableComponents/OrderDetailModal";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { useGetOrdersQuery } from "@/redux/features/Orders/OrdersApi";
  
const OrdersPage = () => {
    const { data:ordersData } = useGetOrdersQuery(undefined);
 
    console.log(ordersData?.data);
    
    

    return (
    <div className="py-5 xl:10 container mx-auto  2xl:mt-20">
        <MainTttle className="" title="All Orders Reports"/>
            <Table className="border">
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader >
          <TableRow >
            <TableHead className=" text-primary w-[100px]">Invoice</TableHead>
            <TableHead className=" text-primary">Full Name</TableHead>
            <TableHead className=" text-primary">Email</TableHead>
            <TableHead className="text-right text-primary">Phone</TableHead>
            <TableHead className="text-right text-primary">Products</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
           {
               // eslint-disable-next-line @typescript-eslint/no-explicit-any
               ordersData?.data?.map((order:any)=>(
                <TableRow className="hover:bg-primary/10" >

                <TableCell>{order?._id?.slice(-4)}</TableCell>
                <TableCell>{order.fullName}</TableCell>
                <TableCell>{order.o_email}</TableCell>
                <TableCell className="text-right">{order.o_phone}</TableCell>
                <TableCell className="text-right"><OrderDetailModal products={order?.o_cartItems} /></TableCell>
                
  
          </TableRow>
            ))
           }
           
        </TableBody>
      </Table>
    </div>
      
    );
};

export default OrdersPage;