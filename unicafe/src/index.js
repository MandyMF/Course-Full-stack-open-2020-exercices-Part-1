import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const ClassificationCounter = ({opinion_text, onClickHandler, ...props}) =>
{
  return (
    <button onClick={onClickHandler}>
      {opinion_text}
    </button>
  )
}

const ClassificationCounterInfo = ({opinion_text, counter, ...props}) =>
{
  return (
    <p>
      {opinion_text} {counter}
    </p>
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

      <ClassificationCounter
      opinion_text="good"
      onClickHandler={setToGood}
      />

    <ClassificationCounter
      opinion_text="neutral"
      onClickHandler={setToNeutral}
      />

      <ClassificationCounter
      opinion_text="bad"
      onClickHandler={setToBad}
      />

      <h1>statistics</h1>

      <ClassificationCounterInfo 
        opinion_text="good"
        counter={good}
      />

      <ClassificationCounterInfo 
        opinion_text="neutral"
        counter={neutral}
      />

      <ClassificationCounterInfo 
        opinion_text="bad"
        counter={bad}
      />

    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)