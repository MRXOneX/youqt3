import { z } from 'zod'
//
import { createRouter } from "../context";



export const questionRouter = createRouter()
    .mutation('getAll', {
        // input: z.object({
        //     limit: z.number()
        // }),
        async resolve({ ctx, input }) {
            return await ctx.prisma.question.findMany({
                // take: input.limit,
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