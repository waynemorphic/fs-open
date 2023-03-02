import { useState } from "react";

const Filter = (props) => {
  // console.log(...props.persons.filter((person) => person.name))
  return(
    <>
      <div>
      filter shown with: <input  {...props.persons.filter((person) => person.name)}/>
      </div>
    </>
  )
}

// form to add a person's name and number
const PersonForm = ({eventPerson, eventName, eventNumber, stateName, stateNumber}) => {
  return(
    <>
      <form onSubmit={eventPerson}>
          <div>
            name: <input value={stateName} onChange={eventName} />
            <br></br>
            number: <input value={stateNumber} onChange={eventNumber} />
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
    </>
  )
}

// Persons component
const Persons = ({persons}) => { 
   
  return(
    <>
      {persons.map((person) => (
        <li key = {persons.indexOf(person)}>
          {person.name}: {person.number}
        </li>
        ))}
    </>
  )
}

export default function App() {
  const [persons, setPersons] = useState([
    { name: "Arto", number: "123-456-789" },
    { name: "James", number: "112-333-444" }
  ]);
  const [newName, setNewName] = useState("mark");
  const [newNumber, setNewNumber] = useState("123-111-111");

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
    // const personObject = {
    //   name: newName,
    //   number: newNumber,
    // };
    

    // We are checking if a name exists in the array
    let j, k;
    for (let i = 0; i < persons.length; i++) {
      // returns a boolean value
      const personObject = {
        name: newName,
        number: newNumber,
      };
      k = persons[i].name.toLowerCase() === personObject.name.toLowerCase()
      // j = persons.map((i) => i.name).includes(k);
      // console.log("existing?", j)
      if (k === true){
        // console.log("value of k",k)
        alert(personObject.name + " name exists in phonebook")
      }
      else {
        event.target.reset()
        console.log(personObject)
        setPersons(persons.concat(personObject));
        setNewName("");
      }
    }
    
  // console.log("jajaj",persons.filter((person) => {
  //   person.name === j
  // ? alert(person.name, "name exists in phonebook")
  // : {}
  // }))

    // loop and condition to check if name exists in phonebook
    // for (let i = 0; i < persons.length; i++) {
    //   console.log("persons", persons[i].name);
    //   if (persons[i].name.toLowerCase() === personObject.name.toLowerCase()) {
    //     const index = persons.indexOf(persons[i].name);
    //     console.log(persons.splice(index, 1));
    //     console.log(persons);
    //     event.target.reset();
    //     alert(personObject.name + " already exists in phonebook");
    //   } else {
    //     setPersons(persons.concat(personObject));
    //     setNewName("");
    //   }
    // }
    // check if name exists in the phonebook
    // persons.filter((person) => {
    //   person.name.toLowerCase() === personObject.name.toLowerCase()
    //     ? alert(personObject.name + " already exists in phonebook")
    //     : event.target.reset();
    //   return person.name;
    // });
  };

  return (
    <div>
      <h2>Phonebook</h2>
      {/* <Filter searcher = {filterPhonebook} text = {newName} /> */}
      <Filter stateName = {newName} eventName = {handleNameChange} persons = {persons} />
      <h2>Add a new</h2>
      <PersonForm 
        eventPerson = {handlePersonAddition} 
        stateName = {newName} 
        stateNumber = {newNumber}
        eventName = {handleNameChange}
        eventNumber = {handleNumberChange} 
      />
      <h2>Numbers</h2>
      <Persons persons = {persons}/>
    </div>
  );
}
