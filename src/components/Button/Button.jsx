import PropTypes from 'prop-types';
import { Btn } from './Button.styled';

export default function Button({ children, onClick, type }) {
  return (
    <Btn type={type} onClick={onClick}>
      {children}
    </Btn>
  );
}

Button.propType = {
  onClick: PropTypes.func,
  type: PropTypes.string.isRequired,
};
