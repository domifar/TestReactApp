import React from 'react'

const OutputComponent = (props) => {
  return (
    <div>
      <p>Eingabe 1: {props.input1}</p>
      <p>Eingabe 2: {props.input2}</p>
    </div>
  )
}

export default OutputComponent