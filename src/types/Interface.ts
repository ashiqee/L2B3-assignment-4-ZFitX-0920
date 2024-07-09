
export interface TMenuItem {
    menuId:number;
    label:string;
    path:string;
  }
  
export interface MenusProps {
    menus: TMenuItem[]
}

export interface TCategory{
    categoryId:number;
    imgUrl:string;
    catergoryName:string;
}

export interface TCategoryProps{
    item:TCategory;
}

export interface TBenefit{
    id:number;
    title:string;
    description:string;
    image:string;
  }

  export interface TBenifitProps{
    benefits:TBenefit[];
  }