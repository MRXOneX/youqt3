import { memo } from "react"
//
import { useRouter } from "next/router"
// components/UI
import Avatar from "./UI/Avatar"
import Button from "./UI/Button"



type QuestionItemProps = {
    question: any
}

const QuestionItem = ({ question }: QuestionItemProps) => {

    const router = useRouter()

    return (
        <div className="w-full rounded-[10px] shadow-standart p-[20px] mt-[25px] first:mt-0 bg-white">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <Avatar 
                        width={35}
                        height={35}
                        src={question?.author?.image}
                        className="rounded-[50%] cursor-pointer"
                    />
                    <div className="flex flex-col justify-center leading-[18px] text-[15px] sm:text-[16px] pl-[7px] font-montserrat">
                        <span className="text-[#232323] font-semibold">

                            Математика
                        </span>
                        <div className="text-[#494949] font-medium">
                            <span>
                                5 минут назад
                            </span>
                        </div>
                    </div>
                </div>
                <div>
                    0
                </div>
            </div>
            <div className="py-[13px]">
                <p style={{
                    overflowWrap: 'anywhere',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    display: '-webkit-box',
                    fontFamily: 'sans-serif',
                    fontWeight: 500,
                    cursor: 'pointer',
                    // fontSize: 18
                }} className="text-[16px] sm:text-[18px] leading-[22px] hover:underline">
                    {question?.text}На шахматной доске 25×36 королю разрешено ходить вправо, вверх, вправо-вверх по диагонали или вправо-вниз по диагонали.
Чтобы доказать, что он может сделать лишь конечное число ходов, можно рассмотреть полуинвариант. Пронумеруем столбцы слева направо, а строки — снизу вверх. Что из нижеперечисленного является полуинвариантом процесса? 1) номер столбца, где находится король; 2) номер строки, где находится король; 3) сумма номеров столбца и строки, где находится король; 4) сумма удвоенного номера строки и номера столбца, где находится король; 5) сумма номера строки и удвоенного номера столбца, где находится король. Какое наибольшее число ходов король может сделать, если начинает из нижнего левого угла?
                </p>
            </div>
            <div className="flex items-end justify-between">
                <div>
                    <span className="text-[16px] sm:text-[17px] font-nunito font-semibold">
                        Answer
                    </span>
                </div>
                <div>
                    <Button className="rounded-[10px] text-[#4971FF] border border-[#4971FF] bg-none outline-none cursor-pointer py-[3px] px-[6px] text-[16px] sm:py-[3px] sm:px-[10px] sm:text-[17px] font-nunito font-bold hover:text-white hover:bg-[#4971FF]">
                        Ответить
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default memo(QuestionItem)