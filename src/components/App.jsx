import PropTypes from 'prop-types';
import { Component } from 'react';
import Notification from './Notification';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';

class App extends Component {
  static defaultProps = {
    goodInitialValue: 0,
    neutralInitialValue: 0,
    badInitialValue: 0,
  };
  state = {
    good: this.props.goodInitialValue,
    neutral: this.props.neutralInitialValue,
    bad: this.props.badInitialValue,
  };

  onClickChange = name => {
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }
  countPositiveFeedbackPercentage = () => {
    const positiveFeedbackPercentage = Math.floor(
      100 * (this.state.good / this.countTotalFeedback()),
    );
    return isNaN(positiveFeedbackPercentage) ? 0 : positiveFeedbackPercentage;
  };

  render() {
    const stateObject = Object.keys(this.state);
    const feedbackPercentage = this.countPositiveFeedbackPercentage();
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions options={stateObject} onLeaveFeedback={this.onClickChange} />
        </Section>
        <Section title="Statistics">
          {totalFeedback > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={feedbackPercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;

App.propTypes = {
  goodInitialValue: PropTypes.number.isRequired,
  neutralInitialValue: PropTypes.number.isRequired,
  badInitialValue: PropTypes.number.isRequired,
};
