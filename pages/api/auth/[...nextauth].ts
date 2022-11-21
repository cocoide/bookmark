
import { NextApiHandler } from 'next';
import NextAuth from 'next-auth';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from '../../../libs/prisma';
import GoogleProvider from "next-auth/providers/google";

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);
export default authHandler;

const options = {
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID?? '',
        clientSecret: process.env.GOOGLE_CLIENT_SECRET?? '',
      }),
  ],
  adapter: PrismaAdapter(prisma),
  secret: process.env.SECRET,
  pages: {
    signIn: '/auth/login',
  },
};