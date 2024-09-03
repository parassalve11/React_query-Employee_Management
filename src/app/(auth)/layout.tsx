import { validRequest } from "@/auth";
import { redirect } from "next/navigation";


export default async function Layout({children}:{children:React.ReactNode}){
    const{user} = await validRequest()

    if(user){
        return redirect('login')
    }

    return(
        <>{children}</>
    )
}