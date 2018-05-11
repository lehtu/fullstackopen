import React from 'react'
import ReactDOM from 'react-dom'

const Title = (props) => (
  <h1>{props.value}</h1>
)

const Content = (props) => (
  <div>
    <Section value={props.part1} />
    <Section value={props.part2} />
    <Section value={props.part3} />
  </div>
)

const Total = (props) => (
  <p>yhteensä {props.amount} tehtävää</p>
)

const Section = (props) => (
  <p>{props.value}</p>
)

const App = () => {
  const course = 'Half Stack -sovelluskehitys'
  const section1 = 'Reactin perusteet'
  const tasks1 = 10
  const section2 = 'Tiedonvälitys propseilla'
  const tasks2 = 7
  const section3 = 'Komponenttien tila'
  const tasks3 = 14

  return (
    <div>
      <Title value={course} />
      <Content part1={section1 + " " + tasks1} part2={section2 + " " + tasks2} part3={section3 + " " + tasks3} />
      <Total amount={tasks1 + tasks2 + tasks3} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
