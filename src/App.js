import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { v4 as uuidv4 } from 'uuid';
import AddContactForm from 'components/AddContactForm';
import ContactList from 'components/ContactList';
import FilterComponent from 'components/Filter';
import { filterContacts } from 'redux/contatcs/contactsActions';
class App extends Component {
  // state = {
  //   items: [],
  //   filter: '',
  // };
  // componentDidMount() {
  //   const contactsFromStorage = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contactsFromStorage);
  //   if (parsedContacts) {
  //     this.setState({ items: parsedContacts });
  //   }
  // }
  // componentDidUpdate(prevProps, prevState) {
  //   const prevContacts = prevState.contacts;
  //   const contacts = this.state.contacts;
  //   if (prevContacts !== contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(contacts));
  //   }
  // }

  // createContact = (name = 'no name', number = 'no number') => {
  //   if (this.props.items.some(contact => contact.name === name)) {
  //     this.sameContactNameWarning(name);
  //     return;
  //   }
  //   const contact = {
  //     name,
  //     number,
  //     id: uuidv4(),
  //   };
  //   this.setState(currState => ({
  //     items: [...currState.contacts, contact],
  //   }));
  // };

  // onFilterInputChange = filterString => {
  //   this.props.onFilterInputChange({ filterString });
  // };

  // deleteContact = contactID => {
  //   this.setState(currState => ({
  //     contacts: currState.contacts.filter(contact => contact.id !== contactID),
  //   }));
  // };

  sameContactNameWarning = name => {
    alert(`${name} already exists`);
  };

  filterContacts = () => {
    const { items, filterString } = this.props;
    return items.filter(contact =>
      contact.name.toLowerCase().includes(filterString.toLowerCase())
    );
  };

  render() {
    const { filterString, onFilterInputChange } = this.props;
    const contactsToShow = this.filterContacts();
    return (
      <section className="phonebookSection">
        <h1>Phonebook</h1>
        <AddContactForm createContact={this.createContact} />
        <h2>Contacts</h2>
        <FilterComponent
          filterСondition={filterString}
          onFilterInputChange={value => onFilterInputChange(value)}
        />
        <ContactList
          contactsToShow={contactsToShow}
          deleteMethod={this.deleteContact}
        />
      </section>
    );
  }
}
const mapStateToProps = state => ({
  items: state.contacts.items,
  filterString: state.contacts.filterString,
});

const mapDispatchToProps = dispatch => ({
  onFilterInputChange: value => dispatch(filterContacts(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
