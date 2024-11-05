"use client"

import Foater from "@/component/foater"
import { useProductContext } from "@/context/productcontext"
import { db } from "@/firebase/firebaseConfig"
import { collection, DocumentData, onSnapshot, query, where } from "firebase/firestore"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"



export default function Product(){
const [product,setProduct] = useState<DocumentData[]>([])
const {cartItem} = useProductContext()!

const route = useRouter()
    useEffect(()=>{
        fetchProduct()
    },[])
console.log('addtocart',cartItem);

    const fetchProduct = ()=>{



        const productRef = collection(db,"products")
        const q = query(productRef,where("category", 'in', ["Shoes","Elite"]))

     let unSub =  onSnapshot(q,(docSnap)=>{
                console.log(docSnap);
          let productlist =   docSnap.docs.map((product)=>({...product.data(),id:product.id}))
                
          console.log(productlist);
          setProduct(productlist)
                
        })
    }

   
    return(
        <>
              <section className="text-gray-600 body-font  overflow-hidden">
                    <div className="container px-5 py-24 mx-auto">
                      <div className="flex flex-wrap -m-4">
              {
                product? product.map((product)=>(
                  
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={product.id}>
                          <Link     href={`/product/${product.id}`}  className="block relative h-58 rounded overflow-hidden" >
                            <img
                              alt="ecommerce"
                              className="object-cover object-center w-full h-full block"
                              src={product.url}
                            />
                          </Link>
                          <div className="mt-4 text-center">
                            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                              {/* CATEGORY */}
                            </h3>
                            <h2 className="text-gray-900 title-font text-lg font-medium">
                             {product.category}
                            </h2>
                            <p className="mt-1">{`Price${product.price}`}</p>

                          </div>
                        </div>
                    
                  
                
                ))
                :  <h1>Product not Available</h1>
              }
                </div>
                    </div>
                  </section>


        </>
    )
}
