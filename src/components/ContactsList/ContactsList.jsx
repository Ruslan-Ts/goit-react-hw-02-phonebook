import PropTypes from 'prop-types';
import { } from './ContactsList.styled';

const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
      <ul>
          {contacts.map(({ id, name, number }) => {
    return (
      <li key={id}>
        {name}: {number}
        <button type="button" onClick={() => onDeleteContact(id, name)}>
          Delete
        </button>
      </li>
    );
  })}
     
    </ul>
  );
};

ContactsList.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsList;