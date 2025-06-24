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
import { toast, Bounce } from 'react-toastify'


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
                        toast.success('Logged in Successfully', {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",
                            transition: Bounce,
                        });
                        router.push("/");
                    }
                    else if (callback?.error) {
                        console.log(callback.error, ' callback error')
                        toast.error('Invalid credentials', {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: false,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",
                            transition: Bounce,
                        });
                    }
                })
            } else {
                axios.post("/api/auth/register", data).then(() => {
                    console.log("user created successfully");
                    toast.success('User created Successfully', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                        transition: Bounce,
                    });
                    router.push("/")

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
                {origin === "signUp" && <Input {...register('name')} type="text" placeholder="your name" disabled={loading} />}
                <Input {...register('email')} type="email" placeholder="your Email" disabled={loading} />
                <Input {...register('password')} type="password" placeholder="your Password" disabled={loading} />
                <Button disabled={loading} onClick={handleSubmit(onSubmit)} className="w-full cursor-pointer">{loading ? <Icons.spinner className="animate-spin mr-2" /> : null}{origin === "signIn" ? "Sign In" : "Sign Up"}</Button>
                <Button disabled={loading} onClick={() => signIn("google", { callbackUrl: "/" })} className="w-full cursor-pointer"><Icons.google />Sign in With Google</Button>
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