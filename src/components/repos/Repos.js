import React from "react";
import GithubContext from "../../context/GithubContext";
import LoadingSpinner from "../spinners/LoadingSpinner";
import PropTypes from "prop-types";
import RepoItem from "./RepoItem";

const Repos = ({ repos, loading }) => {
  //   console.log(repos);
  //   if (loading) {
  //     console.log("im in spinner");
  //     return <LoadingSpinner />;
  //   }
  if (loading) {
    return <p>loading...</p>;
  }
  return (
    <div>
      <h2
        style={{
          color: "rgb(96, 108, 118)",
          marginBottom: "10px",
          marginLeft: "12px",
        }}
      >
        {repos.length} repositories
      </h2>
      {repos.map((repo) => {
        return <RepoItem key={repo.html_url} repo={repo} />;
      })}
    </div>
  );
};

Repos.propTypes = {
  repos: PropTypes.array.isRequired,
  loading: PropTypes.bool,
};

export default Repos;
