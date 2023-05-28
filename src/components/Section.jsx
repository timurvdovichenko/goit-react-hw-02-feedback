import PropTypes from 'prop-types';
import { H2Styled } from './Section.styled';
const Section = ({ title, children }) => {
  return (
    <section>
      <H2Styled>{title}</H2Styled>
      {children}
    </section>
  );
};
export default Section;

Section.propTypes = { title: PropTypes.string.isRequired, children: PropTypes.element.isRequired };
