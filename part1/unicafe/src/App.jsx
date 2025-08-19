import { useState } from 'react'

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

//const Header = ({text}) => <div><header>{text}</header></div>

const Header = (props) => {
  console.log(props)
  return (
    <>
      <h1>{props.headerText}</h1>
    </>
  )
}

const calcAverageFeedback = (good,bad,all) => {
  console.log(good)
  console.log(bad)
  console.log(all)
  let average = (good - bad) / all
  console.log(average)
  return average
}

const calcPositiveFeedback = (good,all) => {
  console.log(good)
  console.log(all)
  let positive = (good  / all) * 100
  console.log(positive)
  return positive
}

const StatisticLine = (props) => {
  console.log(props)
  return (
    <tr>
        <td>{props.label}</td><td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  if (props.all === 0) {
    return (
      <>
      <Header headerText='Statistics'/>
      <div>
        No feedback given.
      </div>
      </>
    )
  } else {
    const average = calcAverageFeedback(props.good, props.bad, props.all)
    console.log('average in stats = ',average)

    const positive = calcPositiveFeedback(props.good, props.all)
    console.log('positive in stats = ',positive)

    return(
    <>
    <Header headerText='Statistics'/>
    <table>
      <tbody>
      <StatisticLine label='good' value={props.good}/>
      <StatisticLine label='bad' value={props.bad}/>
      <StatisticLine label='neutral' value={props.neutral}/>
      <StatisticLine label='all' value={props.all}/>
      <StatisticLine label='average' value={average}/>
      <StatisticLine label='positive' value={positive}/>
      </tbody>
    </table>
    </>
  )
  }
  
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const handleGood = () => { 
    console.log('good before',good)
      const updatedGood = good + 1  
      setGood(updatedGood)  
      setAll(updatedGood+bad+neutral)
      console.log('good after',updatedGood)
    }

  const handleNeutral = () => { 
      const updatedNeutral = neutral + 1  
      setNeutral(updatedNeutral)  
      setAll(updatedNeutral+bad+good)
    }
  
  const handleBad = () => { 
      const updatedBad = bad + 1  
      setBad(updatedBad)  
      setAll(updatedBad+good+neutral)
    }

  return (
    <div>
    <Header headerText='Give Feedback'/>
      <div>
      <Button onClick={handleGood} text='good'/>
      <Button onClick={handleNeutral} text='neutral'/>
      <Button onClick={handleBad} text='bad'/>
    </div>
    <Statistics good={good} bad={bad} neutral={neutral} all={all}/>
    </div>
  )
}

export default App