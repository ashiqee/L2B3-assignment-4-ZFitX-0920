import BenefitSection from '@/components/homepage/BenefitSection';
import MainTttle from '@/components/reusableComponents/MainTttle';
import PageBanner from '@/components/reusableComponents/PageBanner';
import TagTitle from '@/components/reusableComponents/TagTitle';
import { Button } from '@/components/ui/button';
import FlipCard from '@/components/ui/FlipCard';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { aboutImg, instragramImgs, teamsImg } from '@/static/AboutPageStatic';

import { Instagram, StampIcon } from 'lucide-react';

const AboutUs = () => {
  const img =
    'https://dt-fitfinity.myshopify.com/cdn/shop/files/AdobeStock_320492530_Preview.jpg?v=1701422683&width=1920';

  return (
    <div>
      <PageBanner bannerTitle={'About Us'} img={img} />
      <div className="container mx-auto">
        <div className="grid grid-cols-5  ">
          {aboutImg.map((item) => (
            <FlipCard item={item} />
          ))}
        </div>

        {/* WE ENDURE IN EVERY STAGES */}
        <div className="min-h-[550px] md:flex px-4 py-10 md:py-0 md:px-0 gap-10 items-center">
          <div className="w-full">
            <MainTttle className="text-left" title="ENDURE IN EVERY STAGES" />
            <TagTitle tagTitle="For A Healthy life" />
            <p className="text-justify">
              With life bringing companionship, it follows that the individual
              thrives. Living now feels dignified and orderly. Like a maze, this
              journey's winding paths lead forward. A just life, unburdened,
              brings growth and wisdom. In such conditions, there is a delicate
              balance. It takes just the right amount of time to nurture and
              cultivate. Like a small bird resting, so does the mind settle when
              in a state of tranquility. Pain and pleasure, as with life, ebb
              and flow. This lively existence now unfolds.
              <br />
              <br />
              <br />
              Strong and resolute, we navigate life’s challenges, ever adjusting
              to the delicate balance. Unburdened, life justifies its purpose
              through ease and clarity. With mindful steps, we adapt to life’s
              fluctuations.
            </p>
          </div>
          <div className="border-l-2 min-h-36 p-10 space-y-5 border-l-primary w-full">
            <p>
              A worthy pursuit, like a dream, should be approached with resolve.
              Challenging as it may be, the effort brings about harmony and
              growth. Flowing seamlessly, it weaves a narrative of life.
            </p>

            <p>Barry Hanry - co</p>
          </div>
        </div>
        {/* benfit section  */}
        <BenefitSection />

        {/* team introduction  */}
        <div className="py-20 ">
          <MainTttle
            className="text-center py-6"
            title="TEAM OF EXPERT COACHES"
          />
          <p className="max-w-5xl px-4 md:px-0 py-4 text-center mx-auto">
            At our core, we believe in the power of unity and teamwork. As a
            fitness team, we push each other to reach new heights, celebrate
            each victory, and tackle every challenge head-on. Together, we
            strive for greatness, knowing that our combined strength and support
            make us unstoppable. With every workout, we grow stronger, fitter,
            and more resilient, embodying the spirit of perseverance and
            camaraderie. Join us and unleash your potential, because together,
            we are stronger.
          </p>
          <div className="grid grid-cols-4 py-10 ">
            {teamsImg.map((item) => (
              <FlipCard item={item} />
            ))}
          </div>
        </div>

        {/* JOIN US FROM  */}
        <MainTttle title='Contact us' className='' />
<div className='grid md:grid-cols-2 gap-4 py-20   justify-between'>
    <div className='spacy-y-3'>
<MainTttle className='text-left' title='FEEL FREE TO ASK US!' />
<p>Somenthisadhaldla ajsldjad</p>

<ul>
    <li>251, Buyas</li>
    <li>Boklyn, TX-2012,</li>
    <li>zfitx@axfitx.com</li>
</ul>
    </div>
    <div>
<form className='space-y-4 px-10' action="">
   <div className='flex gap-4 items-center'>
   <Input type='text' placeholder='Your full name'/>
   <Input type='email' placeholder='Email Address'/>
   </div>
    <Input type='text' placeholder='Subject'/>
    <Textarea  placeholder='Drop us a few lines here'/>

    <div className='flex justify-end'>
    <Button >Send</Button>
    </div>
</form>



    </div>
</div>
       
      </div>
       {/* INSTRAGRAM US FROM  */}
       <div>
          <p className="flex gap-2 py-4 items-center justify-center">
            <Instagram /> FOLLOW US ON @GFITX
          </p>
          <div className="flex mb-0 overflow-y-hidden  md:overflow-x-hidden scrollbar-hide ">
            {instragramImgs.map((img, i) => (
              <div key={i}>
                <img className="w-40" src={img.imgUrl} />
              </div>
            ))}
          </div>
        </div>
    </div>
  );
};

export default AboutUs;
