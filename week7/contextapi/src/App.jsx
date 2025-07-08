import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import newContext from './context'
import { useContext } from 'react'

function App() {
  const [count, setCount] = useState(0);


  return (
    <>
      <newContext.Provider value={count}>
        <Count />
      </newContext.Provider>
    </>
  )
}

function Count () {
  const count = useContext(newContext);

  return (
    <div>
      {count}
    </div>
  )
}

export default App
