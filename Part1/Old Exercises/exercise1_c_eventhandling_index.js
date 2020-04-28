import React, { useState } from 'react' // Imports useState function
import ReactDOM from 'react-dom'


const App = (props) => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => {
    setCounter(counter + 1)
    console.log("Clicked: ", counter)
  }

  const setToZero = () => {
    setCounter(0)
    console.log('Reset to zero')
  }

// If we wanted to add a console.log here, we'd have to call a function
  return (
    <div>
      <div> {counter} </div>
      <button onClick = {increaseByOne}>
      plus
      </button>
      <button onClick = {setToZero}>
      zero
      </button>
    </div>
  )

}




ReactDOM.render(
  <App />,
  document.getElementById('root')
)
