import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const Title = (props) => {
    return(
      <h1> {props.section} </h1>
    )
  }

  const Button = ({ onClick, name }) => {
    return(
      <button onClick = {onClick} > {name} </button>
    )
  }

  const handleGoodClick = () => {setGood( good+1 ) }
  const handleNeutralClick = () => {setNeutral( neutral+1 ) }
  const handleBadClick = () => {setBad( bad+1 ) }


  const History = ({name, count}) => {
    return(
      <div> {name}: {count} </div>
    )
  }

  return (
    <div>
      <Title section = "Give Feedback" />
      <Button name = "Good" onClick = {handleGoodClick} />
      <Button name = "Neutral" onClick = {handleNeutralClick}/>
      <Button name = "Bad" onClick = {handleBadClick}/>
      <Title section = "Statistics" />
      <History name = "Good" count = {good} />
      <History name = "Neutral" count = {neutral} />
      <History name = "Bad" count = {bad} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
