import React from 'react';
// import shortid from 'shortid';
import { connect } from 'react-redux';
import { addContact, deleteContact, filterChange } from './redux/actions';
import { initialContacts } from './redux/reducer';

import ContactForm from './ContactForm/ContactForm';

import Filter from './Filter/Filter';

import ContactList from './ContactList/ContactList';

const defaultContacts =
  [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }
  ]

function App() {
  // const [contacts, setContacts] = useState(
  //   () => JSON.parse(window.localStorage.getItem('contacts')) ?? defaultContacts
  // );
  
  // const [filter, setFilter] = useState('');
 
  // useEffect(() => {
  //   window.localStorage.setItem('contacts',JSON.stringify(contacts))
  // }, [contacts])

  // const addContact = (name, number) => {
  //   const contact = {
  //     id: shortid.generate(),
  //     name,
  //     number
  //   }
  //   if (!contacts.map(contact => contact.name).includes(name)) {
  //     setContacts(prevState =>[contact, ...prevState]
  //     );
  //   } else {
  //     alert(`${name} is already in contacs.`)
  //   }
  // };
  
  // const deleteContact = id => {
  //   setContacts(prevState =>prevState.filter(contact=>contact.id!==id))
  // }

  // const changeFilter = e => {
  //   setFilter(e.currentTarget.value)
  // }
  
  // const normalizedFilter = filter.toLowerCase();
  // const visibleContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(normalizedFilter));

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm 
          onSubmit={addContact} 
          />
        <h2>Contacts</h2>
        <Filter 
          // value={filter} 
          // onChange={changeFilter}
          />
        <ContactList 
          contacts={initialContacts} 
          onDeleteContact={deleteContact}
          />
      </div>
    )
}

// const mapStateToProps = state => {
//   return initialContacts
// }

export default connect()(App);
