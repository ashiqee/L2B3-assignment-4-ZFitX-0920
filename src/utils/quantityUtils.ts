
export const handleIncrementQty = (id, pQty, isStock, setQuantity, setIsStock, dispatch, addProductCart) => {
    
    if (isStock > 0) {
      const newQty = pQty + 1;
      setQuantity(newQty);
      setIsStock(isStock - 1);
      dispatch(addProductCart({ productId: id, quantity: newQty }));
    }
  };
  
  export const handleDecrementQty = (quantity, _id, setQuantity, setIsStock, dispatch, addProductCart) => {
    if (quantity > 1) {
      const newQty = quantity - 1;
      setQuantity(newQty);
      setIsStock((prevStock) => prevStock + 1);
      dispatch(addProductCart({ productId: _id, quantity: newQty }));
    }
  };
  