import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css"

const Contactlist = () => {

  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filters.filter);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <ul className={s.list}>
      {filteredContacts.map(({ id, name, number}) => (
        <li className={s.contact} key={id}>
          <Contact id={id} name={name} number={number}/>
        </li>
      ))}
    </ul>
  );
};

export default Contactlist;