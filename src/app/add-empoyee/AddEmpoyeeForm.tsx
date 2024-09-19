
import { Input } from "@/components/ui/input";
import { addEmploye } from "./actions";
import LoadingButton2 from "@/components/LoadingButon2";



export default function AddEmployeForm(){
    
    return(
        <form action={addEmploye} className="space-y-5">
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

            <LoadingButton2 type="submit" className="w-full font-semibold">Submit</LoadingButton2>
        </form>
    )
}