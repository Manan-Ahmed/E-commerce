"use client"
import { createContext, ReactNode, useContext, useState } from "react";

type childrenType = {
    children:ReactNode
}

type productContextType = {
    cartItem: any 
    setCartItem: any
}
const ProductContext = createContext<productContextType | null>(null)



export default function ProductContextProvider({children}: childrenType){

    const [cartItem,setCartItem] = useState<any>([])
    return(
        <>
        
          <ProductContext.Provider value={{cartItem,setCartItem}}>
          {children}

          </ProductContext.Provider>
        </>
    )
}

export const useProductContext = ()=> useContext(ProductContext)