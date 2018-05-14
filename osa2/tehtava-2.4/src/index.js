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

const Total = ({sections}) => (
  <p>yhteensä {sections.reduce((sum, section) => sum + section.tasks, 0)} tehtävää</p>
)

const Course = ({course}) => (
  <div>
    <Title value={course.title} />
    <Content sections={course.sections} />
    <Total sections={course.sections} />
  </div>
)

const App = () => {
  const courses = [
    {
      title: 'Half Stack -sovelluskehitys',
      id: 1,
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
        }
      ]
    },
    {
      title: 'Node.js',
      id: 2,
      sections: [
        {
          name: 'Routing',
          tasks: 3,
          id: 1
        },
        {
          name: 'Middlewaret',
          tasks: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <h1>Opetusohjelma</h1>
      {courses.map(course => <Course key={course.id} course={course} />)}
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
