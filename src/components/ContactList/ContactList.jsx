import Contact from "../Contact/Contact";
import s from "./ContactList.module.css"

const Contactlist = ({ contacts, handleDelete }) => {
  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number}) => (
        <li className={s.contact} key={id}>
          <Contact id={id} name={name} number={number} handleDelete={handleDelete}/>
        </li>
      ))}
    </ul>
  );
};

export default Contactlist;