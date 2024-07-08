import React from 'react';
import MainTttle from '../reusableComponents/MainTttle';
import CatergoryCard from '../reusableComponents/CatergoryCard';

const CategorySection = () => {

    const categorys =[
        {
            categoryId : 1,
            imgUrl:"https://dt-fitfinity.myshopify.com/cdn/shop/files/Rectangle_9.png?v=1707204172&width=750",
            catergoryName:"Rope Workout",
        },
        {
            categoryId : 2,
            imgUrl:"https://images.playground.com/6b2ebc67326d4fc1824240cc1493f21f.jpeg",
            catergoryName:"HeadPhones",
        },
        {
            categoryId : 3,
            imgUrl:"https://images.playground.com/7da37105f2b94b2286c72eb5715f4940.jpeg",
            catergoryName:"Work Out",
        },
        {
            categoryId : 4,
            imgUrl:"https://dt-fitfinity.myshopify.com/cdn/shop/files/Rectangle_4_5.png?v=1707291964&width=1500",
            catergoryName:"Weight lift",
        },
        {
            categoryId : 5,
            imgUrl:"https://images.playground.com/d5c52d8a0075464ea6347c8528c4f81a.jpeg",
            catergoryName:"TREADMILL",
        },
        {
            categoryId : 6,
            imgUrl:"https://assets.playgroundai.com/07e26373-36ed-452f-8f80-b88ccbe870eb.jpg",
            catergoryName:"ZUmba",
        },
    ]

    return (
        <div>
            <MainTttle title={"TOP CAtagories"}/>

            <div className='grid grid-cols-3 container'>
            {
                categorys.map((item)=> (<CatergoryCard item={item}/>))
            }
            </div>
           
            
        </div>
    );
};

export default CategorySection;