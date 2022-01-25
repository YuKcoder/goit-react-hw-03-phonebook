import PropTypes from 'prop-types';
import Button from '../Button';

export default function ContactItem({
  name,
  number,
  contactId,
  onDeleteContact,
}) {
  return (
    <li>
      <Button type="button" onClick={() => onDeleteContact(contactId)}>
        Delete
      </Button>
      {name}: {number}
    </li>
  );
}

ContactItem.propTypes = {
  contactId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
