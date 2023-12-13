'use client'
import { SessionProvider } from "next-auth/react";



export default function SessionProviderComponnet({children}) {
    return <SessionProvider>  {children} </SessionProvider>

}
