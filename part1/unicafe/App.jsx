import { useState } from "react"

// Statistics component
const Statistics = ({all, average, positive}) => {
  if (all.length === 0){
    return(
      <>
      {/* <h3>Statistics</h3>
        <p>No feedback given</p> */}
      </>
    )
  }
  return(
    <>
    <h3>Statistics</h3>
    <table>
        <tr>
          <td>All {all}</td>
        </tr>
        <tr>
          <td>Average {average}</td>
        </tr>
        <tr>
          <td>Positive {positive} %</td>
        </tr>
      </table>
    </>
  )
}

// Statistics display component
const StatisticLine = ({good, neutral, bad}) => {
  console.log(good)
  if (good === 0 & neutral === 0 & bad === 0){
    return(
      <>
      <h3>Statistics</h3>
        <p>No feedback given</p>
      </>
    )
  }
  return(
    <>     
      <table>
        <tr>
          <td>Good {good}</td>
        </tr>
        <tr>
          <td>Neutral {neutral}</td>
        </tr>
        <tr>
          <td>Bad {bad}</td>  
        </tr>
      </table>      
    </>
  )
}

// Refactored button component
const Button = ({handleClick, text}) => {
  return(
    <>
      <button onClick={handleClick}>{text}</button>
    </>
  )
}

const App = () => {
    // State management
  const[good, setGood] = useState(0)
  const[neutral, setNeutral] = useState(0)
  const[bad, setBad] = useState(0)
  const[all, setTotal] = useState([])
  const[average, setAverage] = useState([]) // for each: good = 1 neutral = 0 bad = -1
  const[positive, setPositivePercentage] = useState([])

  const clickGood = () => {
    const updateGood = good + 1
    setGood(updateGood)
    setTotal(updateGood + neutral + bad)
    const mean = (updateGood - bad) / (updateGood + neutral + bad)
    setAverage(mean)
    const percentage = (updateGood / (updateGood + neutral + bad)) * 100
    setPositivePercentage(percentage)
  }

  const clickNeutral = () => {
    const updateNeutral = neutral + 1
    setNeutral(updateNeutral)
    setTotal(updateNeutral + good + bad)
    const mean = (good - bad) / (updateNeutral + good + bad)
    const percentage = (good / (updateNeutral + good + bad)) * 100
    // console.log(percentage)
    setAverage(mean)
    setPositivePercentage(percentage)
  }

  const clickBad = () => {
    const updateBad = bad + 1
    setBad(updateBad)
    setTotal(updateBad + good + neutral)
    const mean = (good - updateBad) / (updateBad + neutral + good)
    setAverage(mean)
    const percentage = (good / (good + neutral + updateBad)) * 100
    setPositivePercentage(percentage)
  }
  return (
    <div>
      <h3>Give Feedback</h3>
      <Button handleClick={clickGood} text='Good' />
      <Button handleClick={clickNeutral} text='Neutral' />
      <Button handleClick={clickBad} text='Bad' />
      <StatisticLine 
        good = {good}
        neutral = {neutral} 
        bad = {bad}        
      />
      <Statistics 
        all = {all} 
        average = {average}
        positive = {positive}
      />
    </div>
  )
}

export default App
