import css from './App.module.css';
import Description from './Description/Description';
import Options from './Options/Options';
import Feedback from './Feedback/Feedback';

const feedback = {
  good: 0,
  neutral: 0,
  bad: 0,
};

const App = () => {
  return (
    <div className={css.container}>
      <Description>
        <h1>Sip Happens Café</h1>
        <p>
          Please leave your feedback about our service by selecting one of the
          options below.
        </p>
      </Description>
      <Options>
        <button className={css.btn}>Good</button>
        <button className={css.btn}>Neutral</button>
        <button className={css.btn}>Bad</button>
      </Options>
      <Feedback>
        <p>Good: {feedback.good}</p>
        <p>Neutral: {feedback.neutral}</p>
        <p>Bad: {feedback.bad}</p>
      </Feedback>
    </div>
  );
};

export default App;
