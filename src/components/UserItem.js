import React from "react";
import { FaUser, FaUserTimes } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const UserItem = ({ user }) => {
  return (
    <article className="card">
      <div className="card__img">
        <img src={user.avatar_url} alt="cardImage" />
      </div>
      <div className="card__text">
        <h3>
          <FaUser color="rgb(255, 191, 116)" size={16} /> {user.login}
        </h3>
        {/* <p>
          <RiAdminFill color="rgb(129, 195, 245)" size={14} /> type: {user.type}
        </p> */}
        {/* <p>
          <FaUserTimes color="rgb(241, 138, 147)" /> site admin:{" "}
          {`${user.site_admin}`}
        </p> */}
        <Link to={`/user/${user.login}`}>
          <button>More</button>
        </Link>
      </div>
    </article>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
