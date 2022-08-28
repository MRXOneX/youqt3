import { ReactNode, useEffect } from "react"
import type { NextPage } from "next"
//
import { useRouter } from "next/router"
// components
import QuestionQ from "../../components/Question/QuestionQ"
import QuestionA from "../../components/Question/QuestionA"
import QuestionQToolbar from "../../components/Question/QuestionQToolbar"
// layouts
import PageContainer from "../../layouts/PageContainer"
// utils
import { trpc } from "../../utils/trpc"
import QuestionsNew from "../../components/Question/QuestionsNew"




const Question: NextPage = () => {

    const router = useRouter()


    const questionMutate = trpc.useMutation(['question.getOne'])


    const id: number | undefined = Number(router?.query?.id)
    const input = {
        id: id
    }

    useEffect(() => {
        if (id) {
            try {
                questionMutate.mutate(input)
            } catch (error) {
    
            }
        }
    }, [id])


    return (
        <PageContainer>
            <div className="flex justify-between h-full">
                <div className="h-full w-[100%] lg:w-[790px]">
                    <div className="max-w-[630px] mx-auto">
                        <QuestionQ question={questionMutate?.data} />
                        <QuestionQToolbar questionId={questionMutate?.data?.id} />
                        <div className="mt-[30px]">
                            <span className="text-[19px] sm:text-[21px] text-[#494949] font-semibold font-nunito">
                                Ответ или решение:
                            </span>
                        </div>
                        <div className="w-full flex flex-col pt-[30px]">
                            {questionMutate?.data?.answers?.map((answer: any): ReactNode => (
                                <QuestionA
                                    answer={answer}
                                    key={answer.id}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="h-full w-[490px] hidden lg:block">
                    <div className="max-w-[330px] mx-auto">
                        <QuestionsNew />
                    </div>
                </div>
            </div>
        </PageContainer>
    )
}











export default Question