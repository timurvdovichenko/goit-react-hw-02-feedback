import PropTypes from 'prop-types';
import { ListItemStyled, ListStyled } from './Common.styled';
const Statistics = ({ good, neutral, bad, total, positivePercentage = 0 }) => {
  return (
    <ListStyled column={'column'}>
      <ListItemStyled>Good: {good}</ListItemStyled>
      <ListItemStyled>Neutral: {neutral}</ListItemStyled>
      <ListItemStyled>Bad: {bad}</ListItemStyled>
      <ListItemStyled>Total: {total}</ListItemStyled>
      <ListItemStyled>Positive Feedback {positivePercentage}%</ListItemStyled>
    </ListStyled>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number,
  positivePercentage: PropTypes.number.isRequired,
};
