import React from 'react'
import Filter from './Filter'
import Persons from './Persons'
import NewUser from './NewUser'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Martti Tienari', number: '040-123456' },
        { name: 'Arto Järvinen', number: '040-123456' },
        { name: 'Lea Kutvonen', number: '040-123456' }
      ],
      newName: '',
      newNumber: '',
      filter: ''
    }
  }

  addName = (event) => {
    event.preventDefault();

    const nameExists = !!this.state.persons.find(person => person.name === this.state.newName)
    if (nameExists) {
      alert('Nimi on jo tallennettu. Kirjoita toinen nimi.')
      return;
    }

    const person = {
      name: this.state.newName,
      number: this.state.newNumber
    }

    const persons = this.state.persons.concat(person)

    this.setState({
      persons,
      newName: '',
      newNumber: ''
    })
  }

  handleNameChange = (event) => {
    this.setState({ newName: event.target.value })
  }

  handleNumberChange = (event) => {
    this.setState({ newNumber: event.target.value })
  }

  handleFilterChange = (event) => {
    this.setState({ filter: event.target.value.toLowerCase() })
  }

  render() {
    const personsToShow = this.state.filter.length > 0
      ? this.state.persons.filter(person => person.name.toLowerCase().includes(this.state.filter.toLowerCase()))
      : this.state.persons

    return (
      <div>
        <h1>Puhelinluettelo</h1>
        <Filter filter={this.state.filter} onChange={this.handleFilterChange} />
        <h2>Lisää uusi</h2>
        <NewUser
          formOnSubmit={this.addName}
          newNameValue={this.state.newName}
          newNameOnChange={this.handleNameChange}
          newNumberValue={this.state.newNumber}
          newNumberOnChange={this.handleNumberChange}
        />
        <h2>Numerot</h2>
        <Persons persons={personsToShow} />
      </div>
    )
  }
}

export default App
