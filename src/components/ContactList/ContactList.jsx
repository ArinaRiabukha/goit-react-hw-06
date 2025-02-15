import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css"

const Contactlist = () => {

  const contacts = useSelector(state => state.contacts.items);
  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number}) => (
        <li className={s.contact} key={id}>
          <Contact id={id} name={name} number={number}/>
        </li>
      ))}
    </ul>
  );
};

export default Contactlist;