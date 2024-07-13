
import { Dispatch } from 'redux';
import { AddProductCartAction } from './../types/Interface';
type SetIsStockFunction = (isStock: number) => void;

export const handleIncrementQty = (
  id: string,
  pQty: number,
  isStock: number,
 
  _setIsStock: SetIsStockFunction,
  dispatch: Dispatch<AddProductCartAction>,
  addProductCart: (payload: {
    productId: string;
    quantity: number;
  }) => AddProductCartAction,
) => {
  if (isStock > 0) {
    const newQty = pQty + 1;

    //   setQuantity(newQty);
    //   setIsStock(isStock - 1);
    dispatch(addProductCart({ productId: id, quantity: newQty }));
  }
};

export const handleDecrementQty = (
  id: string,
  pQty: number,
  _isStock: number,
 
  _setIsStock: SetIsStockFunction,
  dispatch: Dispatch<AddProductCartAction>,
  addProductCart: (payload: {
    productId: string;
    quantity: number;
  }) => AddProductCartAction,
) => {
  if (pQty > 1) {
    const newQty = pQty - 1;

    dispatch(addProductCart({ productId: id, quantity: newQty }));

    //   setQuantity(newQty);
    //   setIsStock((prevStock) => prevStock + 1);
  }
};
