import { useState } from 'react';

import styles from './ContactForm.module.css';

export default function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!name || !number) {
      alert('Enter the name!');
      return;
    }
    onSubmit(name, number);
    resetForm();
  };

  const handleInputChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.labelTitle}>
        Name:
        <input
          type="text"
          name="name"
          className={styles.input}
          value={name}
          onChange={handleInputChange}
        />
      </label>
      <label className={styles.labelTitle}>
        Phone:
        <input
          type="text"
          name="number"
          className={styles.input}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="The telephone number must contain numbers and may contain spaces, dashes, parentheses and may start with +"
          required
          value={number}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit" className={styles.button}>
        Add contact
      </button>
    </form>
  );
}
