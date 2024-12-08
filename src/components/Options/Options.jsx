// import clsx from 'clsx';
import css from './Options.module.css';

function Options({ feedback, updateFeedback, totalFeedback, resetFeedback }) {
  return (
    <div className={css.btnBlock}>
      {Object.keys(feedback).map(feedbackType => (
        <button
          key={feedbackType}
          className={css.btn}
          onClick={() => updateFeedback(feedbackType)}
        >
          {feedbackType[0].toUpperCase() + feedbackType.slice(1)}
        </button>
      ))}
      {totalFeedback > 0 ? (
        <button className={css.btn} onClick={resetFeedback}>
          Reset
        </button>
      ) : null}
    </div>
  );
}

export default Options;
// 2-й варіант

// function Options({ updateFeedback }) {
//   return (
//     <div className={css.blockBtn}>
//       <button className={css.btn} onClick={() => updateFeedback('good')}>
//         Good
//       </button>
//       <button className={css.btn} onClick={() => updateFeedback('neutral')}>
//         Neutral
//       </button>
//       <button className={css.btn} onClick={() => updateFeedback('bad')}>
//         Bad
//       </button>
//     </div>
//   );
// }
