import "./styles.css";
import { useState } from 'react'

// component to filter person by name
const Filter = ({searcher, text}) => {
  return(
    <div>
      filter shown with <input value = {text} onChange = {searcher} />
    </div>
  )
}
export default function App() {
  const [persons, setPersons] = useState([
    {name: 'Arto Hellas', number: '123-456-789'}
  ])
  // console.log("persons name ", persons)
  const [newName, setNewName] = useState('Initial state of name...')
  const [newNumber, setNewNumber] = useState('123-111-111')

  // filter the names in phonebook by name
  const filterPhonebook = (event) => {
    setPersons(event.target.value)
    console.log(event.target.value)
    // console.log("filter method", persons.filter((person) => persons.name === person.name ))
  }
  
  // event handler to synchronize to new state after adding new name
  // preventDefault() is not called as no default action occurs on input change
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  // form submission button event handler
  const addPerson = (event) => {
    event.preventDefault()

    // new object to add person
    const personObject = {
      name: newName,
      number: newNumber
    }
    setPersons(persons.concat(personObject))
    
    // console.log(personObject.name)
    setNewName('')
     // add an alert if name of person added exists    
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searcher = {filterPhonebook} text = {newName} />
      <form onSubmit = {addPerson}>
        <div>
          name: <input 
                  value = {newName} 
                  onChange = {handleNameChange}
                  />
                <br></br>
          number: <input
                    value = {newNumber}
                    onChange = {handleNumberChange}
                  />
        </div>
        <div>
          <button type = 'submit'>add</button>
        </div> 
      </form>
      <h2>Numbers</h2>
      {persons.map(putName => 
        <ol key = {putName.id}>
          {putName.name} : {putName.number}
        </ol>
      )}
    </div>
  );
}
