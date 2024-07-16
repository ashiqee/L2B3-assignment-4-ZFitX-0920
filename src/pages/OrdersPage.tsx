import MainTttle from "@/components/reusableComponents/MainTttle";
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
    <div className="py-5 xl:mt-10">
        <MainTttle className="" title="All Orders Reports"/>
            <Table className="">
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
           {
               // eslint-disable-next-line @typescript-eslint/no-explicit-any
               ordersData?.data?.map((order:any)=>(
                <TableRow >

                <TableCell>{order?._id?.slice(-4)}</TableCell>
                <TableCell>{order.fullName}</TableCell>
                <TableCell>{order.o_email}</TableCell>
                <TableCell className="text-right">{order.o_phone}</TableCell>

          </TableRow>
            ))
           }
           
        </TableBody>
      </Table>
    </div>
      
    );
};

export default OrdersPage;