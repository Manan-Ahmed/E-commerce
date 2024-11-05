"use client"

import Navbar from "@/component/navbar";
import Product from "./(products)/product/page";
// import { useRouter } from "next/router";
import { useProductContext } from "@/context/productcontext";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";


export default function Home() {
//    const route = useRouter()
//    const {cartItem} = useProductContext()!
//    const [qty,setQty] = useState(1)
//    const [cardSelect,setCardSelect] = useState<string[]>([])
   
//        useEffect(()=>{
//            if(cartItem){
//                console.log(cartItem);
//                setCardSelect([...cartItem])
               
//            }else{
//                console.log('item is not available');
               
//            }
//        },[cartItem])
 
//        const add = ()=>{
//          setQty(qty + 1)
//        }
//        const min = ()=>{
//          setQty(
//          qty > 0 ? qty - 1 : 0
//          )
//        }
         
 
       
//  const order = ()=>{
//      route.push('/product/ordernow')
//  }
         
 
  return (

    <>


{/* <div className="navbar bg-base-400 border-b-2">
  <div className="flex-1">
    <h1 className="font-bold text-xl">Shoes</h1>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1 ">
      <li className="mt-4"><a>Signin</a></li>
      <li>
        
        <div className="drawer drawer-end">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    
    <label htmlFor="my-drawer-4" className="drawer-button btn "><div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span className="badge badge-sm indicator-item">{cartItem.length}</span>
        </div></label>
  </div>
  <div className="drawer-side ">
    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-base-100 text-base-content min-h-full w-80 p-4">
    

    {
      
      cardSelect.length > 0 ?  (cartItem.map((item:any)=>(

        <div className="grid grid-cols-2 gap-3 m-2" key={item.id}>
          <div className="col-span-4">
          <img src={item.url} alt="" />
          </div>
          <div className="col-span-8 mt-4 m-3" >
            <p className="font-bold">{item.description}</p>
            <p className="font-bold">{item.size}</p>  
              <p className="font-bold">{`Price:${item.price}`}</p>
              <div className="bg-white">  
                <button  onClick={add} style={{width: '40px' }} className="border-2 rounded bg-white">+</button>    
             <input className="border text-center" style={{width: '55px'}} 
              type="text"
              
              value={qty}

              onChange={(e)=>{setQty(e.target.value)}}
              
              />
              
              <button className="border-2" style={{width: '40px' }}  onClick={min}>-</button> 
              </div>
          </div>
         
        </div>
        
      )
     
      )
    
    ) 
  
      : <h2 className="font-bold text-4xl text-center mt-10">your cart is empty</h2>
             
    }


   
<button 
      className="bg-blue-800 text-white"
      style={{position: 'relative', top: '520px',textAlign: 'center',border: '1px solid black',margin: '4px'}}
      
      >
      order now
      </button>   
    </ul>
   
   
    
  </div>

  
</div>
      </li>
    </ul>
  </div>
</div> */}


<Navbar/>  


<Product/>




    </>
     
  );
}
