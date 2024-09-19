"use server";

import { validRequest } from "@/auth";
import db from "@/lib/db";
import { Prisma } from "@prisma/client";
import { redirect } from "next/navigation";




export type employee = Prisma.EmpoyleeGetPayload<{
    select:{id:true}
}>


export async function editEmploye(formData: FormData) {
  const name = formData.get("name")?.toString();
  const email = formData.get("email")?.toString();
  const address = formData.get("address")?.toString();
  const salary = Number(formData.get("salary"));

  

  if (!name || !email || !address || !salary) {
    throw new Error("Plaese check your all Fileds.");
  }
  const session = await validRequest();

  if(!session.user){
    throw new Error('Unauthorized User.')
  }
    
  // const employe = await getEmployee();
 

  const employe = await db.empoylee.findFirst({
    where:{
      srno:0
    }
  })
 

  await db.empoylee.updateMany({
    where:{
        id: employe?.id
    },
    data: {
      name,
     email,
     address,
     salary
    },
  });

  redirect("/");
}


