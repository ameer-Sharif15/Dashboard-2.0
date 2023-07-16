import { Users } from "@/modules/user"
import { Accounts, ID } from "@/store/store"
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"



const handler = NextAuth({

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET_ID,
    }),
    // ...add more providers here
  ],

  callbacks: {
    async session({session}) {
   
      return session;
  },
  async signIn({profile}) {
    try {
        const userExists = await Users.get(profile.id)

        if (!userExists) {
            await Users.create(profile.id)
            await Accounts.create(
              ID.unique(),
              profile?.email,
              profile?.name,
              
            )
        }
    } catch (error) {
        console.log(error);
    }
}

  }
})


export {handler as GEt, handler as POST}
