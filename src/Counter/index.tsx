import React, { useState } from 'react'

interface Props {
  value: number
}

const Counter = ({ value }: Props) => {
  const [counter, setCounter] = useState(value)

  const onClickMinus = () => {
    setCounter((prev) => prev - 1)
  }

  const onClikcPlus = () => {
    setCounter((prev) => prev + 1)
  }

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={onClickMinus}>-</button>
      <button onClick={onClikcPlus}>+</button>
    </div>
  )
}

export default Counter
