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
    <p> {props.parts.name} {props.parts.exercises} </p>
  )
}

const Content = (props) => {
  console.log(props)
  return(
    <div>
      <Parts parts={props.parts[0]}/>
      <Parts parts={props.parts[1]} />
      <Parts parts={props.parts[2]} />
    </div>
  )
}

const Total = (props) => {
  return(
    <p> Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises} </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
  {
    name : 'Fundamentals of React',
    exercises: 10
  },
  {
    name : 'Using props to pass data',
    exercises: 7
  },
  {
    name : 'State of a component',
    exercises: 14
  }
]

  return (
    <div>
      <Header course = {course} />
      <Content parts = {parts}/>
      <Total parts = {parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
