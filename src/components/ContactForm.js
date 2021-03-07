import React, { Component } from "react";
import { nanoid } from "nanoid";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  nameInputId = nanoid();
  numberInputId = nanoid();
  // добавление значений в state
  inputForm = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  //   очистка формы
  resetForm = () => {
    this.setState({ name: "", number: "" });
  };

  // добавление контакта
  addContact = (e) => {
    e.preventDefault();
    this.props.addContact(this.state);
    this.resetForm();
  };

  render() {
    return (
      <form onSubmit={this.addContact}>
        <label htmlFor={this.nameInputId}>
          Name:
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.inputForm}
            id={this.nameInputId}
          />
        </label>
        <label htmlFor={this.numberInputId}>
          Number:
          <input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.inputForm}
            id={this.numberInputId}
          />
        </label>
        <button onClick={this.addContact}>Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
