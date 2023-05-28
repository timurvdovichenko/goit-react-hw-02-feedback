import PropTypes from 'prop-types';
import { ButtonStyled } from './Button.styled';
import { ListItemStyled } from './Common.styled';
const Button = ({ name, onLeaveFeedback }) => {
  return (
    <ListItemStyled>
      <ButtonStyled type="button" name={name} onClick={onLeaveFeedback}>
        {name}
      </ButtonStyled>
    </ListItemStyled>
  );
};

export default Button;

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
