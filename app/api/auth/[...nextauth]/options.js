import CredentialsProvider from "next-auth/providers/credentials"
import GithubProvider from 'next-auth/providers/github'

export const optenst = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SICRET
        }),
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                name: {
                    label: 'Username',
                    type: 'text',
                    placeholder: 'for example ali'
                },
                password: { label: 'Password', type: 'password', placeholder: 'Enter password' }
            },
            async authorize(credentials, req) {
                const res = await fetch("http://localhost:9000/users", {
                    method: 'POST',
                    body: JSON.stringify(credentials),
                    headers: { "Content-Type": "application/json" }
                })
                const data = await res.json()
                if (res.ok && data) {
                    return data
                }
                return null


            }
        })
    ],
    pages: {
        signIn: '/auth/login'
    }
}
