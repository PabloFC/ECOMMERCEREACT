import { useReducer } from "react";
import { createContext } from "react";
import CartReducer from "./CartReducer";

export const CartContext = createContext();

const ContextProvider = ({ children }) => {
  const [cart, setCart] = useReducer(CartReducer, []);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default ContextProvider;
