'use client'
import { Empoylee } from "@prisma/client";
import DeleteDialog from "./DeleteDialogCompoent";
import EditEmpolyeeDialog from "./EditEmpolyeeDialog";


interface EmployeRowProps{
   
    emaploye:Empoylee
}

export default function EmployeRow({emaploye}:EmployeRowProps){

    

    return(
       
                <tbody  className="divide-y divide-gray-200">
                    <tr>
                      
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                            {emaploye.name}
                        </td>
                        <td className={` px-6 py-4 whitespace-nowrap text-sm text-gray-800 `}>
                        <a href={`mailto:${emaploye.email}`}> {emaploye.email}</a>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                            {emaploye.address}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                            ₹ {emaploye.salary}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                           
                               <EditEmpolyeeDialog />
                          
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <div className=" cursor-pointer " >
                                <DeleteDialog id={emaploye.id} />
                            </div>
                        </td>
                    </tr>

                </tbody>
            )
        
    
}