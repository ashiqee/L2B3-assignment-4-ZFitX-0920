import CategorySection from '@/components/homepage/CategorySection';
import FeaturedProduct from '@/components/homepage/FeaturedProduct';
import Hero from '@/components/homepage/Hero';
import React from 'react';
import BenefitSection from './../components/homepage/BenefitSection';

const HomePage = () => {
    return (
        <div className='space-y-20'>
            <Hero/>
            <CategorySection/>
            <FeaturedProduct/>
            <BenefitSection/>
    </div>
    );
};

export default HomePage;