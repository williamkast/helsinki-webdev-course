import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  console.log(props)
  return(
    <h1> {props.course} </h1>
  )
}

const Parts = (props) => {
  console.log(props)
  return(
    <p> {props.part.name} {props.part.exercises} </p>
  )
}

const Content = (props) => {
  console.log(props)
  return(
    <div>
      <Parts part={props.part1}/>
      <Parts part={props.part2} />
      <Parts part={props.part3} />
    </div>
  )
}

const Total = (props) => {
  return(
    <p> Number of exercises {props.exercises} </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name : 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name : 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name : 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3}/>
      <Total exercises = {part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
