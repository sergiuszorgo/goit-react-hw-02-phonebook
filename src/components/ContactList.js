import React from "react";
import s from "./ContactList.module.css";

const ContactList = ({ contacts, deleteContact }) => (
  <div className={s.ContactBox}>
    <ul className={s.ContactList}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.ContactListItem}>
          <p className={s.ContactListName}>
            {name}: {number}
          </p>
          <button onClick={() => deleteContact(id)}>Remoove</button>
        </li>
      ))}
    </ul>
  </div>
);

export default ContactList;
