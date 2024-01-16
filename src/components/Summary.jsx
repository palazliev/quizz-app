import questions from "../questions";
import quizCompelte from "../assets/quiz-complete.png";

export default function Summary({ userAnswers }) {
  const skippedAnswers = userAnswers.filter(
    (userAnswer) => userAnswer === null
  );
  const correctAnswers = userAnswers.filter(
    (userAnswer, index) => userAnswer === questions[index].answers[0]
  );

  const skippedAnswersShare = Math.round(
    (skippedAnswers.length / userAnswers.length) * 100
  );
  const correctAnswersShare = Math.round(
    (correctAnswers.length / userAnswers.length) * 100
  );
  const wrongAnswersShare = 100 - correctAnswersShare - skippedAnswersShare;

  return (
    <div id="summary">
      <img src={quizCompelte} alt="Quiz is completed" />
      <h2>Quiz Completed!</h2>

      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswersShare}%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{correctAnswersShare}%</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">{wrongAnswersShare}%</span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>

      <ol>
        {userAnswers.map((userAnswer, index) => {
          let cssClass = "user-answer";
          if (!userAnswer) {
            cssClass += " skipped";
          } else if (userAnswer === questions[index].answers[0]) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }

          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{questions[index].text}</p>
              <p className={cssClass}>{userAnswer ?? "skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
