import React from 'react'
import ReactDOM from 'react-dom'

const Title = (props) => (
  <h1>{props.value}</h1>
)

const Content = ({sections}) => (
  <div>
    {sections.map(section => <Section key={section.id} value={section} />)}
  </div>
)

const Section = (props) => (
  <p>{props.value.name} {props.value.tasks}</p>
)

const Course = ({course}) => (
  <div>
    <Title value={course.title} />
    <Content sections={course.sections} />
  </div>
)

const App = () => {
  const course = {
    title: 'Half Stack -sovelluskehitys',
    sections: [
      {
        name: 'Reactin perusteet',
        tasks: 10,
        id: 1
      },
      {
        name: 'Tiedonvälitys propseilla',
        tasks: 7,
        id: 2
      },
      {
        name: 'Komponenttien tila',
        tasks: 14,
        id: 3
      },
      {
        name: 'Testikomponentti',
        tasks: 33,
        id: 4
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
