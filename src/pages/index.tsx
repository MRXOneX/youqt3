import { ReactNode, useEffect } from "react";
import type { NextPage } from "next";
// layouts
import PageContainer from "../layouts/PageContainer";
// components 
import FilterByQuestions from "../components/FilterByQuestions";
import SearchByQuestions from "../components/SearchByQuestions";
import QuestionItem from "../components/QuestionItem";
//
import { trpc } from "../utils/trpc";
// type TechnologyCardProps = {
//   name: string;
//   description: string;
//   documentation: string;
// };

const Home: NextPage = () => {
  
  const questionsMutate = trpc.useMutation(['question.getAll'])


  useEffect(() => {
    try {
      questionsMutate.mutate({
        limit: 10
      })
    } catch (error) {
      
    }
  }, [])

  console.log(questionsMutate)


  return (
    <PageContainer>
      <div className="flex justify-between h-full">
        <div className="h-full w-[100%] lg:w-[790px]">
          <SearchByQuestions />
          <div className="h-full max-w-[630px] mx-auto p-0 sm:pt-[50px]">
            {questionsMutate?.status === 'success' && 
              questionsMutate?.data?.map((question: any): ReactNode => (
                <QuestionItem 
                  key={question.id} 
                  question={question} 
                />
              ))
            }
          </div>
        </div>
        <div className="h-full w-[490px] hidden lg:block">
          <FilterByQuestions />
        </div>
      </div>
    </PageContainer>
  );
};




// const TechnologyCard = ({
//   name,
//   description,
//   documentation,
// }: TechnologyCardProps) => {
//   return (
//     <section className="flex flex-col justify-center p-6 duration-500 border-2 border-gray-500 rounded shadow-xl motion-safe:hover:scale-105">
//       <h2 className="text-lg text-gray-700">{name}</h2>
//       <p className="text-sm text-gray-600">{description}</p>
//       <a
//         className="mt-3 text-sm underline text-violet-500 decoration-dotted underline-offset-2"
//         href={documentation}
//         target="_blank"
//         rel="noreferrer"
//       >
//         Documentation
//       </a>
//     </section>
//   );
// };

export default Home;
