import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const actionTypes = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  CLEAR_CART: 'CLEAR_CART',
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case actionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    case actionTypes.CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { cartItems: [] });

  const addItemToCart = (item) => {
    dispatch({ type: actionTypes.ADD_ITEM, payload: item });
  };

  const removeItemFromCart = (itemId) => {
    dispatch({ type: actionTypes.REMOVE_ITEM, payload: itemId });
  };

  const clearCart = () => {
    dispatch({ type: actionTypes.CLEAR_CART });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems: state.cartItems,
        addItemToCart,
        removeItemFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
