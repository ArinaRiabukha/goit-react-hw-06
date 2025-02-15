import ContactForm from "./components/ContactForm/ContactForm"
import SearchBox from "./components/SearchBox/SearchBox"
import ContactList  from "./components/ContactList/ContactList"
import s from "./App.module.css"
import { useDispatch, useSelector } from "react-redux";
import { addContact, deleteContact } from "./redux/contactsSlice";

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filters.name.toLowerCase());

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );
  const handleAddContact = (name, number) => {
    if (!name || !number) return;

    dispatch(addContact({ name, number })); 
  };
  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id)); 
  };

  return (
    <div>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm addContact={handleAddContact}/>
      {contacts.length > 0 && <SearchBox />}
      <ContactList contacts={filteredContacts} handleDelete={handleDeleteContact} />
    </div>
  );
};

export default App;