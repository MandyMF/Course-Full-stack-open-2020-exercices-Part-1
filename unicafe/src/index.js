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

const StaticticsInfo = ({good,neutral,bad, ...props})=>
{
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
        <ClassificationCounterInfo 
    opinion_text="all"
    counter={good+ neutral+ bad}
    />
    <p>
      average {getAverage()}
    </p>
    <p>
      positive {getPositiveProportion()} % 
    </p>
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

      <StaticticsInfo
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