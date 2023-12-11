'use client'

import { useState, useRef } from "react";

import { GitHub } from "@mui/icons-material";
import { Divider } from "@mui/material";

import { useSearchParams, useRouter } from "next/navigation";

import { signIn } from 'next-auth/react'
import Link from "next/link";

export default function Singin() {
    const userName = useRef("")
    const password = useRef("")

    const [error, setError] = useState(null)

    const searchParams = useSearchParams()
    const callbackUrl = searchParams.get('callbackUrl') || '/'

    const router = useRouter()

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            const result = await signIn("credentials", {
                username: userName.current,
                password: password.current,
                redirect: false,
                callbackUrl
            })
           console.log(result);

           if (!result?.error) {
            router.push(callbackUrl) 
           }else{
            setError('The username or password is incorrect')
           }

        }catch (error) {
            setError(error);
        }
    }

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={onSubmit} action="#">
                            {error && (
                                <p className=" text-center bg-red-300 py-4 mb-6 rounded">{error}</p>
                            )}
                            <div>
                                <label for="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                                <input type="text" name="username" id="username" onChange={(e) => (userName.current = e.target.value) } className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ali_balochi" required="" />
                            </div>
                            <div>
                                <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" onChange={(e) => (password.current = e.target.value) } name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label for="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                    </div>
                                </div>
                                <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                            </div>
                            <button type="submit" className="w-full text-white bg-cyan-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                            <Divider light={true}>or</Divider>
                            <div onClick={() => signIn("github",{callbackUrl: '/'})}>
                                <div className=" cursor-pointer border-solid border-2 border-gray-500 rounded-md hover:bg-gray-700 text-slate-400 hover:text-slate-300 py-2 flex items-center justify-center">
                                    <GitHub sx={{ marginX: '.5rem' }} /> Login width GitHub
                                </div>
                            </div>
                            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don’t have an account yet? <Link href="/rigestring" className="font-medium text-cyan-600 hover:underline dark:text-primary-500">Sign up</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
} 