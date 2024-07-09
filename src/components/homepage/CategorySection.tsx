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
            imgUrl:"https://dj7w0h47bhjwk.cloudfront.net/assets/home-grid/class--chisel-it-d8e7999396170b4808d443476a3cae4e5ce3a5ef012cdb44e2eb9c16a0102ce7.jpg",
            catergoryName:"HeadPhones",
        },
        {
            categoryId : 3,
            imgUrl:"https://dj7w0h47bhjwk.cloudfront.net/assets/home-grid/class--action-sports-a3e1f48b852c0879bcb766e4c480fa0bab4ab47edf25508ce7a1ab89beaed95d.jpg",
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
        <div className="space-y-10">
            <MainTttle title={"TOP CAtagories"}/>

            <div className='grid grid-cols-3  container'>
            {
                categorys.map((item)=> (<CatergoryCard key={item.categoryId} item={item}/>))
            }
            </div>
           
            
        </div>
    );
};

export default CategorySection;