'use client'
import { useSession } from "@/app/(main)/SessionProvider";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "./ui/dropdown-menu";
import UserAvatar from "./UserAvatar";
import Link from "next/link";
import { Check, LogOutIcon, Monitor, MoonIcon, Sun, User2Icon } from "lucide-react";
import LogOut from "@/app/(auth)/actions";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";


interface UserButtonProps{
    className?:string;
};

export default function UserButton({className}:UserButtonProps){
    const{user}=useSession();

    const{setTheme , theme} = useTheme();

    return(
        <DropdownMenu >
            <DropdownMenuTrigger asChild>
                <button className={cn('rounded-full flex-none',className)}>
                    <UserAvatar avatarUrl={user.avatarUrl} size={40}  />
                </button>
            </DropdownMenuTrigger>
         <DropdownMenuContent>
         <DropdownMenuLabel>
                Log in as {<span className="text-slate-900 font-semibold hover:underline">@{user.username}</span>}
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <Link href={`user/${user.username}`}>
                <DropdownMenuItem>
                    <User2Icon className="mr-2 size-4" />
                    Profile
                </DropdownMenuItem>
            </Link>
            <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                    <Monitor className="mr-2 size-4" />
                    Theme
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                    <DropdownMenuItem onClick={() => setTheme('system')}>
                        <Monitor className='mr-2 size-4' />
                        System
                        {theme === 'system' && <Check className="size-4" />}
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme('dark')}>
                        <MoonIcon className='mr-2 size-4' />
                        Dark
                        {theme === 'dark' && <Check className="size-4" />}
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme('light')}>
                        <Sun className='mr-2 size-4' />
                        Light
                        {theme === 'light' && <Check className="size-4" />}
                    </DropdownMenuItem>
                </DropdownMenuSubContent>
            </DropdownMenuSub>
            <DropdownMenuSeparator />
            <DropdownMenuItem
            onClick={() =>{
                LogOut();
            }}
            className="text-destructive group "
            >
                <LogOutIcon className="mr-2 size-4 group-hover:text-destructive" />
               <p className="group-hover:text-destructive">Logout</p>
            </DropdownMenuItem>
         </DropdownMenuContent>
        </DropdownMenu>
    )
}