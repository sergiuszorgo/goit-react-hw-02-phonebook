import React from "react";
import propTypes from "prop-types";
import s from "./ContactList.module.css";

const ContactList = ({ contacts, deleteContact }) => (
  <div className={s.ContactBox}>
    <h2>Contacts: {contacts.length}</h2>
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

ContactList.propTypes = {
  contacts: propTypes.array.isRequired,
  deleteContact: propTypes.func.isRequired,
};
