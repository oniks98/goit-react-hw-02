import PropTypes from 'prop-types';
import css from './Feedback.module.css';

function Feedback({ feedback, totalFeedback, positivePercentage }) {
  return (
    <div className={css.feedbackBlock}>
      {Object.keys(feedback).map(feedbackType => (
        <p key={feedbackType}>
          {feedbackType[0].toUpperCase() + feedbackType.slice(1)}:{' '}
          {feedback[feedbackType]}
        </p>
      ))}
      <p>Total: {totalFeedback}</p>
      <p>Positive: {positivePercentage}%</p>
    </div>
  );
}

Feedback.propTypes = {
  feedback: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  totalFeedback: PropTypes.number.isRequired,
};

export default Feedback;

// 2-й варіант

// function Feedback({ feedback }) {
//   const { good, neutral, bad } = feedback;

//   return (
//     <div className={css.feedbackBlock}>
//       <p>Good: {good}</p>
//       <p>Neutral: {neutral}</p>
//       <p>Bad: {bad}</p>
//        <p>Total: {totalFeedback}</p>
//       <p>Positive: {positivePercentage}%</p>
//     </div>
//   );
// }
