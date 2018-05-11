import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0
    }
  }

  render() {
    return (
      <div>
        <h1>give us feedback</h1>
        <button onClick={() => this.setState({good: this.state.good + 1})}>good</button>
        <button onClick={() => this.setState({neutral: this.state.neutral + 1})}>neutral</button>
        <button onClick={() => this.setState({bad: this.state.bad + 1})}>bad</button>

        <h2>statistics</h2>
        <span>good {this.state.good}</span><br />
        <span>neutral {this.state.neutral}</span><br />
        <span>bad {this.state.bad}</span>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
