'use client'


import { useFormStatus } from "react-dom";
import { Dialog, DialogClose, DialogContent,  DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import AddEmployeForm from "@/app/(main)/add-empoyee/AddEmpoyeeForm";

export default function AddEmpolyeeDialog(){
   const{pending} = useFormStatus();
    return(
        <div className="">
        <Dialog   >
  <DialogTrigger className="text-destructive font-semibold">
    <div className=" px-3 py-2 text-white bg-black rounded-2xl">
        Add new Employee
        </div>
  </DialogTrigger>
  <DialogContent className="h-screen  flex items-center justify-center ">
  
    <DialogFooter className="">
          
            <div className="h-screen flex items-center justify-center p-5">
            <div className="flex h-full w-full max-h-[40rem] max-w-[64rem] overflow-hidden bg-card rounded-2xl shadow-md">
                <div className="w-full overflow-y-auto p-10 space-y-10 ">
                    <div className=" space-y-1">
                        <h1 className="text-3xl font-bold">Add Employee</h1>
                        <p className="text-muted-foreground text-xs">a place were admin can add employee.</p>
                    </div>
                    <div className="space-y-5">
                        <AddEmployeForm/>
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