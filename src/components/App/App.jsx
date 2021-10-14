import { useState } from 'react';
import shortid from 'shortid';

import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';
import { useLocalStorage } from 'hooks/useLocalStorage';

import { Container, PhonebookTitle, ContactsTitle } from './App.styled';

export const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  const addContact = (name, number) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    setContacts([contact, ...contacts])
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  }

  const changeFilter = e => {
    setFilter(e.target.value);
  };

  const normalizedFilter = filter.toLowerCase();
  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter));

  return (
    <Container>
      <PhonebookTitle>Phonebook</PhonebookTitle>
      <ContactForm
        contacts={filterContacts}
        onSubmit={addContact}
      />

      <ContactsTitle>Contacts</ContactsTitle>
      <Filter filter={filter} onChange={changeFilter} />
      <ContactList contacts={filterContacts} onDeleteContact={deleteContact} />
    </Container>
  )
}