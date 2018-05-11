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
  <p>{props.value.name} {props.value.tasks}</p>
)

const App = () => {
  const course = 'Half Stack -sovelluskehitys'
  const section1 = {
    name: 'Reactin perusteet',
    tasks: 10
  }
  const section2 = {
    name: 'Tiedonvälitys propseilla',
    tasks: 7
  }
  const section3 = {
    name: 'Komponenttien tila',
    tasks: 14
  }

  return (
    <div>
      <Title value={course} />
      <Content part1={section1} part2={section2} part3={section3} />
      <Total amount={section1.tasks + section2.tasks + section3.tasks} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
