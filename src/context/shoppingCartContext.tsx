import { createContext, useContext, ReactNode } from "react";
import { useState } from "react";
import { ShoppingCart } from "../components/ShoppingCart";

//type of children property inside of react
type ShoppingCartProviderProps = {
    children: ReactNode
}

//we will have 4 functions in our context
type ShoppingCartContext = {
    openCart: () => void;
    closeCart: () => void;
    getItemQuantity: (id: number) => number;
    increaseCartQuantity: (id: number) => void;
    decreaseCartQuantity: (id: number) => void;
    removeFromCart: (id: number) => void;
    cartQuantity: number;   
    cartItems: CartItem[];

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
    const [isOpen, setIsOpen] = useState(false)
    const [cartItems, setCartItems]=useState<CartItem[]>([])

    const cartQuantity = cartItems.reduce((quantity, item) => quantity + item.quantity, 0)

    function openCart(){
        setIsOpen(true)
    }
    function closeCart(){
        setIsOpen(false)
    }
    function getItemQuantity(id: number){
        return cartItems.find(item => item.id === id)?.quantity || 0
    }

    function increaseCartQuantity(id: number){
      setCartItems(currentItems =>{
        if(currentItems.find(item => item.id === id) == null){
            return [...currentItems, {id, quantity: 1}]
        }else {
            return currentItems.map(item => item.id === id ? {...item, quantity: item.quantity + 1} : item)
        }
      })
    }

    function decreaseCartQuantity(id:  number){
        setCartItems(currentItems =>{
            if(currentItems.find(item => item.id === id)?.quantity === 1) {
                return currentItems.filter(item => item.id !== id)
            }else {
                return currentItems.map(item => item.id === id ? {...item, quantity: item.quantity - 1} : item)
            }
        })
    }
 
    function removeFromCart(id: number){
        setCartItems(currentItems => {
           return currentItems.filter(item => item.id !== id)
    })
    }

return <ShoppingCartContext.Provider value={{getItemQuantity, increaseCartQuantity, 
decreaseCartQuantity, removeFromCart, cartItems, cartQuantity, openCart, closeCart}}>
    {children}
    <ShoppingCart isOpen={isOpen}/>
</ShoppingCartContext.Provider> //rerender those children
}