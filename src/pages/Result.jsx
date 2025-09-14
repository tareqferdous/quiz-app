import _ from "lodash";
import { useLocation, useParams } from "react-router-dom";
import Analysis from "../components/result/Analysis";
import Summary from "../components/result/Summary";
import useAnswers from "../hooks/useAnswers";

export default function Result() {
  const location = useLocation();
  const { id } = useParams();
  const { state } = location;
  const { qna } = state;

  const { loading, error, answers } = useAnswers(id);

  function calculate() {
    let score = 0;

    answers.forEach((question, i) => {
      // সঠিক উত্তরগুলোর index রাখছি
      const correctIndexes = [];
      // ইউজার যে উত্তর দিয়েছে তার index রাখছি
      const checkedIndexes = [];

      question.options.forEach((option, idx) => {
        if (option.correct) {
          correctIndexes.push(idx);
        }

        if (qna[i].options[idx].checked) {
          checkedIndexes.push(idx);
          option.checked = true; // ইউজার যেটা সিলেক্ট করেছে সেটা mark করা হচ্ছে
        }
      });

      if (_.isEqual(correctIndexes, checkedIndexes)) {
        score = score + 5;
      }
    });

    return score;
  }

  const userScore = calculate();

  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>There was an error!</div>}

      {answers && answers.length > 0 && (
        <>
          <Summary score={userScore} noq={answers.length} />
          <Analysis answers={answers} />
        </>
      )}
    </>
  );
}
