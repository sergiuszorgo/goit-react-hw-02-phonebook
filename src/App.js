import React, { Component } from "react";
import "./App.css";
import ContactList from "./components/ContactList";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
    name: "",
    number: "",
  };
  addContact = () => {
    console.log("Добавить контакт");
  };
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
        <form action="">
          <label>
            Name:
            <input type="text" />
          </label>
          <label>
            Number:
            <input type="tel" />
          </label>
          <button onClick={this.addContact}>Add contact</button>
        </form>
        <ContactList contacts={contacts} deleteContact={this.deleteContact} />
      </div>
    );
  }
}

export default App;
