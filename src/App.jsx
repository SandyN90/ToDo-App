import { useState } from 'react'
import ToDoApp from './components/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
      <ToDoApp/>
    </div>
  )
}

export default App
