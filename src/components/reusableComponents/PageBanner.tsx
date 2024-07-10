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
}

const PageBanner = ({img }:TPageBannerProps) => {

  const currentPath = useCurrentPath()
  return (
    <div>
      <Breadcrumb className="min-h-[160px] md:min-h-[240px] 2xl:h-[360px] flex justify-center uppercase bg-cover object-center items-center"
      style={{ backgroundImage: `url(${img})` }}
      >
        <BreadcrumbList className='2xl:pt-14 pt-0'>
          <BreadcrumbItem>
            <BreadcrumbLink href={currentPath?.length >= 3 ? `/${currentPath[1]}`:"/"}>
            {currentPath?.length >= 3 ? currentPath[1]:"Home"}
           
            
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{currentPath?.length >= 3 ? currentPath[2]:currentPath[1]}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default PageBanner;
