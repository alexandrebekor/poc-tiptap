import Tiptap from '../components/Tiptap'

const App = () => {
  const save = () => {
    const json = editor.getJSON()
    res.send(json)
  }

  return (
    <div>
      <h1>Editor</h1>
      <div className='App'>
        <Tiptap />
      </div>
      <button onClick={ save }>Enviar</button>
    </div>
  )
}

export default App