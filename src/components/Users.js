import React from "react";
import GithubContext from "../context/GithubContext";
import fetchUsers from "../apis/api";
import UserItem from "./UserItem";
import LoadingSpinner from "./spinners/LoadingSpinner";

const Users = (props) => {
  const { users, loading } = React.useContext(GithubContext);
  console.log(loading);
  if (users == "" && loading == false) {
    return (
      <p
        style={{
          fontSize: "24px",
          textAlign: "center",
          margin: "20px",
          color: "#EF798A",
        }}
      >
        User can't be found 🤷🏽‍♀️
      </p>
    );
  }

  return (
    <div className="main">
      {loading ? (
        <LoadingSpinner />
      ) : (
        users.map((user) => <UserItem key={user.id} user={user} />)
      )}
    </div>
  );
};

export default Users;
