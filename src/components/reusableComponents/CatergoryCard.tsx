
import {  TCategoryProps } from '@/types/Interface';
import { Link } from 'react-router-dom';

const CatergoryCard = ({item}:TCategoryProps) => {
    return (
        <div className="relative h-[260px] md:h-[400px] bg-cover
         md:hover:text-5xl overflow-hidden  md:text-3xl 
         text-xl hover:text-2xl
         transition duration-1000
         hover:scale-90 bg-center" 
         style={{ backgroundImage: `url(${item.imgUrl})` }}>
       <Link to={`/products`}
        state={item.catergoryName}
       > <div className="absolute hover:bg-primary/30 fade-in-15 inset-0 flex items-center justify-center">
          <div className=" bg-opacity-80 p-8 rounded-lg shadow-lg  w-full">
            <h2 className=" text-center uppercase font-bold mb-4">{item.catergoryName}</h2>
          
          </div>
        </div></Link>
      </div>
    );
};

export default CatergoryCard;