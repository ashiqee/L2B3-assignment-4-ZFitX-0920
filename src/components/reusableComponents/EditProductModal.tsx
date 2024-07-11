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
  import { Edit } from 'lucide-react';
 
  import { Label } from '@radix-ui/react-label';
  import { Input } from '../ui/input';
  
  const EditProductModal = () => {
    return (
      <Dialog>
        <DialogTrigger>
        <button className="flex hover:text-primary gap-2 items-center "> <Edit/> Edit </button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-2xl">Edit Product</DialogTitle>
            <DialogDescription className="py-5  overflow-x-auto flex flex-col justify-between h-[80vh]">
              <form action="">
                <div className='space-y-3'>
                  <div>
                  <Label className='text-xl text-white'>Product Name:</Label>
                  <Input type="text" className='text-white' name="productName" />
                  </div>
                  <div>
                  <Label className='text-xl text-white'>Stock:</Label>
                  <Input type="number" className='text-white' min={1} name="stock" />
                  </div>
                  <div>
                  <Label className='text-xl text-white'>Category Name:</Label>
                  <Input type="text" className='text-white' name="catergory" />
                  </div>
                  <div>
                  <Label className='text-xl text-white'>Description:</Label>
                  <Input type="text" className='text-white' name="description" />
                  </div>
                  <div>
                  <Label className='text-xl text-white'>Images</Label>
                  <Input type="file" className='text-white' name="images" />
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
                  <Button type='submit'>Update Product</Button>
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
  