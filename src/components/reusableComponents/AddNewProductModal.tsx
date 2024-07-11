import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '../ui/button';
import { img } from '@/static/pageContent';
import { Plus } from 'lucide-react';

import { Label } from '@radix-ui/react-label';
import { Input } from '../ui/input';
import { useAddProductMutation } from '@/redux/features/products/productApi';
import { useForm } from 'react-hook-form';


const AddNewProductModal = () => {
const {register,handleSubmit} = useForm({})

  const [addProduct]  = useAddProductMutation()


const handleAddProductSubmit = async (data)=>{

  console.log(data);

  const res = await addProduct({data});
  console.log(res);
  

}


  return (
    <Dialog>
      <DialogTrigger>
        <Button className="flex gap-2">
          {' '}
          <span>
            {' '}
            <Plus />
          </span>{' '}
          Add New
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl">Add New Product</DialogTitle>
          <DialogDescription className="py-5  overflow-x-auto flex flex-col justify-between h-[80vh]">
            <form onSubmit={handleSubmit(handleAddProductSubmit)}>
              <div className='space-y-3'>
                <div>
                <Label className='text-xl text-white'>Product Name:</Label>
                <Input type="text" className='text-white' id='p_name' {...register('p_name')} name="p_name"  />
                </div>
                <div>
                <Label className='text-xl text-white'>Product Price:</Label>
                <Input type="number" className='text-white' min={0} id='p_price' {...register('p_price',{setValueAs: v=> parseFloat(v),required: true})} name="p_price"  />
                </div>
                <div>
                <Label className='text-xl text-white'>Stock:</Label>
                <Input type="number" className='text-white' min={0} id='p_stock' {...register('p_stock',{setValueAs: v=> parseFloat(v),required: true})} name="p_stock" />
                </div>
                <div>
                <Label className='text-xl text-white'>Category Name:</Label>
                <Input type="text" className='text-white' id='p_category' {...register('p_category')} name="p_category" />
                </div>
                <div>
                <Label className='text-xl text-white'>Description:</Label>
                <Input type="text" className='text-white' id='p_description' {...register('p_description')} name="p_description" />
                </div>
                <div>
                <Label className='text-xl text-white'>Images</Label>
                <Input type="file" className='text-white' id='p_images' {...register('p_images')} name="p_images" />
                </div>
<div className='grid grid-cols-4 gap-2'>
<img className="w-28 object-cover h-28" src={img} />
<img className="w-28 object-cover h-28" src={img} />
<img className="w-28 object-cover h-28" src={img} />
<img className="w-28 object-cover h-28" src={img} />
<img className="w-28 object-cover h-28" src={img} />
<img className="w-28 object-cover h-28" src={img} />
<img className="w-28 object-cover h-28" src={img} />
<img className="w-28 object-cover h-28" src={img} />
<img className="w-28 object-cover h-28" src={img} />
<img className="w-28 object-cover h-28" src={img} />
<img className="w-28 object-cover h-28" src={img} />
</div>
                <div className='flex justify-end'>
                <Button type='submit'>Add New Product</Button>
                </div>
              </div>
            </form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AddNewProductModal;
