import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = ( {name, onClick} ) => <div> <button onClick = {onClick}> {name} </button> </div>

const Title = ( {name} ) => <h1> {name} </h1>

const getRandom = () => Math.floor(Math.random() * Math.floor(6))

const MostVotes = ({votes, anecdotes}) => {
  const mostVotes = Math.max(...votes)
  const mostVotesLocation = votes.indexOf(mostVotes)

  if(mostVotes === 0) {
    return (
      <div> There are no votes yet </div>
    )
  }
  return (
    <div>{anecdotes[mostVotesLocation]} <br /> has {mostVotes} votes </div>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(6).fill(0))


  const handleClick = () => {
    setSelected(getRandom())
  }


  const handleVotes = () => {
    const votesCopy = [...votes]
    votesCopy[selected] += 1
    setVotes(votesCopy)
  }


  return (
    <div>
      <Title name = "Anecdote of the day" />
      {anecdotes[selected]} <br /> has {votes[selected]} votes and is anecdote #{selected}
      <Button name = "Vote" onClick = {handleVotes} /> <Button name = "Next Anecdote" onClick = {handleClick}/>
      <Title name = "Anecdote with the most votes" />
      <MostVotes anecdotes = {anecdotes} votes = {votes} />


    </div>

  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
