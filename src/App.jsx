import ContactForm from "./components/ContactForm/ContactForm"
import SearchBox from "./components/SearchBox/SearchBox"
import ContactList  from "./components/ContactList/ContactList"
import s from "./App.module.css"

import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid'

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts ? JSON.parse(savedContacts) : [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},];
  });

    const addContact = (name, number) => {
      if (!name || !number) return;

      const isExist = contacts.some(
        (contact) => contact.number === number
      );
  
      if (isExist) {
        alert(`Contact with that number already exists!`);
        return;
      }
      const newObj = {
        id: nanoid(),
        name: String(name), 
        number: String(number),
      };
      setContacts((prev) => [...prev, newObj]);
    };

    useEffect(() => {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    }, [contacts]);
    

    const [newValue, setNewValue] = useState('');

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(newValue.toLowerCase())
    );

    const deleteContact = (id) => {
      setContacts(prev => prev.filter(contact => contact.id !== id));
    };
    

  return (
    <div>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm addContact={addContact}/>
      {contacts.length > 0 && <SearchBox newValue={newValue} setNewValue={setNewValue} />}
      <ContactList contacts={filteredContacts} handleDelete={deleteContact}/>
    </div>
  );
};

export default App;