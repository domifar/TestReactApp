import React, { useState, useEffect } from 'react'

function InputComponent({ onInputChange }) {
  const [input1, setInput1] = useState('')
  const [input2, setInput2] = useState('')

  useEffect(() => {
    onInputChange(input1, input2)
  }, [input1, input2])

  const handleInput1 = (e) => {
    setInput1(e.target.value)
  };

  const handleInput2 = (e) => {
    setInput2(e.target.value)
  };

  return (
    <div>
      <input type="text" placeholder="Eingabe 1" onChange={handleInput1}/>
      <input type="text" placeholder="Eingabe 2" onChange={handleInput2}/>
    </div>
  );
}

export default InputComponent
