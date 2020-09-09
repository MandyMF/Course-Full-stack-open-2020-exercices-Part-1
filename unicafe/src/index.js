import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = ({opinion_text, onClickHandler, ...props}) =>
{
  return (
    <button onClick={onClickHandler}>
      {opinion_text}
    </button>
  )
}

const Statictic = ({text, value, ...props}) =>
{
  return (
    <p>
      {text} {value}
    </p>
  )
}

const Statictics = (props)=>
{
  const good=props.good
  const neutral=props.neutral
  const bad=props.bad

  const getAverage = () => {
    return (good + bad*-1)/(good + neutral + bad)
  }

  const getPositiveProportion = () =>{
    return (good)*100/(good + neutral + bad)
  }

  if(good+neutral+bad === 0)
  {
    return (
      <p>No feedback given</p>
    )
  }

  return (

    
    <>
    <Statictic
    text="good"
    value={good}
    />
    <Statictic
    text="neutral"
    value={neutral}
    />
    <Statictic
    text="bad"
    value={bad}
    />
    <Statictic 
    text="all"
    value={good+ neutral+ bad}
    />

    <Statictic 
    text="average"
    value={getAverage()}
    />

    <Statictic 
    text="posite"
    value={getPositiveProportion().toString() + ' %'}
    />

    </>
  )

}


const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = () => {
    setGood(good + 1)
  }

  const setToNeutral = () => {
    setNeutral(neutral + 1)
  }

  const setToBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>

      <Button
      opinion_text="good"
      onClickHandler={setToGood}
      />

    <Button
      opinion_text="neutral"
      onClickHandler={setToNeutral}
      />

      <Button
      opinion_text="bad"
      onClickHandler={setToBad}
      />

      <h1>statistics</h1>

      <Statictics
       good={good}
       neutral={neutral}
       bad={bad}
      />

    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)