import classes from "../../styles/ProgressBar.module.css";
import Button from "../common/Button";

export default function ProgressBar({
  next,
  previous,
  submitAnswers,
  progress,
}) {
  return (
    <div className={classes.progressBar}>
      <div className={classes.backButton}>
        <span className="material-icons-outlined" onClick={previous}>
          {" "}
          arrow_back{" "}
        </span>
      </div>
      <div className={classes.rangeArea}>
        <div className={classes.tooltip}> {progress}% Complete!</div>
        <div className={classes.rangeBody}>
          <div
            className={classes.progress}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <Button
        onClick={progress === 100 ? submitAnswers : next}
        className={classes.next}
      >
        <span>{`${
          progress === 100 ? "Submit Answers" : "Next Question"
        }`}</span>
        <span className="material-icons-outlined"> arrow_forward </span>
      </Button>
    </div>
  );
}
