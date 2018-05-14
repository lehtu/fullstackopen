import React from 'react'

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

export default Course
