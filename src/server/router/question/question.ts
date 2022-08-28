import { z } from 'zod'
//
import { createRouter } from "../context";



export const questionRouter = createRouter()
    .mutation('getAll', {
        input: z.object({
            limit: z.number()
        }),
        async resolve({ ctx, input }) {
            return await ctx.prisma.question.findMany({
                take: input.limit,
                include: {
                    author: true,
                    answers: true
                },
                orderBy: {
                    id: 'desc'
                }
            })
        }
    })
    .mutation('getOne', {
        input: z.object({
            id: z.number() || z.undefined()
        }),
        async resolve({ ctx, input }) {
            return await ctx.prisma.question.findUnique({
                where: {
                    id: input.id
                },
                include: {
                    answers: {
                        include: {
                            author: true
                        },
                        orderBy:{
                            id: 'desc'
                        }
                    },
                    comments: {
                        include: {
                            author: true
                        }
                    },
                    author: true
                }
            })
        }
    })