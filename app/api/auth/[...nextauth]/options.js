import CredentialsProvider from "next-auth/providers/credentials"

export const optenst = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: {
                    label: 'Username',
                    type: 'text',
                    placeholder: 'for example ali'
                },
                password: {label: 'Password',type: 'password',placeholder: 'Enter password'}
            },
            async authorize(credentials,req) {
                const user = {
                    id: 'lfjifal',
                    username: 'ali',
                    password: 'aliasgharAB1019'
                }

                if (credentials?.username == user.username && credentials?.password == user.password) {
                    return user
                } else {
                    return null
                }

            }
        })
    ],
    pages: {
        signIn: '/auth/login'
    }
}
    