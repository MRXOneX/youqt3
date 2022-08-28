
import { z } from "zod";
import { Item } from "../../../types/utils/Item";
import { createProtectedRouter } from "../protected-router";

export const protectedQuestion = createProtectedRouter()
    .mutation('create', {
        input: z.object({
            text: z.string(),
            textHtml: z.string(),
            item: z.enum([
                'all',
                'mathematics',
                'literature',
                'algebra',
                'russian',
                'geometry',
                'english',
                'chemistry',
                'physics',
                'biology',
                'history',
                'social_studies',
                'surrounding_world',
                'geography',
                'informatics',
                'economy',
                'music',
                'right',
                'french',
                'obzh',
                'psychology',
                'astronomy',
                'physical_culture'
            ]),
            class: z.enum([
                'all', 
                'junior', 
                'middle', 
                'senior', 
                'college'
            ])
        }),
        async resolve({ ctx, input }: any) {
            return await ctx.prisma.question.create({
                data: {
                    text: input.text,
                    textHtml: input.textHtml,
                    item: input.item,
                    class: input.class
                }
            })
        }
    })