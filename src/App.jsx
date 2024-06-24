import React, { useState } from 'react'
import './App.css'
import InputComponent from './components/InputComponent'
import OutputComponent from './components/OutputComponent'
import TestComponent from './components/TestComponent'
import flower from './assets/flower.jpg'
import flower2 from './assets/flower2.jpg'

function App() {
  //Ein-Ausgabe
  const [Inputs, setInputs] = useState(['',''])
  const handleInputChange = (input1, input2) => {
    setInputs([input1, input2])
  }

  //Map
  const array = ["hallo", "servus"]

  //Bild
  const [FlowerStatus, setFlowerStatus] = useState(flower)
  const changeStatus = () => {
    if(FlowerStatus == flower) {
      setFlowerStatus(flower2)
    }else {
      setFlowerStatus(flower)
    }
  }

  return (
    <div id='container1'>
      {/*Eingabe/Ausgabe*/}
      <InputComponent onInputChange={handleInputChange} />
      <OutputComponent input1={Inputs[0]} input2={Inputs[1]} />
      {/*Component*/}
      <TestComponent text={"Bomba"}/>
      {/*Map*/}
      <div>{array.map(asdf => <li>{asdf}</li>)}</div>
      {/*Bild einfügen*/}
      <img src={FlowerStatus} alt="Blumenbild" />
      <button onClick={changeStatus}>Wechsle Bild</button>
    </div>
  )
}

export default App