import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Title = ({name}) => <h1> {name} </h1>

const getRandom = () => Math.floor( Math.random() * 6)

const MaxVotes = ( {anecdotes, votes} ) => {
  const maxVotes = Math.max(...votes)
  const maxVotesLocation = votes.indexOf(maxVotes)

  if (maxVotes === 0){
    return(
      <div> There are no votes yet </div>
    )
  }

  return (
    <div> {anecdotes[maxVotesLocation]} <br/> has {votes[maxVotesLocation]} votes </div>
  )
}

const Button = ( {name, onClick} ) => <button onClick = {onClick}> {name} </button>

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(6).fill(0))

  const shuffleAnecdote = () => setSelected(getRandom)

  const handleVotes = () => {
    const votesCopy = [...votes]
    votesCopy[selected] +=1
    setVotes(votesCopy)
  }



  console.log(votes)

  return (
    <div>
      <Title name = "Anecdote of the day" />
      {anecdotes[selected]} <br/> has {votes[selected]} votes
      <br/>
      <Button name = "Next Anecdote" onClick = {shuffleAnecdote} />
      <Button name = "Votes" onClick = {handleVotes} />
      <Title name = "Anecdote with the most votes" />
      <MaxVotes anecdotes = {anecdotes} votes = {votes} />
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
