import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import styles from "./Contact.module.css";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div className={styles.contact}>
      <span>{contact.name}</span>
      <span>{contact.phone}</span>
      <button className={styles.button} onClick={handleDelete}>
        Sil
      </button>
    </div>
  );
};

export default Contact;
