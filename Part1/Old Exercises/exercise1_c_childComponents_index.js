import React, { useState } from 'react' // Imports useState function
import ReactDOM from 'react-dom'


const App = (props) => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => {
    setCounter(counter + 1)
    console.log("Clicked: ", counter)
  }
  const decreaseByOne = () => {
    setCounter(counter - 1)
    console.log("Unclicked: ", counter)
  }

  const setToZero = () => {
    setCounter(0)
    console.log('Reset to zero')
  }

// If we wanted to add a console.log here, we'd have to call a function
  return (
    <div>
      <Display counter = {counter} />
      <Button handleClick = {increaseByOne} text = 'plus' />
      <Button handleClick = {decreaseByOne} text = 'minus' />
      <Button handleClick = {setToZero} text = 'zero' />
    </div>
  )

}

const Display = (props) => {
  return(
    <div>{props.counter}</div>
  )
}

const Button = (props) => {
  return(
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
