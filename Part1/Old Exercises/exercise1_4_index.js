import React from 'react'
import ReactDOM from 'react-dom'


const App = () => {
  const course = "Half Stack application development"
  const parts= [
      {
        name: "Fundamentals of React",
        exercises: 10
      },
      {
        name: "Using props to pass data",
        exercises: 7
      },
      {
        name: "State of a component",
        exercises: 14
      }
    ]

  return (
    <div>
      <Header course = {course}/>
      <Content parts = {parts}/>
      <Total parts = {parts}/>
    </div>
  )
}


const Header = (props) => {
  // Getting the name of the course and setting it in h1
  console.log(props)
  return (
      <h1> {props.course} </h1>
  );
}

const Total = (props) => {
  // Using a for loop and storing the total into a variable instead of manually adding
  console.log(props)
  console.log("This is the total Loop")

  var totalSum = 0

  props.parts.forEach( part => {
    totalSum += part.exercises
  }
)

  return (
    <p> Total Number of Exercises {totalSum} </p>
  )
  //print to the console for debugging

}


const Content = (props) => {
  console.log(props)
    return (
      <div>
        <p> {props.parts[0].name} {props.parts[0].exercises} </p>
        <p> {props.parts[1].name} {props.parts[1].exercises} </p>
        <p> {props.parts[2].name} {props.parts[2].exercises} </p>
      </div>
    )

}




ReactDOM.render(<App />, document.getElementById('root'))
