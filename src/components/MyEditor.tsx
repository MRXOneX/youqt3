import { memo, useState, useRef } from "react"
//
import { Editor, EditorState, convertToRaw } from 'draft-js';
//
import draftToHtml from 'draftjs-to-html';
// components/UI
import Button from "./UI/Button";
//
import { trpc } from "../utils/trpc";


type MyEditorProps = {
    questionId?: number | undefined
    placeholder?: string | undefined
}

const MyEditor = ({
    questionId = 1
}: MyEditorProps) => {
    const [editorState, setEditorState] = useState(() => EditorState.createEmpty())

    const ref = useRef(null)

    // const { mutateAsync: createAnswer } = trpc.useMutation(['question_protected.create_answer'])


    const onCreateAnswer = () => {
        try {
            const blocks = convertToRaw(editorState.getCurrentContent()).blocks;
            const value = blocks.map(block => (!block.text.trim() && '\n') || block.text).join('\n');

            // createAnswer({
            //     text: value,
            //     textHtml: draftToHtml(convertToRaw(editorState.getCurrentContent())),
            //     questionId
            // })

            setEditorState(EditorState.createEmpty())
        } catch (error) {

        }
    }


    return (
        <>
            <div
                onClick={() => {
                    ref?.current?.focus()
                }}
                className="m-h-[170px] m-h-[300px] overflow-y-auto rounded-[8px] cursor-text"
            >
                <Editor
                    editorState={editorState}
                    onChange={setEditorState}
                    ref={ref}
                    placeholder="Добавьте ответ"
                />
            </div>
        </>
    )
}

export default memo(MyEditor)