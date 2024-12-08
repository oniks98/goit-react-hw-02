// import clsx from 'clsx';
import css from './Feedback.module.css';

function Feedback({ feedback }) {
  return (
    <div className={css.feedbackBlock}>
      {Object.keys(feedback).map(feedbackType => (
        <p key={feedbackType}>
          {feedbackType[0].toUpperCase() + feedbackType.slice(1)}:{' '}
          {feedback[feedbackType]} ;
        </p>
      ))}
    </div>
  );
}

export default Feedback;
// 2-й варіант

// function Feedback({ feedback }) {
//   const { good, neutral, bad } = feedback;

//   return (
//     <div className={css.feedbackBlock}>
//       <p>Good: {good}</p>
//       <p>Neutral: {neutral}</p>
//       <p>Bad: {bad}</p>
//     </div>
//   );
// }
