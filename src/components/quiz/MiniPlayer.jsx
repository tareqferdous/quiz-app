import { useRef, useState } from "react";
import ReactPlayer from "react-player";
import classes from "../../styles/MiniPlayer.module.css";

export default function MiniPlayer({ title, id }) {
  const buttonRef = useRef();
  const [status, setStatus] = useState(false);
  const videoUrl = `https://www.youtube.com/watch?v=${id}`;

  function toggleMiniPlayer() {
    if (!status) {
      buttonRef.current.classList.remove(classes.floatingBtn);
      setStatus(true);
    } else {
      buttonRef.current.classList.add(classes.floatingBtn);
      setStatus(false);
    }
  }
  return (
    <div
      ref={buttonRef}
      onClick={toggleMiniPlayer}
      className={`${classes.miniPlayer} ${classes.floatingBtn}`}
    >
      <span className={`material-icons-outlined ${classes.open}`}>
        {" "}
        play_circle_filled{" "}
      </span>
      <span
        onClick={toggleMiniPlayer}
        className={`material-icons-outlined ${classes.close}`}
      >
        {" "}
        close{" "}
      </span>
      <ReactPlayer
        className={classes.player}
        url={videoUrl}
        width="300px"
        height="168px"
        playing={status}
        controls
      />
      <p>{title}</p>
    </div>
  );
}
