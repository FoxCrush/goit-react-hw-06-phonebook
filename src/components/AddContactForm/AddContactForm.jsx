import React, { Component } from 'react';

class createContactContainer extends Component {
  state = { name: '', number: '' };

  addContactButtonHandler = () => {
    const { name, number } = this.state;
    if (this.state.name.length > 0) {
      this.props.createContact(name, number);
    }
    this.setState({ name: '', number: '' });
  };

  onInputChangeHandler = e => {
    e.preventDefault();
    const type = e.target.name;
    this.setState({ [type]: e.target.value });
  };

  render() {
    const { name, number } = this.state;

    return (
      <div className="createContactContainer">
        <h3>Name</h3>
        <input
          value={name}
          onChange={this.onInputChangeHandler}
          className="clientInputTextfield"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="The name can only consist of letters, apostrophes, dashes and spaces. Example: Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan etc."
          required
        />
        <h3>Number</h3>
        <input
          value={number}
          onChange={this.onInputChangeHandler}
          className="clientInputTextfield"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="The phone number must consist of numbers and may contain spaces, dashes, parentheses, and may begin with +"
          required
        />
        <button
          className="addContactButton"
          type="button"
          onClick={this.addContactButtonHandler}
        >
          Add contact
        </button>
      </div>
    );
  }
}

export default createContactContainer;
