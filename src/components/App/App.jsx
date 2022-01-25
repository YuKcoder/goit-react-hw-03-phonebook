import { Component } from 'react';
import { nanoid } from 'nanoid';
import { GlobalStyle } from '../../GlobalStyled/GlobalStyled.styled';
import { Title } from './App.styled';

import ContactForm from '../ContactForm';
import ContactsList from '../ContactsList';
import Filter from '../Filter';

export default class Add extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  checkContact = name => {
    const { contacts } = this.state;
    const normalizeName = name.toLowerCase();

    return contacts.find(
      contact => normalizeName === contact.name.toLocaleLowerCase()
    );
  };

  addContact = ({ name, number }) => {
    const contact = { id: nanoid(), name, number };

    if (this.checkContact(name)) {
      alert(`${name} is already in contacts.`);
    } else {
      this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }));
    }
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  getVisibleNumbers = () => {
    const { contacts, filter } = this.state;
    const normalizeFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const visibleNumbers = this.getVisibleNumbers();

    return (
      <>
        <Title>Phonebook</Title>
        <ContactForm submit={this.addContact} />
        <Title>Contacts</Title>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactsList
          visibleNumbers={visibleNumbers}
          onDeleteContact={this.deleteContact}
        />
        <GlobalStyle />
      </>
    );
  }
}
