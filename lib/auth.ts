import axios from "axios";
import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import credentials from "next-auth/providers/credentials";
import { API_ENDPOINT } from "./env";
const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env;

export const authOptions: NextAuthOptions = {
  providers: [
    credentials({
      name: "Credentials",
      id: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const result = await axios.post(`${API_ENDPOINT!}/auth/login`, {
            email: credentials?.email,
            password: credentials?.password,
          });
          if (result.status !== 200) return null;
          return result.data;
        } catch (err) {
          console.error(err);
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID as string,
      clientSecret: GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  // session: { strategy: "jwt" },
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth/signin",
    error: "/auth/signin",
  },
};
