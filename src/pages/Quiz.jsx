import Answers from "../components/quiz/Answers";
import MiniPlayer from "../components/quiz/MiniPlayer";
import ProgressBar from "../components/quiz/ProgressBar";

export default function Quiz() {
  return (
    <>
      <h1 className="text-lg md:text-2xl font-extrabold">
        Pick three of your favorite Star Wars Flims
      </h1>
      <h4>Question can have multiple answers</h4>
      <Answers />
      <ProgressBar />
      <MiniPlayer />
    </>
  );
}
