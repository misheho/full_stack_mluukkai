import { useState } from 'react'

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const Header = (props) => {
  console.log(props)
  return (
    <>
      <h1>{props.headerText}</h1>
    </>
  )
}

const HasVotes = (props) => {
  console.log(props)
  return (
      <div>has {props.table[props.index]} votes</div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Uint8Array(anecdotes.length))
  const [favorite, setFavorite] = useState(0)

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const changeAnecdote = () => {
    console.log('selected before', selected)
    const newSelected = getRandomInt(anecdotes.length)
    setSelected(newSelected)
    console.log('selected after', newSelected)
  }

  const vote = () => {
    console.log('votes before', votes)
    const updatedVotes = [...votes]
    updatedVotes[selected] += 1
    setVotes(updatedVotes)
    console.log('updated votes', updatedVotes)

    let maxIndex = favorite
    for (let i = 0; i < updatedVotes.length; i++){
      if (updatedVotes[maxIndex] < updatedVotes[i]) {
        maxIndex = i
      }
    }

    setFavorite(maxIndex)
    console.log('current maxIndex is ', maxIndex)
    console.log('current favorite is ', favorite)
  }

  return (
    <div>
      <Header headerText='Anecdote of the Day' />{anecdotes[selected]}
      <HasVotes table={votes} index={selected}/>
      <div>
        <Button onClick={changeAnecdote} text={'next anecdote'} />
        <Button onClick={vote} text={'vote'} />
      </div>
      <Header headerText='Anecdote with Most Votes' />
      <div>{anecdotes[favorite]}</div>
      <HasVotes table={votes} index={favorite}/>
    </div>
  )
}

export default App