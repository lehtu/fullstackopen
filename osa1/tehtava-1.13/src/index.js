import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    const votes = {};
    this.props.anecdotes.forEach((anecdote, index) => {
      votes[index] = 0
    })
    this.state = {
      selected: 0,
      votes
    }
  }

  voteHandler = (index) => () => {
    const votes = {...this.state.votes}
    votes[index] += 1;
    this.setState({votes: votes});
  }

  nextHandler = () => () => this.setState({selected: Math.floor(Math.random() * this.props.anecdotes.length)})

  render() {
    return (
      <div>
        {this.props.anecdotes[this.state.selected]}<br />
        <p>has {this.state.votes[this.state.selected]} votes</p>
        <button onClick={this.voteHandler(this.state.selected)}>vote</button>
        <button onClick={this.nextHandler()}>next anecdote</button>
      </div>
    )
  }
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
