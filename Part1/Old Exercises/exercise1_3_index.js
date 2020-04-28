import React from 'react'
import ReactDOM from 'react-dom'


const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
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
  }

  return (
    <div>
      <Header course = {course}/>
      <Content parts = {course.parts}/>
      <Total parts = {course.parts}/>
    </div>
  )
}


const Header = (props) => {
  // Getting the name of the course and setting it in h1
  console.log(props)
  return (
      <h1> {props.course.name} </h1>
  );
}

const Total = (props) => {
  // Using a for loop and storing the total into a variable instead of manually adding
  let totalSum = 0;

  props.parts.forEach( part => {
    totalSum += part.exercises
  })
  //print to the console for debugging
  console.log("total: " + totalSum)
  return (
    <p>Number of Exercises {totalSum}</p>
  )
}


const Content = (props) => {

    return (
      <div>
        <p> {props.parts[0].name} {props.parts[0].exercises} </p>
        <p> {props.parts[1].name} {props.parts[1].exercises} </p>
        <p> {props.parts[2].name} {props.parts[2].exercises} </p>
      </div>
    )

}




ReactDOM.render(<App />, document.getElementById('root'))
