import PropTypes from 'prop-types';

export default function Filter({ filter, onChange }) {
  return (
    <label>
      Find contacts by name
      <input type="text" value={filter} onChange={onChange}></input>
    </label>
  );
}

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
