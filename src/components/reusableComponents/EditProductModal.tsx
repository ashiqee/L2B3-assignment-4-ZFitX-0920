import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '../ui/button';

import { Edit } from 'lucide-react';

import { Label } from '@radix-ui/react-label';
import { Input } from '../ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FormEvent, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useUpdateProductMutation } from '@/redux/features/products/productApi';
import { TProduct } from '@/types/Interface';
import usePageRefreshWaring from '@/hooks/usePageRefreshWaring';


interface TEditProductProps{
  product:TProduct;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  toast:any;
}


const EditProductModal:React.FC<TEditProductProps>= ({ product,toast }) => {
  const { p_name, p_description, p_category, p_images, p_price, p_stock, _id } = product;
  const [updateProduct] = useUpdateProductMutation();


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({});

  // const [addProduct] = useAddProductMutation();
  const [imgUrls, setImgUrl] = useState<string[]>([]);
  const [isEditing,setIsEditing]=useState<boolean>(false)


  usePageRefreshWaring(isEditing,"Are you sure you want to leave? Your changes may not be saved.")


  const handleImage = (e: FormEvent<HTMLTextAreaElement>) => {
    const value = e.currentTarget.value;
    const urls = value.split(',').map((url) => url.trim());
    setImgUrl(urls);
  };

  const handleUpdateProductSubmit:SubmitHandler<FieldValues> = async (productData) => {
    const data = {
      ...productData,
      p_images: imgUrls || p_images ,
      id:_id
    };

    const res = await updateProduct(data);

    if (res?.data?.success) {
      toast(res?.data?.message);
      reset();
      setImgUrl([]);
      setIsEditing(false)
    } else {
      toast('Product update An error occurred');
    }
  };


  return (
    <Dialog>
      <DialogTrigger>
        <button className="flex hover:text-primary gap-2 items-center ">
          {' '}
          <Edit /> Edit{' '}
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl">Edit Product</DialogTitle>
          <DialogDescription className="py-5  overflow-x-auto flex flex-col justify-between h-[80vh]">
          <form onChange={()=>setIsEditing(true)} onSubmit={handleSubmit(handleUpdateProductSubmit)}>
              <div className="space-y-3">
              <div>
                  <Label className="text-xl text-white">Product Name:</Label>
                  <Input
                    type="text"
                    className="text-white"
                    id="p_name"
                    {...register('p_name', {
                      required: 'product name must be need',
                    })}
                    name="p_name"
                    defaultValue={p_name}
                  />
                  {errors.p_name &&
                    typeof errors.p_name.message === 'string' && (
                      <p className="text-red-500">{errors.p_name.message}</p>
                    )}
                </div>
                <div className="flex justify-between gap-6 items-center">
                  <div className="w-full">
                    <Label className="text-xl text-white">Product Price:</Label>
                    <Input
                      type="number"
                      className="text-white"
                      min={0}
                      id="p_price"
                      {...register('p_price', {
                        setValueAs: (v) => parseFloat(v),
                        required: 'price must need',
                      })}
                      name="p_price"
                      defaultValue={p_price}
                    />
                     {errors.p_price &&
                      typeof errors.p_price.message === 'string' && (
                        <p className="text-red-500">
                          {errors?.p_price?.message}
                        </p>
                      )}
                  </div>
                  <div className="w-full">
                    <Label className="text-xl text-white">Stock:</Label>
                    <Input
                      type="number"
                      className="text-white"
                      min={0}
                      id="p_stock"
                      {...register('p_stock', {
                        setValueAs: (v) => parseFloat(v),
                        required: 'min 1 pis stock need',
                      })}
                      name="p_stock"
                      defaultValue={p_stock}
                    />
                  {errors.p_stock &&
                      typeof errors.p_stock.message === 'string' && (
                        <p className="text-red-500">
                          {errors?.p_stock?.message}
                        </p>
                      )}
                  </div>
                </div>
                <div>
                  <Label className="text-xl text-white">Category Name:</Label>
                  <Input
                    type="text"
                    className="text-white"
                    id="p_category"
                    {...register('p_category', {
                      required: 'category must need!',
                    })}
                    name="p_category"
                    defaultValue={p_category}
                  />
                  {errors.p_category &&
                    typeof errors.p_category.message === 'string' && (
                      <p className="text-red-500">
                        {errors?.p_category?.message}
                      </p>
                    )}
                </div>
                <div>
                  <Label className="text-xl text-white">Description:</Label>
                  <Textarea
                    className="text-white"
                    id="p_description"
                    {...register('p_description', {
                      required: 'must need description',
                    })}
                    name="p_description"
                    defaultValue={p_description}
                  />
                   {errors.p_description &&
                    typeof errors.p_description.message === 'string' && (
                      <p className="text-red-500">
                        {errors?.p_description?.message}
                      </p>
                    )}
                </div>
                <div>
                  <Label className="text-xl text-white">Images</Label>
                  <Textarea
                    className="text-white"
                    id="p_images"
                    {...register('p_images', {
                      required: 'min one image url must need',
                    })}
                    onChange={handleImage}
                    name="p_images"
                    defaultValue={p_images}
                  />
                  {errors.p_images &&
                    typeof errors.p_images.message === 'string' && (
                      <p className="text-red-500">
                        {errors?.p_images?.message}
                      </p>
                    )}
                  <small className="text-white">
                    Enter multiple URLs separated by commas
                  </small>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {imgUrls.length > 0 &&
                    imgUrls.map((url, i) => (
                      <img
                        key={i}
                        className="w-28 object-cover h-28"
                        src={url}
                      />
                    ))}
                </div>
                <div className="flex justify-end">
                  <Button type="submit">Update Product</Button>
                </div>
              </div>
            </form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default EditProductModal;
