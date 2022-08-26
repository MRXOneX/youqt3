import { ReactNode } from "react"
import type { NextPage } from "next"
// components
import QuestionQ from "../../components/Question/QuestionQ"
import QuestionA from "../../components/Question/QuestionA"
import QuestionQToolbar from "../../components/Question/QuestionQToolbar"
// layouts
import PageContainer from "../../layouts/PageContainer"




const Question: NextPage = () => {

    const question = {}


    return (
        <PageContainer>
            <div className="flex justify-between h-full">
                <div className="h-full w-[100%] lg:w-[790px]">
                    <div className="max-w-[630px] mx-auto">
                        <QuestionQ question=''  />
                        <QuestionQToolbar questionId={1} />
                        <div className="mt-[30px]">
                            <span className="text-[19px] sm:text-[21px] text-[#494949] font-semibold font-nunito">
                                Ответ или решение:
                            </span>
                        </div>
                        <div className="w-full flex flex-col pt-[30px]">
                            {question?.answers?.map((answer: any): ReactNode => (
                                <QuestionA 
                                    answer={answer}  
                                    key={answer.id} 
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="h-full w-[490px] hidden lg:block">

                </div>
            </div>
        </PageContainer>
    )
}











export default Question