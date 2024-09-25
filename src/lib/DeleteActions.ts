
'use server'

import { validRequest } from "@/auth"
import db from "./db";
import { redirect } from "next/navigation";


export async function DeleteEmployee(id:string){

    const session = await validRequest();

    if(!session.user){
        throw new Error('Unauthorized');
    };

    await db.empoylee.delete({
        where:{id}
    })

   return redirect('/');
}