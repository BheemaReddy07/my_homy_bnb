import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "./prisma";
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials";
import { getServerSession } from "next-auth";
import { compare } from "bcrypt";

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: 'email', type: 'text' },
                password: { label: 'password', type: 'password' },
            },
            async authorize(credentials) {
                if (!credentials.email || !credentials.password) {
                    throw new Error("Invalid Credentials")
                }
                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                })
                if (!user) {
                throw new Error("User not found");
                }

                if (!user.hashedPassword) {

                    throw new Error("Invalid credentials");
                }
                const isCorrectPassword = await compare(
                    credentials.password,
                    user.hashedPassword
                )

                if (!isCorrectPassword) {

                    throw new Error("Invalid Credentials")
                }

                return user;
            }
        })
    ],
    pages: {
        signIn: "/"
    },
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async session({ session, token }) {
            if (token) {
                session.user.id = token.id
            }
            return session;
        },
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id,
                    token.email = user.email,
                    token.name = user.name,
                    token.image = user.image
            }
            return token
        }
    }
}


export const getAuthSession = () => getServerSession(authOptions)