"use client"

import { useState } from "react"
import { Icons } from "./icons"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { useForm } from 'react-hook-form'
import { useRouter } from "next/navigation"
import { signIn } from "next-auth/react"
import axios from "axios"
import Link from "next/link"


function LoginForm({ origin = "signIn" }) {
    const [loading, setLoading] = useState(false);
    const { register, handleSubmit } = useForm({
        defaultValues: {
            email: "",
            password: ""
        }
    })
    const router = useRouter()
    const onSubmit = (data) => {
        try {
            setLoading(true);
            if (origin === "signIn") {
                signIn("credentials",
                    { ...data, redirect: false }
                ).then((callback) => {
                    if (callback?.ok) {
                        console.log("Logged in Successfully")
                        router.refresh();
                    }
                    else if (callback?.error) {
                        console.log(callback.error, ' callback error')
                        throw new Error("something went wrong");
                    }
                })
            } else {
                axios.post("/api/auth/register", data).then(() => {
                    console.log("user created successfully")
                })
            }
        } catch (error) {
            console.log(error.message)
        }
        finally {
            setLoading(false)
        }
    }


    return (
        <div className="flex h-screen items-center justify-center" >
            <div className="space-y-2 flex flex-col items-center   w-full sm:w-1/2 md:w-1/3  ">
                {origin === "signUp" && <Input {...register('name')} type="text" placeholder="your name" />}
                <Input {...register('email')} type="email" placeholder="your Email" />
                <Input {...register('password')} type="password" placeholder="your Password" />
                <Button onClick={handleSubmit(onSubmit)} className="w-full cursor-pointer">{origin === "signIn" ? "Sign In" : "Sign Up"}</Button>
                <Button onClick={()=>signIn("google")} className="w-full cursor-pointer"><Icons.google />Sign in With Google</Button>
                 {origin == "signUp" ? 
                <span className='mx-auto'>Already have an account? <Link className='font-semibold underline' href="/sign-in">sign in</Link></span>
            : 
                <span className='mx-auto'>New to airbnb? <Link className='font-semibold underline' href="/sign-up">sign up</Link> </span>
            }
            </div>
        </div>
    )
}


export default LoginForm