import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { addContact } from '../redux/actions';
import styles from './ContactForm.module.css';

function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('')


  const inputChange = e => {
    switch (e.currentTarget.name) {
      case 'name':
        setName(e.currentTarget.value);
        break;
      case 'number':
        setNumber(e.currentTarget.value);
        break;
      default:
        return
    }
  };
  const onSubmitForm = e => {
    e.preventDefault();
    if (contacts.map(contact => contact.name).includes(name)) {
      alert(`You already have ${name} in contacs.`)
    } else {
      dispatch(addContact(name, number));
      setName('');
      setNumber('');
    }
  }
    
  return (
    <form
      className={styles.form}
      onSubmit={onSubmitForm}
    >
      <label className={styles.label}><span className={styles.name}>Name</span>
        <input
          className={styles.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={inputChange}
          value={name}
        />
      </label>

      <label className={styles.label}><span>Number</span>
        <input
          className={styles.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={number}
          onChange={inputChange}

        />
      </label>

      <button className={styles.button} type="submit">Add contact</button>
    </form>
  )
}
ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
};

export default ContactForm;