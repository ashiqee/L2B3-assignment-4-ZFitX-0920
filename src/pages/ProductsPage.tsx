
import FeatureProductCard from '@/components/reusableComponents/FeatureProductCard';
import PageBanner from '@/components/reusableComponents/PageBanner';
import ProductsSidebar from '@/components/shared/ProductsSidebar';
import { useGetProductsQuery } from '@/redux/features/products/productApi';
import { TProduct } from '@/types/Interface';
import { FormEvent, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export interface TFilterValues {
  searchTerm: string;
  sortByPrice: string;
  stockStatus: string;
  categories: string[];
}

const ProductsPage = () => {
  const [categories, setCategories] = useState<string[]>([
    'Cardio Training',
    'Weight lift',
    'Treadmills',
    'Strength',
    'LIFE FITNESS',
  ]);

  const location = useLocation();
  const category = location.state as string;
  const initialFilterValues: TFilterValues = {
    searchTerm: '',
    sortByPrice: 'asc',
    stockStatus: '',
    categories: [`${category ? category : ''}`],
  };

  const [filters, setFilters] = useState<TFilterValues>(initialFilterValues);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    `${category ? category : ''}`,
  ]);
  const { data: products, isLoading } = useGetProductsQuery(filters);

  useEffect(() => {
    if (products?.data) {
      const newCategories = Array.from(
        new Set(products.data.map((product: TProduct) => product.p_category)),
      );

      setCategories(
        (prevCategories) =>
          Array.from(
            new Set([...prevCategories, ...newCategories]),
          ) as string[],
      );
    }
  }, [products]);

  if (isLoading) {
    return <>Loading...</>;
  }

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFilters((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (category: string) => {
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

  const handleFilterSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  const img =
    'https://dt-fitfinity.myshopify.com/cdn/shop/files/AdobeStock_320492530_Preview.jpg?v=1701422683&width=1920';

  return (
    <div className="">
      <PageBanner bannerTitle={''} img={img} />

      {/* product page layout  */}

      <section className=" container py-10 px-4 md:px-0  md:grid md:grid-cols-5 gap-4">
        {/* Search and filter */}

        <ProductsSidebar
          filters={filters}
          handleFilterSubmit={handleFilterSubmit}
          handleFilterChange={handleFilterChange}
          handleCheckboxChange={handleCheckboxChange}
          selectedCategories={selectedCategories}
          categories={categories}
          resetFilters={resetFilters}
        />

        {/* )} */}

        {/* </Formik> */}

        {/* product grid */}
        <div className="col-span-4">
          <div className="flex items-center py-2 p-2   mb-7 justify-between">
            <p>Showing 1–12 of {products?.data.length} results</p>

            <select
              name="sortByPrice"
              className='text-black font-medium border  bg-opacity-10  
               text-sm rounded-lg  block  p-2.5               '
              value={filters.sortByPrice || 'Sort By Price'}
              onChange={handleFilterChange}
            >
              <option className='p-2 h-20' value="asc">Low to High</option>
              <option className='p-2'  value="desc">High to Low</option>
            </select>
            {/* </form> */}
          </div>

          <div className="grid w-full grid-cols-2 md:grid-cols-4 gap-4">
            {/* Todo product card */}
            {products?.data?.map((product: TProduct) => (
              <FeatureProductCard key={product._id} data={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
