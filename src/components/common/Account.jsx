import { FaRegCircleUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import classes from "../../styles/Account.module.css";

export default function Account() {
  const { currentUser, logout } = useAuth();
  return (
    <div className={classes.account}>
      {currentUser ? (
        <>
          <FaRegCircleUser />
          <span>{currentUser.displayName}</span>
          <span
            onClick={logout}
            className="material-icons-outlined"
            title="Logout"
          >
            {" "}
            logout{" "}
          </span>
        </>
      ) : (
        <>
          <Link to="/login">SignIn</Link>
        </>
      )}
    </div>
  );
}
