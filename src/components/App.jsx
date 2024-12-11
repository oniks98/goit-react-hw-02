import css from './App.module.css';
import Description from './Description/Description';
import Options from './Options/Options';
import Feedback from './Feedback/Feedback';
import Notification from './Notification/Notification';
import { useState, useEffect } from 'react';

const App = () => {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = window.localStorage.getItem('saved-feedback');

    return savedFeedback
      ? JSON.parse(savedFeedback)
      : {
          good: 0,
          neutral: 0,
          bad: 0,
        };
  });

  console.log(JSON.stringify(feedback));

  useEffect(() => {
    window.localStorage.setItem('saved-feedback', JSON.stringify(feedback));
  }, [feedback]);

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const updateFeedback = feedbackType => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positivePercentage = Math.round((feedback.good / totalFeedback) * 100);

  return (
    <div className={css.container}>
      <Description />
      <Options
        feedback={feedback}
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          totalFeedback={totalFeedback}
          feedback={feedback}
          positivePercentage={positivePercentage}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
};

export default App;
