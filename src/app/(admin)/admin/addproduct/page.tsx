"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { db, storage } from "@/firebase/firebaseConfig"
import { addDoc, collection } from "firebase/firestore"
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage"
import { File } from "lucide-react"

import { useState } from "react"



export default function AddProduct(){

  const [category,setCategory] = useState('')
  const [price,setPrice] = useState('')
  const [size,setSize] = useState('')
  const [pic,setPic] = useState<File | null>()
  const [description,setDescription] = useState('')
const [loading,setLoading] = useState(false)

  const addproduct = async(url:string)=>{
    

    let obj = {category,price,size,url,description}
console.log('addproduct===>',obj);

const collectionRef = collection(db,"products")
     const productadded =   await  addDoc(collectionRef,obj)
console.log('addproduct===>',productadded
);
  }



const uploadpic = ()=>{
  console.log(pic);
  setLoading(true)

const storageRef = ref(storage, `images/product${pic?.name}`);

const uploadTask = uploadBytesResumable(storageRef, pic!);

uploadTask.on('state_changed', 
  (snapshot) => {


  }, 
  (error) => {
  }, 
  () => {

    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      console.log('File available at', downloadURL);
      addproduct(downloadURL)
setLoading(false)
    });
  }
); 

}


const makeimagename = ()=>{
  if(!pic?.name) return
     let imageName = pic?.name.split('.')
     let lastIndex = imageName?.length - 1
     let imageType = imageName[lastIndex]
     let newName = `${pic.name}.${imageType}`
     return newName
}
    return(
        <>




    


          <div className="max-w-sm mx-auto">
            <div className="mt-8">

          <div className="mb-3">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Product Picture</label>
        <input type="file" 
        onChange={(e)=>{
          let files = e.target.files
          if(files?.length){
            setPic(files[0])
          }
        }}
         className="file-input w-full max-w-xs" />
      </div>
            <div className="mb-3">
            <Input placeholder="Product Category" 
             value={category}
            onChange={(e)=>{setCategory(e.target.value)}}
            />

            </div>

            <div className="mb-3">

<Input placeholder="Product Size"

value={size}
onChange={(e)=>{setSize(e.target.value)}}
/>

</div>

            <div className="mb-3">

<Input placeholder="Product price"
  value={price}
  onChange={(e)=>{setPrice(e.target.value)}}

/>

</div>


<div className="mb-3">

<Textarea   placeholder="product Description"
  value={description}
  onChange={(e)=>{setDescription(e.target.value)}}
/>
</div>

<div className="float-right">
<Button  onClick={uploadpic} >Button</Button>

</div>

</div>



</div>


        </>
    )
}