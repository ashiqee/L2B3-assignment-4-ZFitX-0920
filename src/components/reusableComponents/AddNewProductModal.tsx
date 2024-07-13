import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '../ui/button';

import { Plus } from 'lucide-react';

import { Label } from '@radix-ui/react-label';
import { Input } from '../ui/input';

import { useAddProductMutation } from '@/redux/features/products/productApi';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Textarea } from '../ui/textarea';
import { FormEvent, useState } from 'react';


interface TAddNewProductProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  toast: any;
}

const AddNewProductModal: React.FC<TAddNewProductProps> = ({ toast }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({});

  const [addProduct] = useAddProductMutation();
  const [imgUrls, setImgUrl] = useState<string[]>([]);

  const handleImage = (e: FormEvent<HTMLTextAreaElement>) => {
    const value = e.currentTarget.value;
    const urls = value.split(',').map((url) => url.trim());
    setImgUrl(urls);
  };

  const handleAddProductSubmit: SubmitHandler<FieldValues> = async (
    productData,
  ) => {
    
    
    // const trimmedUrls = productData.p_images.map((url) =>
    //   url.trim(),
    // );
    const data = {
      ...productData,
      p_images: imgUrls,
    };

  
    

    const res = await addProduct(data);

    if (res?.data?.success) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (toast as any)(res?.data?.message);
      reset();
      setImgUrl([]);
    } else {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (toast as any)('An error occurred');
    }
  };

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
                    />
                    {errors.p_price && typeof errors.p_price.message==="string" && (
                      <p className="text-red-500">{errors?.p_price?.message}</p>
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
                    />
                    {errors.p_stock && typeof errors.p_stock.message==="string" && (
                      <p className="text-red-500">{errors?.p_stock?.message}</p>
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
                  />
                  {errors.p_category && typeof errors.p_category.message==="string" && (
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
                  />
                  {errors.p_description && typeof errors.p_description.message==="string" &&(
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
                  />
                  {errors.p_images && typeof errors.p_images.message==="string" && (
                    <p className="text-red-500">{errors?.p_images?.message}</p>
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
                  <Button type="submit">Add New Product</Button>
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
