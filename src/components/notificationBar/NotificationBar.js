import "./NotificationBar.css";

import { FaTimes } from "@react-icons/all-files/fa/FaTimes";
import { FaExclamationTriangle } from "@react-icons/all-files/fa/FaExclamationTriangle";
import { FaCheckCircle } from "@react-icons/all-files/fa/FaCheckCircle.esm";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hide_Notification } from "../../redux/actions/notificationBar.actions";

const NotificationBar = () => {
  const dispatch = useDispatch();
  const { hide, message, isError, autohide } = useSelector(
    (state) => state.notification
  );

  console.log(autohide);

  useEffect(() => {
    if (autohide) {
      setTimeout(() => {
        dispatch(hide_Notification());
      }, 5000);
    }
  }, [hide]);

  console.log(message);

  return (
    <>
      <div
        className="notification_bar"
        style={{
          background: isError ? "rgb(251,175,175)" : "rgb(173,235,173)",
          borderColor: isError ? "rgb(245,56,56)" : "rgba(50,205,50, 1)",
          display: hide ? "none" : "flex",
        }}
      >
        <div className="notification_msg">
          {isError ? (
            <FaExclamationTriangle style={{ width: "20px", color: "red" }} />
          ) : (
            <FaCheckCircle
              style={{ width: "20px", color: "rgba(50,205,50, 1)" }}
            />
          )}
          <span>{message}</span>
        </div>
        <div
          className="notification_hide"
          style={{
            background: isError ? "rgb(245,56,56)" : "rgba(50,205,50, 1)",
          }}
          onClick={() => {
            dispatch(hide_Notification());
          }}
        >
          <FaTimes style={{ width: "30px", color: "white" }} />
        </div>
      </div>
    </>
  );
};

export default NotificationBar;
