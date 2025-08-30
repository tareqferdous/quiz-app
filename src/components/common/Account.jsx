import { FaRegCircleUser } from "react-icons/fa6";
import classes from "../../styles/Account.module.css";

export default function Account() {
  return (
    <div className={classes.account}>
      <FaRegCircleUser />
      <a href="signup.html">Signup</a>
      {/* <span className="material-icons-outlined" title="Logout"> logout </span> */}
    </div>
  );
}
