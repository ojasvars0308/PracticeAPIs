import { useState } from 'react'

const Counter = () => {

    const[count, setCount] = useState(0)

  return (
    <button 
        className="border border-red-600"
        onClick={() => setCount(count + 1)}
    >
        Counter is {count}
    </button>
  )
}

export default Counter