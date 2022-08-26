import Avatar from '../UI/Avatar'



type QuestionQACommentProps = {
    comment: any
}

const QuestionQAComment = ({ 
    comment 
}: QuestionQACommentProps) => {
    return (
        <div className='flex items-center first:mt-0 mt-[15px]'>
            <Avatar
                src={comment?.author?.image}
                width={30}
                height={30}
            />
            <p style={{
                overflowWrap: 'anywhere'
            }} className="ml-[10px] text-[18px]">
                {comment?.text}
            </p>
        </div>
    )
}


export default QuestionQAComment