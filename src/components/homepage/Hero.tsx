import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import Autoplay from "embla-carousel-autoplay"
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";

export function Example() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2500,
        }),
      ]}
    >
      // ...
    </Carousel>
  )
}

const Hero = () => {
const [isHover,setIsHover]= useState(false)
    const carouselImg = [
        {
            id:1,
            url: 'https://dt-fitfinity.myshopify.com/cdn/shop/files/Group_13_3.png?v=1707204172',
            tagLine:"SAVE UPTO 50% off",
            title:"Coaces guide goals achived.",

           
        },
        {
            id:2,
            // url: 'https://i.postimg.cc/hvF6f3TF/Slider-1-1.webp'
            url: 'https://dt-fitfinity.myshopify.com/cdn/shop/files/Slider_1_1.png?v=1707204173',
            tagLine:"SAVE UPTO 50% off",
            title:"Select werkeuts, stay committed",
           
        },
        {
            id:3,
            url: 'https://dt-fitfinity.myshopify.com/cdn/shop/files/Group_13_4.png?v=1707204172',
            tagLine:"SAVE UPTO 50% off",
            title:"Select werkeuts stay committed",
           
        },
    ]


    return (
        <Carousel
        onMouseOver={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)}
        plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
        >
  <CarouselContent>
    {
        carouselImg.map((item)=> (<CarouselItem className="relative " key={item.id}>  
        <img
  className="object-cover  object-right-bottom   min-h-[60vh] xl:object-cover"
  src={item.url}
  alt={`slide-${item.id}`}
/>
        <div className="absolute top-[13%] left-48 xl:top-[30%] max-w-40 2xl:container xl:max-w-[500px] xl:left-40 2xl:left-64 items-center">
            <p className="uppercase text-sm md:text-xl">{item.tagLine}</p>
            <h3 className="2xl:text-7xl text-4xl   md:text-5xl font-bold uppercase">{item.title}</h3>
            <Button className="mt-1">SHOP NOW</Button>
        </div>
    </CarouselItem>)  )
    }
   
    
  </CarouselContent>
  <CarouselPrevious className={`absolute ${isHover ? "left-2 bg-primary":"hidden"}  top-1/2 text-2xl   transform -translate-y-1/2  text-black rounded-full`}>
       <ArrowLeft/>
      </CarouselPrevious>
      <CarouselNext className={`absolute ${isHover ? "right-2 bg-primary": "hidden"}  top-1/2 transform -translate-y-1/2  text-black  rounded-full`}>
        Next
      </CarouselNext>
</Carousel>

       
    );
};

export default Hero;