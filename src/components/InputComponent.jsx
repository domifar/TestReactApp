import React, { useState, useEffect } from 'react'

const InputComponent = (props) => {
  //Aktuelle Werte der Input Felder
  const [input1, setInput1] = useState('')
  const [input2, setInput2] = useState('')

  //Wird aufgerufen, wenn Input1 oder 2 sich ändern
  useEffect(() => {
    props.onInputChange(input1, input2)
  }, [input1, input2])

  //Wenn sich im 1. Input etwas ändert
  const handleInput1 = (event) => {
    setInput1(event.target.value)
  }

  //Wenn sich im 2. Input etwas ändert
  const handleInput2 = (event) => {
    setInput2(event.target.value)
  }

  return (
    <div>
      <input type="text" placeholder="Eingabe 1" onChange={handleInput1}/>
      <input type="text" placeholder="Eingabe 2" onChange={handleInput2}/>
    </div>
  )
}

export default InputComponent
