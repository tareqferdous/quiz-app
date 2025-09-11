import { useEffect, useReducer, useState } from "react";
import { useParams } from "react-router-dom";
import Answers from "../components/quiz/Answers";
import MiniPlayer from "../components/quiz/MiniPlayer";
import ProgressBar from "../components/quiz/ProgressBar";
import useQuestions from "../hooks/useQuestions";
import { initialState, quizReducer } from "../reducers/quizReducer";

export default function Quiz() {
  const { id } = useParams();
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

  return (
    <>
      <h1 className="text-lg md:text-2xl font-extrabold">
        {qna[currentQuestion]?.title}
      </h1>
      <h4>Question can have multiple answers</h4>
      <Answers
        options={qna[currentQuestion].options}
        handleChange={handleAnswerChange}
      />
      <ProgressBar />
      <MiniPlayer />
    </>
  );
}
