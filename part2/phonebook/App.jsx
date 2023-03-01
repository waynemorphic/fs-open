import "./styles.css";
import { useState } from "react";

export default function App() {
  const [persons, setPersons] = useState([
    { name: "Arto", number: "123-456-789" },
    { name: "James", number: "112-333-444" }
  ]);
  const [newName, setNewName] = useState("Initial state of name...");
  const [newNumber, setNewNumber] = useState("123-111-111");
  const [nameCheck, setNameCheck] = useState([]);

  // event handler to synchronize to new state after adding new name
  // preventDefault() is not called as no default action occurs on input change
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  // form submission event handler. Prevents default html form submission
  const handlePersonAddition = (event) => {
    event.preventDefault();

    // new object to add person
    const personObject = {
      name: newName,
      number: newNumber
    };

    // check if name exists in the phonebook
    persons.filter((person) => {
      person.name.toLowerCase() === personObject.name.toLowerCase()
        ? alert(personObject.name + " already exists in phonebook")
        : event.target.reset();
      return person.name;
    });

    // add name and number on UI
    setPersons(persons.concat(personObject));
    setNewName("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      {/* <Filter searcher = {filterPhonebook} text = {newName} /> */}
      <h2>Add a new</h2>
      <form onSubmit={handlePersonAddition}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
          <br></br>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((putName) => (
        <ol key={putName.uniqueId}>
          {putName.name} : {putName.number}
        </ol>
      ))}
    </div>
  );
}
