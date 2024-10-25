'use client'
import { Input } from "@/components/ui/input";

import LoadingButton2 from "@/components/LoadingButon2";

import { addEmploye } from "./actions";
import { useRef, useState } from "react";



export default function AddEmployeForm(){
    const ref = useRef<HTMLFormElement>(null)
    return(
        <form  ref={ref}  action={async(formData) =>{
            await addEmploye(formData)
            ref.current?.reset()
        }} className=" grid items-center grid-cols-2   gap-4">
            <Input 
            required
            name="name"
            placeholder="Full Name"
            className="w-full"
            />
            <Input 
            required
            name="email"
            placeholder="Email"
            className="w-full"
            
            />
            <Input
            required
            name="address"
            placeholder="Address"
            className="w-full"
            />
            <Input 
            required
            name="salary"
            placeholder="Salary"
            className="w-full"
            type="number"
            />

           <div className="flex items-center justify-end">
           <LoadingButton2 type="submit"  className="">Submit</LoadingButton2>
           </div>
           
        </form>
    )
}