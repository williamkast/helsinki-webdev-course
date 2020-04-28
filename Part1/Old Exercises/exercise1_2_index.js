import React from 'react'
import ReactDOM from 'react-dom'

const Header = () => {
  const course = 'Half Stack application development'
  return (
    <div>
      <h1> {course} </h1>
    </div>
  );
}

const Content = (props) => {
  const Part = () => {
    <p> {props.part} {props.exercises}</p>
  }
  return (
      <Part />
  )
}

const Total = () => {
  const sum = 10 + 7 + 14
  return (
    <div>
      <p> Number of exercises {sum} </p>
    </div>
  )
}


const App = () => {

  return (
    <div>
      <Header />
      <Content part="Fundamentals of React" exercises= {10} />
      <Content part="Using props to pass data" exercises = {7} />
      <Content part="State of a component" exercises = {14} />
      <Total />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
