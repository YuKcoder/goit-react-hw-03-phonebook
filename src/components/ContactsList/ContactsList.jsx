import PropTypes from 'prop-types';
import ContactItem from '../ContactItem';

export default function ContactsList({ visibleNumbers, onDeleteContact }) {
  return (
    <ul>
      {visibleNumbers.map(({ id, name, number }) => (
        <ContactItem
          name={name}
          number={number}
          contactId={id}
          key={id}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
}

ContactsList.propTypes = {
  visibleNumbers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    }).isRequired
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
