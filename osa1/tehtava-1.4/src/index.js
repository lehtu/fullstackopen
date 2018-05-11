import React from 'react'
import ReactDOM from 'react-dom'

const Title = (props) => (
  <h1>{props.value}</h1>
)

const Content = (props) => (
  <div>
    <Section value={props.sections[0]} />
    <Section value={props.sections[1]} />
    <Section value={props.sections[2]} />
  </div>
)

const Total = (props) => (
  <p>yhteensä {props.sections[0].tasks + props.sections[1].tasks + props.sections[2].tasks} tehtävää</p>
)

const Section = (props) => (
  <p>{props.value.name} {props.value.tasks}</p>
)

const App = () => {
  const course = 'Half Stack -sovelluskehitys'
  const sections = [
    {
      name: 'Reactin perusteet',
      tasks: 10
    },
    {
      name: 'Tiedonvälitys propseilla',
      tasks: 7
    },
    {
      name: 'Komponenttien tila',
      tasks: 14
    }
  ]

  return (
    <div>
      <Title value={course} />
      <Content sections={sections} />
      <Total sections={sections} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
