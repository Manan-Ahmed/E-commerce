"use client"
import { app } from "@/firebase/firebaseConfig"
import { getAuth } from "firebase/auth"
import Link from "next/link"
import { useState } from "react"


export default function Signup(){
const [email,setEmail] = useState('')
const [password,setPassword] = useState('')
const auth = getAuth(app);



     const login = (email:any,password:any)=>{
        console.log(email,password);
        setEmail('')
        setPassword('')
        
      }
    return(
        <>
        
        <h1 className="text-center align-middle"  style={{position: 'relative',top: '40px'}} >Login Account</h1>
        


  

  
        <div className="max-w-sm mx-auto"  style={{position: 'relative',top: '70px'}}>
  <div className="mb-5">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input type="email" id="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
  </div>
  <div className="mb-5">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input type="password" id="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
  </div>

  <button onClick={()=>{login(email,password)}} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    Signup</button>
  <Link href={'login'} style={{color: 'blue',margin: '5px'}}>Already have an Account login here</Link>

</div>

        </>
    )
}