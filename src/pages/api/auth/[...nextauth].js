import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import jwt from 'jsonwebtoken'

const authOptions = {
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            type: "credentials",
            credentials: {},
            async authorize(credentials, req) {
                const { username, password } = credentials

                if (username !== process.env.NEXT_PUBLIC_ADMIN_USERNAME || password !== process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
                    throw new Error("invalid data");
                } else {
                    const accessToken = jwt.sign({ username }, process.env.NEXT_AUTH_SECRET, { expiresIn: '5d' })

                    return {
                        username,
                        accessToken
                    }
                }
            },
        }),
    ],
    pages: {
        signIn: "/login"
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.accessToken = user.accessToken
                token.username = user.username
            }
            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.user.username = token.username
                session.user.accessToken = token.accessToken
            }

            return session;
        },
    },
};

export default NextAuth(authOptions);