import NextAuth from "next-auth"
import { optenst } from "./options"

const handler = NextAuth(optenst)

export { handler as GET, handler as POST }