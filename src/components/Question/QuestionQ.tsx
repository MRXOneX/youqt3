import { memo, useMemo } from "react"
// components
import QuestionQAComment from "./QuestionQAComment"
// components/UI
import Avatar from '../UI/Avatar'
import { useRouter } from "next/router"


type QuestionQProps = {
    question: any
}


const QuestionQ = ({
    question
}: QuestionQProps) => {

    const router = useRouter()


    const comments = useMemo(() => {
        if (question?.comments?.length > 0) {
            return (
                <div className="flex flex-col mt-[15px] pt-[15px] border-t-[1px] border-[hsl(0, 0%, 90%)]">
                    {question.comments.map((comment: any) => (
                        <QuestionQAComment 
                            key={comment.id} 
                            comment={comment} 
                        />
                    ))}
                </div>
            )
        }
    }, [question?.comments])

    return (
        <div className="shadow-standart rounded-[10px] h-auto p-[20px] bg-white">
            <div className="flex items-center justify-between">
                <div className="flex">
                    <Avatar
                        onClick={() => router.push(`/profile/${question.authorId}`)}
                        src={question?.author?.image}
                        height={35}
                        width={35}
                        className="cursor-pointer"
                    />
                    <div className="ml-[10px] font-montserrat flex flex-col justify-center leading-[16px] text-[15px] sm:text-[16px]">
                        <span className="text-[#232323] font-semibold">
                            Misha Poleshchenkov
                        </span>
                        <div className="flex">
                            <span className="text-[#494949] font-medium">
                                день назад
                            </span>
                        </div>
                    </div>
                </div>
                {/* <span className="text-[16px] font-semibold text-[#636777] py-[4px] px-[8px] leading-none  rounded-[8px] bg-[#ebebeb]">
                    0
                </span> */}
            </div>
            <div className="pt-[13px] pr-[5px] pl-[5px] text-[16px] sm:text-[18px] font-sans font-medium">
                sasadsadsad asd asd asd sad a dsad
            </div>
            {comments}
        </div>
    )
}

export default memo(QuestionQ)