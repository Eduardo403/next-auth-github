import NextAuth from "next-auth/next";
import GitHubProvider from "next-auth/providers/github";
import { clientId, clientSecret } from "../../../config.js";

export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: clientId,
      clientSecret: clientSecret,
    }),
  ],
});
