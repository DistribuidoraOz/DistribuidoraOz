import NextAuth from "next-auth";
import GitHubProviders from 'next-auth/providers/github';

const handler = NextAuth({
  providers: [
    GitHubProviders({
        clientId: process.env.CLIENT_ID as string ,
        clientSecret: process.env.CLIENT_SECRET as string,
    })
  ],
  pages: {
    error: '/auth/error',
    signOut: '/',
  },
  callbacks: {
    async signIn({user}){
      const email_auth = ['distribuidoraoz001@gmail.com', 'ssebass_ross@hotmail.com'];
      return email_auth.includes(user.email!);
    }
  }
})

export { handler as GET, handler as POST }