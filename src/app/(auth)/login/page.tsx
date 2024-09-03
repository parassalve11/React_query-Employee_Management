import Image from "next/image";
import Link from "next/link";
import LoginImage from '@/assets/Login.jpg'
import LoginForm from "./LoginForm";

export default  function page(){
    return(
        <div className="h-screen flex items-center justify-center p-5">
            <div className="flex h-full max-h-[40rem] w-full max-w-[64rem] overflow-hidden rounded-2xl shadow-2xl">
                <div className="w-full space-y-10 p-10 md:w-1/2">
                    <div className="space-y-1 text-center">
                        <h1 className="text-3xl font-bold">Login with Lucia Auth</h1>
                        <p className="text-muted-foreground">A place
                             where <span className="text-primary font-semibold">you</span> can make friends.
                        </p>
                       
                    </div>
                    <div className="space-y-5">
                            <LoginForm />
                            <Link href={'signup'}>Don't have an 
                            Account? <span className="font-semibold text-primary">Signup.</span>
                            </Link>

                    </div>
                </div>
                <Image
                src={LoginImage}
                alt=""
                className="w-1/2 object-cover hidden md:block"
                />
            </div>

        </div>
    )
}