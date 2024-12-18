import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";



const handler = NextAuth({

    session: {
        strategy: "jwt",
    },
    providers: [CredentialsProvider({
        credentials: {
            email: {
                label: " Email",
                type: "text",
                required: true,
                placeholder: "You email",
            },
            password: {
                label: " password",
                type: "password",
                required: true,
                placeholder: "You email",
            },

        },
        async authorize(credentials) {
            if (!credentials) {
                return null;
            }
                return true;
            },

    })],
});
export { handler as GET, handler as POST };