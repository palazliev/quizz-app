import ReactQuizLogo from "../assets/quiz-logo.png";
import Quiz from "./Quiz";

export default function Header() {
  return (
    <>
      <header>
        <img src={ReactQuizLogo} alt="Quiz logo" />
        <h1>React Quiz</h1>
      </header>

      <Quiz />
    </>
  );
}
