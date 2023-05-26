import PropTypes from 'prop-types';
import { PararagraphStyled } from './Feedback.styled';
const Notification = ({ message }) => {
  return <PararagraphStyled>{message}</PararagraphStyled>;
};

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
