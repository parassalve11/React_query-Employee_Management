'use server'

import db from "@/lib/db";
import { LoginSchema, Loginvalues } from "@/lib/validation";
import { isRedirectError } from "next/dist/client/components/redirect";
import bcrypt from 'bcrypt'
import { lucia } from "@/auth";
import { cookies } from "next/headers";
import {redirect} from 'next/navigation'

export async function Login(
    credentials: Loginvalues
):Promise<{error:string}>{
    try {
        const{username,password} = LoginSchema.parse(credentials);

        const exisitingUser = await db.user.findFirst({
            where:{
                username:{
                    equals:username,
                    mode:'insensitive'
                }
            }
        });
        if(!exisitingUser || !exisitingUser.passwordHash){
            return{
                error:'Unauthrized credentials'
            }
        }

        const validPassword = await bcrypt.compare(password ,exisitingUser.passwordHash);

        if(!validPassword){
            return{
                error:'Password is Incorrect!'
            }
        }

        const session = await lucia.createSession(exisitingUser.id , {});
        const sessionCookie = lucia.createSessionCookie(session.id);
        cookies().set(
            sessionCookie.name,
            sessionCookie.value,
            sessionCookie.attributes
        );

        return redirect('/')

    } catch (error) {
        if(isRedirectError(error)) throw error;
        console.log(error);
        return{
            error:'Something went Wrong ,try again.'
        }
        
    }
}