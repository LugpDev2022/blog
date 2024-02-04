import NextAuth from 'next-auth';
import CredentialsProviders from 'next-auth/providers/credentials';

const handler = NextAuth({
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProviders({
      type: 'credentials',
      credentials: {},
      authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        if (email !== 'lugpdev2022@gmail.com' || password !== 'LYmj2021') {
          return null;
        }

        return { id: '123', name: 'Luis', email: 'lugpdev2022@gmail.com' };
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
});

export { handler as GET, handler as POST };
