"use server";

import db from "@/lib/db";
import { redirect } from "next/navigation";

export async function addEmploye(formData: FormData) {
  const name = formData.get("name")?.toString();
  const email = formData.get("email")?.toString();
  const address = formData.get("address")?.toString();
  const salary = Number(formData.get("salary"));

  if (!name || !email || !address || !salary) {
    throw new Error("Plaese check your all Fileds.");
  }

const employe = await db.empoylee.findFirst({
  where:{srno:0}
})

   await db.empoylee.updateMany({
    where:{
      id:employe?.id 
    },
    data:{
      srno:{
        increment:1
      }
    }
  })

  await db.empoylee.create({
    data:{
      srno:1,
      name,
     email,
     address,
     salary
    },
  });

  await db.empoylee.updateMany({
    where:{
      id:employe?.id 
    },
    data:{
      srno:{
        increment:1
      }
    }
  })

  redirect("/");
}
