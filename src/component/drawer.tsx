
"use client"

import { useProductContext } from "@/context/productcontext";
import { useEffect, useState } from "react";


export default function Drawer(){

    const {cartItem} = useProductContext()!
const [cardSelect,setCardSelect] = useState<string[]>([])

    useEffect(()=>{
        if(cartItem){
            console.log(cartItem);
            setCardSelect([...cartItem])
            
        }else{
            console.log('item is not available');
            
        }
    },[cartItem])

    return(
        <>
          <div className="drawer drawer-end">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    
    <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">Open drawer</label>
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
    

    {
      cardSelect ?  cartItem.map((item:any)=>{
        console.log(item);
        
      })  : <h2>cart is empty</h2>
             
    }
      <li>{cardSelect.length}</li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
</div>
        </>
    )
}