import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 class="text-3xl font-bold text-blue-600 underline">
        Hello world today!
      </h1>

      <button class="btn">Button</button>
    </>
  )
}

export default App
