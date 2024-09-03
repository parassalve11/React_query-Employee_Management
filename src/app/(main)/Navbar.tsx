import SearchField from "@/components/SearchFiled";
import UserButton from "@/components/UserButton";



export default function Navbar(){
    return(
        <nav className="sticky top-0 z-10 bg-card shadow-md">
            <div className="flex max-w-7xl flex-wrap items-center justify-center px-5 py-3 gap-x-5">
                <h1 className="text-primary font-bold text-3xl">MetroSphare</h1>
                <SearchField />
                <UserButton className='sm:ms-auto' />
            </div>
        </nav>
    )
}