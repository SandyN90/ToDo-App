import { useState } from 'react'
import ToDoApp from './components/Todo'
import HelloWorld from './components/HelloWorld'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
      <ToDoApp/>
      <HelloWorld/>
    </div>
  )
}

export default App
