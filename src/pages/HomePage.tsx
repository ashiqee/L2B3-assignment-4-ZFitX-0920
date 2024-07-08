import CategorySection from '@/components/homepage/CategorySection';
import Hero from '@/components/homepage/Hero';
import React from 'react';

const HomePage = () => {
    return (
        <div className='space-y-10'>
            <Hero/>
            <CategorySection/>
    </div>
    );
};

export default HomePage;