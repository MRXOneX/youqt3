import { z } from 'zod'
//
import { createRouter } from "../context";



export const profileRouter = createRouter()
    .mutation('getOne', {
        input: z.object({
            id: z.string() || z.undefined()
        }),
        async resolve({ ctx, input }) {
            return await ctx.prisma.user.findUnique({
                where: {
                    id: input.id,
                },
                include: {
                    answers: {
                        include: {
                            question: true
                        }
                    },
                    comments: true,
                    questions: true
                }
            })
        }
    })