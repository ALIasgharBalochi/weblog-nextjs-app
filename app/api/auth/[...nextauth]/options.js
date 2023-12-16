import CredentialsProvider from "next-auth/providers/credentials"
import GithubProvider from 'next-auth/providers/github'

export const optenst = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SICRET,
            async profile(profile) {
                const userGitHub = {
                    id: profile.id.toString(),
                    name: profile.name || profile.login,
                    email: profile.email,
                    image: profile.avatar_url,
                    username: profile.login
                }

                const res = await fetch('http://localhost:9000/users', {
                    method: 'POST',
                    body: JSON.stringify(userGitHub),
                    headers: { "Content-Type": "application/json" }
                })

                const data = await res.json()
                if (res.ok && data) {
                    return data
                }
                return null


            }

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
    callbacks: {
        jwt({ token, account, user }) {
            if (account) {
                token.accessToken = account.access_token
                token.id = user?.id
            }
            return token
        },
        session({ session, token }) {
            session.user.id = token.id;

            return session;
        },
    },
    pages: {
        signIn: '/auth/login'
    }
}
