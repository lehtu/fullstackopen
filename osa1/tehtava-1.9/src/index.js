import React from 'react'
import ReactDOM from 'react-dom'

const Button = ({onClick, value}) => (
  <button onClick={onClick}>{value}</button>
)

const Statistics = ({good, neutral, bad}) => {
  const votes = good + neutral + bad
  const average = (good * 1 + neutral * 0 + bad * -1) / votes || 0
  const percentage = good / votes || 0

  if (votes === 0) {
    return (
      <div>
        <h2>statistics</h2>
        Ei yhtään palautetta annettu
      </div>
    )
  }

  return (
    <div>
      <h2>statistics</h2>
      <Statistic label="good" value={good} />
      <Statistic label="neutral" value={neutral} />
      <Statistic label="bad" value={bad} />
      <Statistic label="avg" value={average.toFixed(1)} />
      <Statistic label="percentage" value={percentage.toFixed(2) + '%'} />
    </div>
  )
}

const Statistic = ({label, value}) => (
  <div>
    <span>{label} {value}</span><br />
  </div>
)

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0
    }
  }

  goodHandler = (number) => () => this.setState({good: this.state.good + 1})
  neutralHandler = (number) => () => this.setState({neutral: this.state.neutral + 1})
  badHandler = (number) => () => this.setState({bad: this.state.bad + 1})

  render() {
    return (
      <div>
        <h1>give us feedback</h1>
        <Button onClick={this.goodHandler()} value="good" />
        <Button onClick={this.neutralHandler()} value="neutral" />
        <Button onClick={this.badHandler()} value="bad" />

        <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
