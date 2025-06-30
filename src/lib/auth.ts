// import CredentialsProvider from "next-auth/providers/credentials";
// import type { AuthOptions } from "next-auth";

// export const authOptions: AuthOptions = {
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "text" },
//         password: { label: "Senha", type: "password" },
//       },
//       async authorize(credentials) {
//         const res = await fetch("http://localhost:3000/auth/signin", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(credentials),
//         });

//         const user = await res.json();

//         if (!res.ok || !user) {
//           throw new Error(user.message || "Credenciais inválidas");
//         }

//         // user deve ter ao menos: id, name e email
//         return user;
//       },
//     }),
//   ],
//   pages: {
//     signIn: "/signin",
//     error: "/error",
//   },
//   session: {
//     strategy: "jwt", // usando JWT em vez de banco
//   },
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         token.id = user.id;
//         token.name = user.name;
//         token.email = user.email;
//       }
//       return token;
//     },
//     async session({ session, token }) {
//     //   if (token) {
//     //     session.user.id = token.id as string;
//     //     session.user.name = token.name;
//     //     session.user.email = token.email;
//     //   }
//       return session;
//     },
//   },
// };
