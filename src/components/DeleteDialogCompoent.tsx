
import { DeleteEmployee } from "@/lib/DeleteActions";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { useState } from "react";
import { Loader2 } from "lucide-react";

interface DeleteDialogProps{
    id:string
}

export default  function DeleteDialog({id}:DeleteDialogProps){

    const[loading,setLoading] = useState(false);
    return(
        <div>
        <Dialog>
  <DialogTrigger className="text-destructive font-semibold">
    Delete
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone.
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
          <Button className="flex gap-2" onClick={() => {
            setLoading(false)
            DeleteEmployee(id)
            setLoading(true)
          }}
          variant={'destructive'}
          >{loading && <Loader2 className="size-5 animate-spin" />} Delete</Button>
    </DialogFooter>
  </DialogContent>
  
</Dialog>
        </div>
    )
}