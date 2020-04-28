import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Statistic = ({name, count}) => {
  return(
    <td> <tr>{name}</tr><tr>{count}</tr> </td>
  )
}

const Title = ( { sectionName } ) => <h1> {sectionName} </h1>

const Button = ({ onClick, name }) => {
  return(
    <button onClick = {onClick} > {name} </button>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const allClicks = (good + neutral + bad)

  const average = (good - bad)/allClicks

  const positive = (good/allClicks * 100 + "%")

  if (allClicks === 0) {
    return (
      <div> There haven't been any responses yet </div>
    )
  }

  return(
    <tbody>
      <table>
        <Statistic name = "Good" count = {good} />
        <Statistic name = "Neutral" count = {neutral} />
        <Statistic name = "Bad" count = {bad} />
        <Statistic name = "All" count = {allClicks} />
        <Statistic name = "Average" count = {average} />
        <Statistic name = "Positive" count = {positive} />
      </table>
    </tbody>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {setGood( good+1 ) }
  const handleNeutralClick = () => {setNeutral( neutral+1 ) }
  const handleBadClick = () => {setBad( bad+1 ) }


  return (
    <div>
      <Title sectionName = "Give Feedback" />
      <Button name = "Good" onClick = {handleGoodClick} />
      <Button name = "Neutral" onClick = {handleNeutralClick}/>
      <Button name = "Bad" onClick = {handleBadClick}/>
      <Title sectionName = "Statistics" />
      <Statistics good = {good} neutral = {neutral} bad = {bad} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
