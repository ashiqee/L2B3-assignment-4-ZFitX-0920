import ProductsSidebar from '@/components/layout/ProductsSidebar';
import FeatureProductCard from '@/components/reusableComponents/FeatureProductCard';
import PageBanner from '@/components/reusableComponents/PageBanner';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useGetProductsQuery } from '@/redux/features/products/productApi';
import { TProduct } from '@/types/Interface';
import { ChangeEvent, FormEvent, useState } from 'react';

interface TFilterValues {
  searchTerm: string;
  sortByPrice: string;
  stockStatus: string;
  categories: string[];
}



const initialFilterValues:TFilterValues = {
  searchTerm: '',
  sortByPrice: 'asc',
  stockStatus: '',
  categories: [],
};

const ProductsPage = () => {
  const [filters, setFilters] = useState<TFilterValues>(initialFilterValues);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const { data: products, isLoading } = useGetProductsQuery(filters);

  if (isLoading) {
    return <>Loading...</>;
  }


  const handleFilterChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (category:string) => {
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(category)
        ? prevSelected.filter((item) => item !== category)
        : [...prevSelected, category],
    );

    setFilters((prevFilters) => ({
      ...prevFilters,
      categories: selectedCategories.includes(category)
        ? prevFilters.categories.filter((cat) => cat !== category)
        : [...prevFilters.categories, category],
    }));
  };

  const resetFilters = () => {
    setSelectedCategories([]);
    setFilters({
      searchTerm: '',
      sortByPrice: '',
      stockStatus: '',
      categories: [],
    });
  };

  const handleFilterSubmit = (e:FormEvent) => {
    e.preventDefault();
    console.log(filters);
  };

  const handleFormChange = (e: ChangeEvent<HTMLFormElement>) => {
    const { name, value } = e.target as unknown as HTMLInputElement | HTMLSelectElement;
    handleFilterChange({ target: { name, value } } as ChangeEvent<
      HTMLInputElement | HTMLSelectElement
    >);
  };


  const categories = Array.from(
    new Set(products?.data?.map((product: TProduct) => product.p_category)),
  );

  const img =
    'https://dt-fitfinity.myshopify.com/cdn/shop/files/AdobeStock_320492530_Preview.jpg?v=1701422683&width=1920';

  return (
    <div className="">
      <PageBanner bannerTitle={''} img={img} />

      {/* product page layout  */}

      <section className=" container py-10 grid grid-cols-5 gap-4">
        {/* Search and filter */}

        <ProductsSidebar
          filters={filters}
          handleFilterSubmit={handleFilterSubmit}
          handleFilterChange={handleFilterChange}
          handleCheckboxChange={handleCheckboxChange}
          selectedCategories={selectedCategories}
          categories={categories}
          resetFilters={resetFilters}
          initialFilterValues={initialFilterValues}
        />

        {/* )} */}

        {/* </Formik> */}

        {/* product grid */}
        <div className="col-span-4">
          <div className="flex items-center py-2 p-2  border-[0.001px] mb-7 justify-between">
            <p>Showing 1–12 of 24 results</p>

            {/* <select name="sortByPrice" value={filters.sortByPrice}>
        <option value="asc">High to Low</option>
        <option value="desc">Low to High</option>
      </select> */}
            <form onChange={handleFormChange}>
              <Select name="sortByPrice">
                <SelectTrigger className="w-[180px]">
                  <SelectValue
                    placeholder="Sort By Price"
                    className="text-white"
                  >
                    {filters.sortByPrice === 'asc'
                      ? 'Low to High'
                      : 'High to Low'}
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="asc">Low to high</SelectItem>
                  <SelectItem value="desc">High to low</SelectItem>
                </SelectContent>
              </Select>
            </form>
          </div>

          <div className="grid w-full  grid-cols-4 gap-4">
            {/* Todo product card */}
            {products?.data?.map((product:TProduct) => (
              <FeatureProductCard key={product._id} data={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
