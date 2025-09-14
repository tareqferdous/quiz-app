import { useRef, useState } from "react";
import classes from "../../styles/ProgressBar.module.css";
import Button from "../common/Button";

export default function ProgressBar({
  next,
  previous,
  submitAnswers,
  progress,
}) {
  const [tooltip, setTooltip] = useState(false);
  const tooltipRef = useRef();

  function toggleTooltip() {
    if (tooltip) {
      setTooltip(false);
      tooltipRef.current.style.display = "none";
    } else {
      setTooltip(true);
      tooltipRef.current.style.left = `calc(${progress}% - 65px)`;
      tooltipRef.current.style.display = "block";
    }
  }
  return (
    <div className={classes.progressBar}>
      <div className={classes.backButton}>
        <span className="material-icons-outlined" onClick={previous}>
          {" "}
          arrow_back{" "}
        </span>
      </div>
      <div className={classes.rangeArea}>
        <div className={classes.tooltip} ref={tooltipRef}>
          {" "}
          {progress}% Complete!
        </div>
        <div className={classes.rangeBody}>
          <div
            className={classes.progress}
            style={{ width: `${progress}%` }}
            onMouseOver={toggleTooltip}
            onMouseOut={toggleTooltip}
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
