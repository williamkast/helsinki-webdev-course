import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({name}) => <h1> {name} </h1>

const Button = ({name, onClick}) => <button onClick = {onClick}> {name} </button>

const Statistic = ({name, value}) => {
  return(
    <tr>
      <td>{name}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const allClicks = good + neutral + bad

  const average = (good - bad)/allClicks

  const percentPostitive = ((good/allClicks)*100+"%")

  if(allClicks === 0) {
    return(
      <div> There are no clicks yet </div>
    )
  }

  return(
    <table>
      <tbody>
        <Statistic name = "Good" value = {good} />
        <Statistic name = "Neutral" value = {neutral} />
        <Statistic name = "Bad" value = {bad} />
        <Statistic name = "All" value = {allClicks} />
        <Statistic name = "Average" value = {average} />
        <Statistic name = "Positive" value = {percentPostitive} />
      </tbody>
    </table>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good+1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral+1)
  }
  const handleBadClick = () => {
    setBad(bad+1)
  }


  return (
    <div>
      <Header name = "give feedback" />
      <Button name = "good" onClick = {handleGoodClick} />
      <Button name = "neutral" onClick = {handleNeutralClick} />
      <Button name = "bad" onClick = {handleBadClick} />

      <Header name = "statistics" />
      <Statistics good = {good} neutral = {neutral} bad = {bad} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
