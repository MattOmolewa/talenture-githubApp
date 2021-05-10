import React from "react";
import { useHistory } from "react-router-dom";
import { FaLock, FaUnlock, FaStar } from "react-icons/fa";
import PropTypes from "prop-types";

const RepoItem = ({ repo }) => {
  //   let history = React.useHistory();

  const lastUpdated = (time) => new Date(time).toLocaleDateString();
  return (
    <div className="list">
      <h2>
        <a href={repo.html_url}>{repo.name}</a>
      </h2>
      <p>{repo.description}</p>
      <p className="rating">
        <span>
          {repo.stargazers_count}
          <FaStar color={"#00c786"} />
        </span>
        <span>
          {repo.private ? (
            <FaLock color={"#00c786"} />
          ) : (
            <FaUnlock color={"#00c786"} />
          )}
        </span>
      </p>
      <p
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span>🛠 {repo.language}</span>
        <span>🕐 Updated: {lastUpdated(repo.created_at)}</span>
      </p>
    </div>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
