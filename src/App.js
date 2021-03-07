import React, { Component } from "react";
import "./App.css";
import { nanoid } from "nanoid";
import ContactList from "./components/ContactList";
import ContactForm from "./components/ContactForm";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };
  // проверка на совпадение
  checkContact = (name) => {
    return this.state.contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  // добавление контакта
  addContact = ({ name, number }) => {
    console.log(name, number);
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    if (this.checkContact(name)) {
      alert(`${name} is already in contacts`);
      return;
    } else {
      this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
      }));
    }
  };

  // удаление контакта
  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  render() {
    const { contacts } = this.state;
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <div>
          <p>Find contacts by name</p>
          <input type="text" />
        </div>
        <ContactList contacts={contacts} deleteContact={this.deleteContact} />
      </div>
    );
  }
}

export default App;
