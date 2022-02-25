import React from "react"
import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: ""
  })

  const save = () => {
    const json = editor.getHTML()
    console.log(json)
  }

  return (
    <div className='flex flex-col flex-grow p-2 gap-2 w-full'>
      <EditorContent
        editor={editor}
        className='flex flex-col flex-grow bg-white rounded-md p-2'
      />
      <div className='flex justify-end'>
        <button
          onClick={save}
          className='bg-blue-800 text-white w-full max-w-xs py-1 rounded-sm'
        >
          Enviar
        </button>
      </div>
    </div>
  )
}

export default Tiptap
