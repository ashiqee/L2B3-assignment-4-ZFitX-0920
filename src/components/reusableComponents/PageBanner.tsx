import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

interface TPageBannerProps {
    bannerProps: string[];
    img: string;
}

const PageBanner = ({ bannerProps,img }:TPageBannerProps) => {
  return (
    <div>
      <Breadcrumb className="min-h-[160px] md:min-h-[240px] 2xl:h-[360px] flex justify-center uppercase bg-cover object-center items-center"
      style={{ backgroundImage: `url(${img})` }}
      >
        <BreadcrumbList className='2xl:pt-14 pt-0'>
          <BreadcrumbItem>
            <BreadcrumbLink href={bannerProps?.length >= 3 ? `/${bannerProps[1]}`:"/"}>
            {bannerProps?.length >= 3 ? bannerProps[1]:"Home"}
           
            
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{bannerProps?.length >= 3 ? bannerProps[2]:bannerProps[1]}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default PageBanner;
