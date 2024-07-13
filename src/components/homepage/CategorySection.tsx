
import MainTttle from '../reusableComponents/MainTttle';
import CatergoryCard from '../reusableComponents/CatergoryCard';
import { TCategory } from './../../types/Interface';
import { categories } from '@/static/pageContent';


const CategorySection = () => {

   
    return (
        <div className="">
            <MainTttle className="text-center" title={"TOP CAtagories"}/>

            <div className='grid grid-cols-2 pt-10 md:grid-cols-3   container'>
            {
                categories.map((item:TCategory)=> (<CatergoryCard key={item.categoryId} item={item}/>))
            }
            </div>
           
            
        </div>
    );
};

export default CategorySection;