import React, { useState } from 'react'
import './App.css'
import InputComponent from './components/InputComponent'
import OutputComponent from './components/OutputComponent'

function App() {
  const [Inputs, setInputs] = useState(['',''])

  // const handleInputChange = (name, value) => {
  //   setInputs((prevInputs) => ({
  //     ...prevInputs,
  //     [name]: value,
  //   }))
  // }

  const handleInputChange = (input1, input2) => {
    setInputs([input1, input2])
  }

  return (
    <>
      <h1>React Eingabe/Ausgabe Beispiel</h1>
      <InputComponent onInputChange={handleInputChange} />
      <OutputComponent input1={Inputs[0]} input2={Inputs[1]} />
    </>
  )
}

export default App