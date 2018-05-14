import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        {
          name: 'Arto Hellas',
          phone: '050 123 4123'
        }
      ],
      newName: '',
      newPhone: ''
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

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
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
            {this.state.persons.map(person =>
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
