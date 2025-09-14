import { getDatabase, ref, set } from "firebase/database";
import { useEffect, useReducer, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Answers from "../components/quiz/Answers";
import MiniPlayer from "../components/quiz/MiniPlayer";
import ProgressBar from "../components/quiz/ProgressBar";
import { useAuth } from "../contexts/AuthContext";
import useQuestions from "../hooks/useQuestions";
import { initialState, quizReducer } from "../reducers/quizReducer";

export default function Quiz() {
  const { id } = useParams();
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const { loading, error, questions } = useQuestions(id);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [qna, dispatch] = useReducer(quizReducer, initialState);

  useEffect(() => {
    dispatch({
      type: "questions",
      value: questions,
    });
  }, [questions]);

  const handleAnswerChange = (e, index) => {
    dispatch({
      type: "answer",
      questionId: currentQuestion,
      optionIndex: index,
      value: e.target.checked,
    });
  };

  // handle when user clicks the next button to get the next question
  function nextQuestion() {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prevCurrent) => prevCurrent + 1);
    }
  }

  // handle when user clicks the prev button to get back to the previous question
  function prevQuestion() {
    if (currentQuestion >= 1 && currentQuestion <= questions.length) {
      setCurrentQuestion((prevCurrent) => prevCurrent - 1);
    }
  }

  // calculate percentage of progress
  const percentage =
    questions.length > 0 ? ((currentQuestion + 1) / questions.length) * 100 : 0;

  const submitAnswers = async () => {
    const { uid } = currentUser;

    const db = getDatabase();
    const resultRef = ref(db, `result/${uid}`);

    await set(resultRef, {
      [id]: qna,
    });
    navigate(`/result/${id}`, { state: { qna } });
  };

  return (
    <>
      {loading && <div>Loading ...</div>}
      {error && <div>There was an error!</div>}
      {!loading && !error && qna && qna.length > 0 && (
        <>
          <h1>{qna[currentQuestion].title}</h1>
          <h4>Question can have multiple answers</h4>
          <Answers
            input={true}
            options={qna[currentQuestion].options}
            handleChange={handleAnswerChange}
          />
          <ProgressBar
            next={nextQuestion}
            previous={prevQuestion}
            submitAnswers={submitAnswers}
            progress={percentage}
          />
          <MiniPlayer id={id} title={qna[currentQuestion].title} />
        </>
      )}
    </>
  );
}
