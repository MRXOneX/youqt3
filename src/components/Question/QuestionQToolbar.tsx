
type QuestionQToolbarProps = {
    questionId: number
}


const QuestionQToolbar = ({
    questionId,
}: QuestionQToolbarProps) => {
    return (
        <div className="shadow-standart rounded-[10px] h-auto mt-[10px] flex flex-col py-[10px] px-[10px] bg-white">
            <div className="flex">
                <button>
                    <span className="">
                        Ответить
                    </span>
                </button>
                <button>
                    <span className="">
                        Уточнить
                    </span>
                </button>
            </div>
        </div>
    )
}


export default QuestionQToolbar