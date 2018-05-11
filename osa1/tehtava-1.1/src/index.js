import React from 'react'
import ReactDOM from 'react-dom'

const Title = (props) => (
  <h1>{props.value}</h1>
)

const Content = (props) => (
  <div>
    <p>{props.part1}</p>
    <p>{props.part2}</p>
    <p>{props.part3}</p>
  </div>
)

const Total = (props) => (
  <p>yhteensä {props.amount} tehtävää</p>
)

const App = () => {
  const course = 'Half Stack -sovelluskehitys'
  const osa1 = 'Reactin perusteet'
  const tehtavia1 = 10
  const osa2 = 'Tiedonvälitys propseilla'
  const tehtavia2 = 7
  const osa3 = 'Komponenttien tila'
  const tehtavia3 = 14

  return (
    <div>
      <Title value={course} />
      <Content part1={osa1 + " " + tehtavia1} part2={osa2 + " " + tehtavia2} part3={osa3 + " " + tehtavia3} />
      <Total amount={tehtavia1 + tehtavia2 + tehtavia3} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
