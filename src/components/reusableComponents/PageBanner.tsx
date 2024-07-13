import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { useCurrentPath } from '@/hooks/useCurrentPath';
interface TPageBannerProps {
   
    img: string;
    bannerTitle:string;
}

const PageBanner = ({img,bannerTitle }:TPageBannerProps) => {

  const currentPath = useCurrentPath()
  return (
    <div className="min-h-[160px] md:min-h-[240px] 2xl:h-[360px] flex justify-center uppercase bg-center bg-cover object-center items-center"
    style={{ backgroundImage: `url(${img})` }}>
      <Breadcrumb 
      >
        {bannerTitle && <h3 className='text-2xl md:text-4xl'>{bannerTitle.slice(0,50)} </h3>}

        <BreadcrumbList className='2xl:pt-14 pt-0'>
          <BreadcrumbItem>
            <BreadcrumbLink href={currentPath?.length >= 3 ? `/${currentPath[1]}`:"/"}>
            {currentPath?.length >= 3 ? currentPath[1]:"Home"}
           
            
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{currentPath?.length >= 3 ? "":currentPath[1]}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default PageBanner;
