import React from 'react';
import FeatureProductCard from '../reusableComponents/FeatureProductCard';
import MainTttle from '../reusableComponents/MainTttle';
import TagTitle from '../reusableComponents/TagTitle';

const FeaturedProduct = () => {

    // todo product import 
    const productData = [
        {
            id:1,
        },
        {
            id:1,
        },
        {
            id:1,
        },
        {
            id:1,
        },
        {
            id:1,
        },
        {
            id:1,
        },
        {
            id:1,
        },
        {
            id:1,
        }
    ]
    return (
        <div className="space-y-10">
            <div className="text-center space-y-1.5 mx-auto">
            <TagTitle  tagTitle={"New Arrivals"}/>
            <MainTttle title={"Featured Products"} />
            <p>Aenean Vel Elit Scelerisque Mauris Pellentesque. At Varius Vel Pharetra Vel Turpis.Volutpat Odio <br/> Facilisis Mauris Sit Amet Massa Vitae Tortor Condimentum.</p>
            </div>
            
            {/* product list section  */}
            <section className="grid grid-cols-4 items-center container gap-10">
{
    productData?.map((product,i)=> (<FeatureProductCard key={i} data={product}/>))

}
            </section>
        </div>
    );
};

export default FeaturedProduct;