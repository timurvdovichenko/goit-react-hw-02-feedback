import PropTypes from 'prop-types';
import Button from './Button';
import { ListStyled } from './Common.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ListStyled>
      {options.map(option => {
        return (
          <Button
            key={option}
            name={option}
            onLeaveFeedback={e => onLeaveFeedback(e.currentTarget.name)}
          />
        );
      })}
    </ListStyled>
  );
};
export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
