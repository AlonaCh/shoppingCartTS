import { createContext, useContext, ReactNode } from "react";

//type of choldren property inside of react
type ShoppingCartProviderProps = {
    children: ReactNode
}

const ShoppingCartContext = createContext({});

export function useShoppingCart(){
    return useContext(ShoppingCartContext)
}


//wrapper around our context that has children object. We are gonna re-render those children. 
export function ShoppingCartProvider({children}: ShoppingCartProviderProps){
return <ShoppingCartContext.Provider value={{}}>{children}
</ShoppingCartContext.Provider> //rerender those children
}