
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

  export interface AddProductCartAction {
    type: string;
    payload: {
      productId: string;
      quantity: number;
    }
  }

  export interface TProduct {
    _id: string;
    p_category: string;
    p_price: number;
    p_name: string;
    p_description: string;
    p_images: string[];
    p_stock:number;
  }

  export interface TAboutItem {
    imgUlr: string;
    sortDes: string;
    sortTitle: string;
    icon: JSX.Element;
  }[]