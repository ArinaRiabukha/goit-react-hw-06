import s from "./Contact.module.css"

const Contact = ({id, name, number, handleDelete }) => {
  return (
    <>
    <div className={s.info}>
      <p className={s.name}>{name}</p>
      <p className={s.number}>{number}</p>
      </div>
      <button className={s.deleteBtn} onClick={()=> handleDelete(id)}>Delete</button>
    </>
  );
};

export default Contact;