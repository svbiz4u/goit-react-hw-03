import s from './ContactList.module.css'

import Contact from '../Contact/Contact'

const ContactList = ({contacts, onDelete}) => {
    return (
      <ul className={s.wrapper}>
            {contacts.map((contact) => (
                <li key={contact.id} {...contact}>
                    {<Contact data={contact} onDelete={onDelete } /> }
                </li>
            ))}
      </ul>
    )
  }
  
  export default ContactList
