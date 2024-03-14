import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import Credentials from "next-auth/providers/credentials"
import User from "@/app/models/User";
import connect from "@/app/utils/db";



export const authOptions = {
    



    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID || "", // type string
            clientSecret: process.env.GITHUB_SECRET || "",
        }),
        // ...add more providers here
    ],
}

export default NextAuth(authOptions)