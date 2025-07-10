
import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthOptions } from "next-auth";
import NextAuth, { DefaultSession, DefaultUser } from "next-auth";
import { DefaultJWT } from "next-auth/jwt";


type UserWithTokens = {
  id: string;
  email?: string;
  accessToken: string;
  refreshToken: string;
  expiresAt: number;
};

declare module "next-auth" {
  interface Session {
    accessToken?: string;
    refreshToken?: string;
    user: {
      id: string;
      email?: string | null;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    id: string;
    accessToken?: string;
    refreshToken?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    id?: string;
    accessToken?: string;
    refreshToken?: string;
  }
}

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials, req): Promise<UserWithTokens | null> {
        const res = await fetch(`${process.env.API_URL}/auth/signin`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
        });
        const data = await res.json();

        if (!res.ok || !data.accessToken) return null;
        return {
          id: data.user.id,
          email: data.user.email ?? credentials?.email,
          accessToken: data.accessToken,
          refreshToken: data.refreshToken,
          expiresAt: Math.floor(Date.now() / 1000) + data.expiresIn,
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 15 * 60,
  },
  callbacks: {
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        token.id = user.id;
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
      }
      if (typeof token.expiresAt === "number" && Date.now() / 1000 > token.expiresAt) {
        try {
          const res = await fetch(`${process.env.API_URL}/auth/refresh`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ refreshToken: token.refreshToken }),
          });
          const refreshed = await res.json();

          token.accessToken = refreshed.accessToken;
          token.expiresAt = Math.floor(Date.now() / 1000) + refreshed.expiresIn;
          token.refreshToken = refreshed.refreshToken ?? token.refreshToken;
        } catch (error) {
          console.error('Token refresh failed:', error);
          return { ...token, error: 'RefreshAccessTokenError' };
        }
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      session.refreshToken = token.refreshToken;

      //corrigir
      session.user.id = token.id ? token.id : '';
      return session;
    },
  },

  pages: {
    signIn: "/signin",
    newUser: "/signup",
    signOut: "/",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

  function GoogleProvider(arg0: { clientId: string | undefined; clientSecret: string | undefined; }): import("next-auth/providers/index").Provider {
    throw new Error("Function not implemented.");
  }

