import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../redux/actions';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

const ContactList = () => {
    const contacts = useSelector(state => state.contacts.contacts);
    const filter = useSelector(state => state.contacts.filter);

    const dispatch = useDispatch()

    const getVisibleContacts = (contacts, filter) => {
    
    
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter),
      );
    }
    
    const visibleContacts = getVisibleContacts(filter, contacts);

    if (visibleContacts.length > 0) {
            return (
    <div>
        <ul className={styles.contactList}>
            {visibleContacts.map(contact => (
                <li
                    className={styles.listItem}
                    key={contact.id}>
                    <span className={styles.name}>{contact.name}:</span>
                    <span className={styles.number}>{contact.number}</span>
                    <button
                        className={styles.button}
                        onClick={() => dispatch(deleteContact(contact.id))}>х</button>
                </li>
                ))}
        </ul>
    </div>
    )
    } else {
        return (
            <p>No contacts yet.</p>
        )
    }

}

ContactList.propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
}

export default ContactList;