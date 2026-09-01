import { useState } from 'react'

const Button = ({ handleClick, feedback }) => (
  <button onClick={handleClick}>{feedback}</button>
)

const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({good, bad, neutral}) => {
  const all = good + bad + neutral
  const average = ((good - bad) / all).toFixed(2)
  const positive = ((good / all) * 100).toFixed(2)

  if (all == 0) {
    return <p> No Feedback given </p>
  }
  return(
    <table>
      <tbody>
      <StatisticLine text = "good" value = {good} />
      <StatisticLine text = "neutral" value = {neutral} />
      <StatisticLine text = "bad" value = {bad} />
      <StatisticLine text = "all" value = {all} />
      <StatisticLine text = "average" value = {average} />
      <StatisticLine text = "positive" value = {positive + " %"} />
      </tbody>
    </table>  
  )

}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }
  const handleBadClick = () => {
    setBad(bad + 1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  return (
    <div>
      <h2> give feedback </h2>
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>
      <h2> Statistics </h2>
      <Statistics good={good} bad={bad} neutral={neutral} />

    </div>
  )
}

export default App