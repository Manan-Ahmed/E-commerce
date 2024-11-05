"use client"
import { ReactNode } from "react"
import Link from "next/link"



type AdminLayoutType = {
    children: ReactNode
}


export default function AdminLayput({children}:AdminLayoutType){
    return(
        <>


{children}
        </>
    )
}