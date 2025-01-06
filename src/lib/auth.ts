import NextAuth from "next-auth";
import {PrismaAdapter} from "@auth/prisma-adapter";
import {prisma} from "@/src/lib/prisma";
import GitHub from "next-auth/providers/github"

export const {auth, handlers} = NextAuth({
    adapter : PrismaAdapter(prisma),
    providers : [GitHub]
})