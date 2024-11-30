import './App.css'

import { useState, useEffect } from 'react';
import initialContacts from './assets/contacts.json'
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';


const App = () => {

  const [contacts, setContacts] = useState(() => {
    const contactList = JSON.parse(window.localStorage.getItem("contacts"));
    return contactList?.length ? contactList : initialContacts
  });

  const [filter, setFilter] = useState("");

  useEffect(() => {
      window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);
  
  const handleAdding = (newContact) => {
    setContacts((prev) => [...prev, newContact]) 
  };

  const deleteContact = (contactId) => {
      setContacts(prevContacts => {
      return prevContacts.filter((contact) => contact.id !== contactId);
      })
}

  const filteredContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));
  
  return (
    <div>
      <h1>Phonebook</h1>
      
      <ContactForm onAdd={handleAdding} />
      <SearchBox value={filter} onFilter={setFilter } />
      <ContactList contacts={filteredContacts} onDelete={deleteContact } />
    </div>
  );
};

export default App


