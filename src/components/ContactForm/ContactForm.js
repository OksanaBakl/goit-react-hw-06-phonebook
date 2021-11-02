import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addContact } from '../../redux/contacts/contacts-actions';

import styles from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.name && this.state.number !== '') {
      const { name, number } = this.state;
      this.props.onSubmit({ name, number });
      this.resetForm();
      return;
    }
    alert('Please, check the field NAME and NUMBER is not empty');
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  resetForm = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label className={styles.labelTitle}>
          Name:
          <input
            type="text"
            name="name"
            className={styles.input}
            value={name}
            onChange={this.handleInputChange}
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
            onChange={this.handleInputChange}
          />
        </label>
        <button type="submit" className={styles.button}>
          Add contact
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: contact => dispatch(addContact(contact)),
});

export default connect(null, mapDispatchToProps)(ContactForm);
