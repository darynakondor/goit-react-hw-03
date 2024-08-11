import style from "./Contact.module.css"
import { BsTelephoneFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

const Contact = ({contactId, contactName, contactNumber, deleteContact}) => {
  return (
    <div className={style.flex}>
        <div className={style.contactInfo}>
            <div className={style.flex}>
                <FaUser />  
                <p className={style.text}>{contactName}</p>
            </div>
            <div className={style.flex}>
                <BsTelephoneFill />
                <a href={`tel: ${contactNumber}`}>{contactNumber}</a>
            </div>
        </div>
        <button type="button" onClick={() => deleteContact(contactId)} className={style.btn}>Delete</button>
    </div>
  )
}

export default Contact