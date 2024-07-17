import MainTttle from "@/components/reusableComponents/MainTttle";
import OrderDetailModal from "@/components/reusableComponents/OrderDetailModal";
import DasdboardMenu from "@/components/shared/DasdboardMenu";
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
 
 

    return (
    <div className="container 2xl:mt-24 px-4 2xl:px-0 mx-auto py-4">
      {/* /menu  */}
    <DasdboardMenu/>
        <MainTttle className="" title="All Orders Reports"/>
            <Table className="border">
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader >
          <TableRow >
            <TableHead className=" text-primary w-[100px]">Invoice</TableHead>
            <TableHead className=" text-primary">Customer Details</TableHead>
            <TableHead className=" text-primary">Order Status</TableHead>
            <TableHead className="text-right text-primary">Payment Status</TableHead>
            <TableHead className="text-right text-primary">Products</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
           {
               // eslint-disable-next-line @typescript-eslint/no-explicit-any
               ordersData?.data?.map((order:any)=>(
                <TableRow className="hover:bg-primary/10" >

                <TableCell>{order?._id?.slice(-4)}</TableCell>
                <TableCell>
                  <p className="text-[12px]">{order.fullName}</p>
                  <p className="text-[12px]">{order.o_email}</p>
                  <p className="text-[12px]">{order.o_phone}</p>
                </TableCell>
                <TableCell>{order.o_status}</TableCell>
                <TableCell className="text-right">{order.o_payment_status}</TableCell>
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