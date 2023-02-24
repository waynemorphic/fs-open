import React, { useState } from 'react'

const VoteButton = ({castVote, text, vote}) => {
  return(
    <>
      <button onClick={castVote}>{text}</button>      
    </>
  )
}

const Button = ({handleSelection, text}) => {
  // console.log(handleSelection)
  return(
    <>
      <button onClick={handleSelection}>{text}</button>
    </>
  )
}
function App() {
    const anecdotes = [
      'If it hurts, do it more often.',
      'Adding manpower to a late software project makes it later!',
      'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
      'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      'Premature optimization is the root of all evil.',
      'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
      'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
      'The only way to go fast, is to go well.'
    ]
    


    const [selected, setSelected] = useState(0)
    const [vote, setVote] = useState(new Uint8Array(anecdotes.length))
    
    const selection = () => {
      const anySelection = Math.floor(Math.random() * anecdotes.length) 
      setSelected(anySelection)
    }

    const upVote = () => {
      const copy = [...vote]
      copy[selected] += 1
      setVote(copy)
      // console.log(...vote)
    }

    const mostVotes = vote.indexOf(Math.max(...vote))      
      // console.log(vote.indexOf(Math.max(...vote)))
      // console.log(vote)

    return (
      <div>
        <h3>Today's anecdote is</h3>
        <p>{anecdotes[selected]}</p>
        <p>has {vote[selected]} votes</p>
        <VoteButton castVote={upVote} text = 'Vote' />
        <Button handleSelection={selection} text = 'Next Anecdote' /> 
        <h3>Anecdote with most votes</h3>       
        <p>{anecdotes[mostVotes]}</p>
        <p>has {vote[mostVotes]}</p>
      </div>
    )
}

export default App