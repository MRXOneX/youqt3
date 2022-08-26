// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

//
import { questionRouter } from "./question/question";




export const appRouter = createRouter()
  .transformer(superjson)
  .merge('question.', questionRouter)
  // .merge("example.", exampleRouter)
  // .merge("auth.", protectedExampleRouter);


  
// export type definition of API
export type AppRouter = typeof appRouter;
