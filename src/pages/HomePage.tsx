import CategorySection from '@/components/homepage/CategorySection';
import FeaturedProduct from '@/components/homepage/FeaturedProduct';
import Hero from '@/components/homepage/Hero';
import React from 'react';

const HomePage = () => {
    return (
        <div className='space-y-20'>
            <Hero/>
            <CategorySection/>
            <FeaturedProduct/>
    </div>
    );
};

export default HomePage;