import PageBanner from '@/components/reusableComponents/PageBanner';

const AboutUs = () => {
     
    const img = "https://dt-fitfinity.myshopify.com/cdn/shop/files/AdobeStock_320492530_Preview.jpg?v=1701422683&width=1920"
    
    return (
        <div>
            <PageBanner  img={img} />
            about us
        </div>
    );
};

export default AboutUs;