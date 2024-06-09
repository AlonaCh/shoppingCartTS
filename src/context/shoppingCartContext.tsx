import { createContext, useContext, ReactNode } from "react";
import { useState } from "react";

//type of choldren property inside of react
type ShoppingCartProviderProps = {
    children: ReactNode
}

//we will have 4 functions in our context
type ShoppingCartContext = {
    getItemQuantity: (id: number) => number;
    increaseCartQuantity: (id: number) => void;
    decreaseCartQuantity: (id: number) => void;
    removeItem: (id: number) => void;

}

type CartItem ={
    id: number;
    quantity: number;
}

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart(){
    return useContext(ShoppingCartContext)
}


//wrapper around our context that has children object. We are gonna re-render those children. 
export function ShoppingCartProvider({children}: ShoppingCartProviderProps){
    const [cartItem, setCartItem]=useState<CartItem[]>([])

return <ShoppingCartContext.Provider value={{}}>{children}
</ShoppingCartContext.Provider> //rerender those children
}