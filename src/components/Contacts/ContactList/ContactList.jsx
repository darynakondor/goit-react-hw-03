import Contact from "../Contact/Contact"
import style from "./ContactList.module.css"

const ContactList = ({contacts, deleteContact}) => {
  return (
    <ul className={style.list}>
        {
            contacts.map((contact) => {
                return(
                    <li className={style.item} key={contact.id}>
                        <Contact contactId={contact.id} contactName={contact.name} contactNumber={contact.number} deleteContact={deleteContact}/>
                    </li>
                )
            })
        }
    </ul>
  )
}

export default ContactList