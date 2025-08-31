import { FaRegCircleUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import classes from "../../styles/Account.module.css";

export default function Account() {
  return (
    <div className={classes.account}>
      <FaRegCircleUser />
      <Link to="/login">SignIn</Link>
      {/* <span className="material-icons-outlined" title="Logout"> logout </span> */}
    </div>
  );
}
