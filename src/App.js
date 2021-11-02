import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import useLocalStorage from './hooks/useLocalStorage';

import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';

import './index.css';

export default function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  const submitHandler = (name, number) => {
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    const newContact = {
      id: uuidv4(),
      name,
      number,
    };

    setContacts(prevState => [newContact, ...prevState]);
  };

  const filterChange = e => {
    setFilter(e.target.value);
  };

  const renderFilteredContacts = () => {
    const filtered = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filtered),
    );
  };

  const deleteContact = contactEl => {
    setContacts(contacts.filter(contact => contact.id !== contactEl));
  };

  return (
    <div className="container">
      <h1 className="title">Phonebook</h1>
      <ContactForm onSubmit={submitHandler} />

      <h2 className="title">Contacts</h2>
      <Filter filterValue={filter} onFilter={filterChange} />
      <ContactList
        contacts={renderFilteredContacts()}
        onDeleteContact={deleteContact}
      />
    </div>
  );
}
