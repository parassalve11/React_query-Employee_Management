


import { useFormStatus } from "react-dom";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";

import EditEmployeForm from "@/app/(main)/employee/[id]/EditEmployeeForm"; 

export default function EditEmpolyeeDialog(){
   const{pending} = useFormStatus();
    return(
        <div className="">
        <Dialog   >
  <DialogTrigger className="text-destructive font-semibold">
    Edit
  </DialogTrigger>
  <DialogContent className="h-screen  flex items-center justify-center ">
  
    <DialogFooter className="">
          
            <div className="h-screen flex items-center justify-center p-5">
            <div className="flex h-full w-full max-h-[40rem] max-w-[64rem] overflow-hidden bg-card rounded-2xl shadow-md">
                <div className="w-full overflow-y-auto p-10 space-y-10 ">
                    <div className=" space-y-1">
                        <h1 className="text-3xl font-bold">Edit Employee</h1>
                        <p className="text-muted-foreground text-xs">a place were admin can Edit products.</p>
                    </div>
                    <div className="space-y-5">
                        <EditEmployeForm/>
                    </div>
                </div>
            </div>
        </div>
          
    </DialogFooter>
  </DialogContent>
  {pending && <DialogClose />}
  
</Dialog>
        </div>
    )
}