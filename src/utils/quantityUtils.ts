
export const handleIncrementQty = (id, pQty, isStock, setQuantity, setIsStock, dispatch, addProductCart) => {
 
  
    if (isStock > 0 ) {
      const newQty = pQty + 1;
   
      
    //   setQuantity(newQty);
    //   setIsStock(isStock - 1);
      dispatch(addProductCart({ productId: id, quantity: newQty }));
    }
  };
  
  export const handleDecrementQty = ( id, pQty, isStock, setQuantity, setIsStock, dispatch, addProductCart) => {
  
  
    if (pQty > 1) {
      const newQty = pQty - 1;
    
      dispatch(addProductCart({ productId: id, quantity: newQty }));
      
    //   setQuantity(newQty);
    //   setIsStock((prevStock) => prevStock + 1);
    }
  };
  