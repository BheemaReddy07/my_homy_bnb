"use client";
import { LogOutIcon} from "lucide-react";
import { signOut } from "next-auth/react";
export default function SignOut(){
    return (
        <div onClick={() => signOut({callbackUrl: "/sign-in"})} className="flex items-center gap-2 cursor-pointer">
            <LogOutIcon className="w-4 " />
            <span>Sign Out</span>
        </div>
    )
}