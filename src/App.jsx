import { useState, useEffect } from 'react'
import './App.css'
import ContactForm from './components/ContactForm/ContactForm'
import ContactList from './components/Contacts/ContactList/ContactList'
import SearchBox from './components/SearchBox/SearchBox'
import initialContacts from './db/contacts.json'
import { nanoid } from 'nanoid'

const App = () => {

  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? initialContacts;
  });
  const [filterContacts, setFilterContacts] = useState("");

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (contact) => {
    const newContact = {
      id: nanoid(),
      ...contact
    }
    
    setContacts([newContact, ...contacts]);
  }

  const deleteContact = (contactId) => {
    setContacts(contacts.filter((contact) => {
      return contact.id !== contactId
    }))
  }

  const searchContact = (ev) => {
    const inputValue = ev.target.value;
    setFilterContacts(inputValue)
  }

  const filteredContact = contacts.filter((contact) => 
    contact.name.toLowerCase().includes(filterContacts.toLowerCase())
  )

  return (
    <div>
      <h1 className='title'>Phonebook</h1>
      <ContactForm addContact={addContact}/>
      <SearchBox filterContacts={filterContacts} searchContact={searchContact}/>
      <ContactList contacts={filteredContact} deleteContact={deleteContact}/>
    </div>
  )
}

export default App
