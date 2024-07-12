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
import { Textarea } from '../ui/textarea';
import { useState } from 'react';


const AddNewProductModal = ({toast}) => {
const {register,handleSubmit,reset,formState: { errors }} = useForm({})

  const [addProduct]  = useAddProductMutation()
  const [imgUrls,setImgUrl] = useState([])



  const handleImage =(e)=>{
    const value = e.target.value;
    const urls = value.split(',').map(url=> url.trim());
    setImgUrl(urls);

  }
const handleAddProductSubmit = async (productData)=>{
const data = {
  ...productData, p_images: productData.p_images.split(',').map(url => url.trim()),
}


  const res = await addProduct(data);
  
if(res?.data?.success){
 toast(res?.data?.message)
    reset()
    setImgUrl([])
}else{
  toast(res?.error?.data?.errorMessages[0].message)
}


   
 

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
          <DialogDescription className="py-5 text-left  overflow-x-auto flex flex-col justify-between h-[80vh]">
            <form onSubmit={handleSubmit(handleAddProductSubmit)}>
              <div className='space-y-3'>
                <div>
                <Label className='text-xl text-white'>Product Name:</Label>
                <Input type="text" className='text-white' id='p_name' {...register('p_name',{required: "product name must be need"})} name="p_name"  />
                {errors.p_name && <p className='text-red-500'>{errors?.p_name?.message}</p>}
                </div>
               <div className='flex justify-between gap-6 items-center'>
               <div className='w-full'>
                <Label className='text-xl text-white'>Product Price:</Label>
                <Input type="number" className='text-white' min={0} id='p_price' {...register('p_price',{setValueAs: v=> parseFloat(v),required: "price must need"})} name="p_price"  />
                {errors.p_price && <p className='text-red-500'>{errors?.p_price?.message}</p>}
                </div>
                <div className='w-full'>
                <Label className='text-xl text-white'>Stock:</Label>
                <Input type="number" className='text-white' min={0} id='p_stock' {...register('p_stock',{setValueAs: v=> parseFloat(v),required: "min 1 pis stock need"})} name="p_stock" />
                {errors.p_stock && <p className='text-red-500'>{errors?.p_stock?.message}</p>}
                </div>
               </div>
                <div>
                <Label className='text-xl text-white'>Category Name:</Label>
                <Input type="text" className='text-white' id='p_category' {...register('p_category',{required: "category must need!"})} name="p_category" />
                {errors.p_category && <p className='text-red-500'>{errors?.p_category?.message}</p>}
                </div>
                <div>
                <Label className='text-xl text-white'>Description:</Label>
                <Textarea  className='text-white' id='p_description' {...register('p_description',{required: "must need description"})} name="p_description" />
                {errors.p_description && <p className='text-red-500'>{errors?.p_description?.message}</p>}
                </div>
                <div>
                <Label className='text-xl text-white'>Images</Label>
                <Textarea  className='text-white' id='p_images' {...register('p_images',{required: "min one image url must need"})}  onChange={handleImage} name="p_images" />
                {errors.p_images && <p className='text-red-500'>{errors?.p_images?.message}</p>}
                <small className='text-white'>Enter multiple URLs separated by commas</small>
                </div>
<div className='grid grid-cols-4 gap-2'>
  {
    imgUrls.length > 0 && imgUrls.map((url,i)=>(
      <img key={i} className="w-28 object-cover h-28" src={url} />
    )) 
  }

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
