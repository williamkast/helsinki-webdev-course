import React, { useState } from 'react' // Imports useState function
import ReactDOM from 'react-dom'


const App = (props) => {
  const [ counter, setCounter ] = useState(0) // defines the component by calling two functions.
  // ... counter and setCounter. Function returns an array with two items
  // Counter variable is assigned the initial value of "state" (where?), which is zero
  // setCounter exists to modify the State

  setTimeout(
    () => setCounter(counter + 1), // this is the first parameter of the setTimeout function
    1000 // This is the second. 1000 milliseconds
  ) // setCounter (and counter, I suppose) is a state modifying function. Whenever the state is modified, the page refreshes

  console.log('rendering...', counter)
  return (
    <div>{counter}</div>
  )
}




ReactDOM.render(
  <App />,
  document.getElementById('root')
)
