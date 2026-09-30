import { useState } from "react"

const Switch = () => {
    const[isOn, setIsOn] = useState(false)

  return (
    <button
        className={`border border-black ml-2 font-bold px-8 py-3 rounded-xl text-white ${isOn ? "bg-green-600" : "bg-red-600"}`}
        onClick={() => setIsOn(!isOn)}
    >
        {isOn ? "ON" : "OFF"}
    </button>
  )
}

export default Switch