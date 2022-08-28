// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

// routers
import { questionRouter } from "./question/question";
import { protectedQuestion } from "./question/question-protected";

import { profileRouter } from "./profile/profile";




export const appRouter = createRouter()
  .transformer(superjson)
  .merge('question.', questionRouter)
  .merge('question_protected.', protectedQuestion)

  .merge('profile.', profileRouter)
  // .merge("example.", exampleRouter)
  // .merge("auth.", protectedExampleRouter);


  
// export type definition of API
export type AppRouter = typeof appRouter;
