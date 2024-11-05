"use client"
import { ReactNode } from "react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import Navbar from "@/component/navbar"



type ProductLayoutType = {
    children: ReactNode
}


export default function ProductLayout({children}:ProductLayoutType){
    return(
        <>

<Navbar/>
{children}
        </>
    )
}