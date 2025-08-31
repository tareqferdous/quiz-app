import classes from "../../styles/Analysis.module.css";
import Question from "./Question";

export default function Analysis() {
  return (
    <div className={classes.analysis}>
      <h1 className="text-lg md:text-2xl font-extrabold">Question Analysis</h1>
      <h4>You answerd 5 out of 10 questions correctly</h4>
      <Question />
    </div>
  );
}
