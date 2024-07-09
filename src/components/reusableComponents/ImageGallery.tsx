import MainTttle from "./MainTttle";

import { useState } from 'react';
import './gallery.css'



const ImageGallery = () => {
    const [modal, setModal] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);



    const galleryImgs = [
        {
            id:1,
            imgUrl: 'https://www.goodlifefitness.com/home/_jcr_content/root/responsivegrid/responsivegrid/responsivegrid/teaser_1250445619.coreimg.90.512.jpeg/1700499080303/-dsc6197.jpeg',
        },
        {
            id:3,
            imgUrl: 'https://www.goodlifefitness.com/content/experience-fragments/goodlife/class_lading_page/text-banner/Fitness-Classes/_jcr_content/root/responsivegrid/responsivegrid/image.coreimg.90.1024.png/1591300257455/classeslandingpage-hero.png',
        },
        {
            id:4,
            imgUrl: 'https://www.goodlifefitness.com/content/experience-fragments/goodlife/class_lading_page/teaser-tiles/Class-categories/_jcr_content/root/responsivegrid/responsivegrid/teaser_2003964275.coreimg.90.1024.jpeg/1608019569672/img-class-cat-dance.jpeg',
        },
        {
            id:2,
            imgUrl: 'https://www.goodlifefitness.com/home/_jcr_content/root/responsivegrid/responsivegrid/responsivegrid/teaser.coreimg.90.512.jpeg/1700498867984/-dsc1897.jpeg',
        },
        {
            id:5,
            imgUrl: 'https://www.goodlifefitness.com/content/experience-fragments/goodlife/class_lading_page/teaser-tiles/Class-categories/_jcr_content/root/responsivegrid/responsivegrid/teaser_1454508705.coreimg.90.1024.jpeg/1608019642649/15.jpeg',
        },
        {
            id:6,
            imgUrl: 'https://shop.fit4mom.com/cdn/shop/files/NewRetail_40_720x.jpg?v=1698790146',
        },
    ]



    const getImg = (i:number) => {

        setCurrentIndex(i)

        setModal(true)

    }

    const showNextImg = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImgs?.length);
    };

    const showPrevImg = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + galleryImgs?.length) % galleryImgs?.length);
    };



    return (
        <div>
            <MainTttle className={"text-center"} title="Image Gallery"/>
            <div
                className={modal ? 'modal open flex-col' : 'modal'}>
               
               {modal && <img src={galleryImgs[currentIndex].imgUrl} />}
                <button onClick={() => setModal(false)} className='text-white text-2xl top-10 right-10 rounded-full hover:bg-gray-900 p-5 fixed cursor-pointer'>X</button>
                <button onClick={showNextImg} className='text-white text-2xl top-50 right-10 rounded-full hover:bg-gray-900 p-5 fixed cursor-pointer'>R</button>
                <button onClick={showPrevImg} className='text-white text-2xl top-50 left-10 rounded-full hover:bg-gray-900 p-5 fixed cursor-pointer'>L</button>
               
               
               <div className='slider-container  '>
               {
                    galleryImgs?.map((item,i)=>(
                        <div onClick={() => setCurrentIndex(i)} className={`thumbnail ${currentIndex === i ? 'active  border-red-600 border-2' : ''}`} key={i}>
                        <img src={item.imgUrl} alt='' />
                    </div>
                    ))
                }
               </div>
            </div>
            <div className="container py-5 px-4 lg:px-0 mx-auto">
                
                <div className='gallery  rounded-[2.5rem]'>

                    {
                        galleryImgs?.map((data, i) => (
                            <div onClick={() => getImg(i)} className='pics' key={i} >
                                <img src={data.imgUrl} alt=''
                                    className='w-full'
                                />
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    );
};

export default ImageGallery;