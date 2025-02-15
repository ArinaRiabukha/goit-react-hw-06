import { useDispatch } from "react-redux";
import s from "./Contact.module.css"
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({id, name, number }) => {

  const dispatch = useDispatch();
  return (
    <>
    <div className={s.info}>
      <p className={s.name}>{name}</p>
      <p className={s.number}>{number}</p>
      </div>
      <button className={s.deleteBtn} onClick={() => dispatch(deleteContact(id))}>Delete</button>
    </>
  );
};

export default Contact;