import React from 'react';

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
      newPhone: '',
      filter: ''
    }
  }

  addName = (event) => {
    event.preventDefault();

    const nameExists = !!this.state.persons.find(person => person.name === this.state.newName)
    if (nameExists) {
      alert('Nimi on jo tallennettu. Kirjoita toinen nimi.');
      return;
    }

    const person = {
      name: this.state.newName,
      phone: this.state.newPhone
    }

    const persons = this.state.persons.concat(person)

    this.setState({
      persons,
      newName: '',
      newPhone: ''
    })
  }

  handleNameChange = (event) => {
    this.setState({ newName: event.target.value })
  }

  handlePhoneChange = (event) => {
    this.setState({ newPhone: event.target.value })
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
        <div>
          rajaa näytettäviä:
          <input value={this.state.filter} onChange={this.handleFilterChange} />
        </div>
        <h2>Lisää uusi</h2>
        <form onSubmit={this.addName}>
          <div>
            nimi: <input value={this.state.newName} onChange={this.handleNameChange} />
          </div>
          <div>
            puhelin: <input value={this.state.newPhone} onChange={this.handlePhoneChange} />
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
        <table>
          <tbody>
            {personsToShow.map(person =>
              <tr key={person.name}>
                <td>{person.name}</td>
                <td>{person.phone}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    )
  }
}

export default App
