
import { Input } from "@/components/ui/input";
import LoadingButton2 from "@/components/LoadingButon2";
import { editEmploye } from "./actions";



export default function EditEmployeForm(){
    
    return(
        <form action={editEmploye} className="space-y-5">
            <Input 
            required
            name="name"
            placeholder="Full Name"
            className="w-full"
            type="text"
           
            />
            <Input 
            required
            name="email"
            type="email"
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

            <LoadingButton2 type="submit" className="w-full font-semibold">Submit</LoadingButton2>
        </form>
    )
}