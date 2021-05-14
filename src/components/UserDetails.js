import React from "react";
import { FaUser, FaUserTimes, FaLink } from "react-icons/fa";
import { FcInfo, FcLink } from "react-icons/fc";
import { GoLocation } from "react-icons/go";
import { AiOutlineLink } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import GithubContext from "../context/GithubContext";
import { useHistory } from "react-router-dom";
import LoadingSpinner from "./spinners/LoadingSpinner";
import Repos from "./repos/Repos";

const UserDetails = (props) => {
  const { user, getUser, loading, getRepos, repos } =
    React.useContext(GithubContext);
  const login = props.match.params.name;
  const history = useHistory();
  //   console.log(props);

  React.useEffect(() => {
    getUser(login);
    getRepos(login);
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <button className="back_btn" onClick={() => history.goBack()}>
        &#8249; back
      </button>
      <div className="users">
        <div className="col-1">
          <article className="profile">
            <div className="profile__img">
              <img src={user.avatar_url} alt="cardImage" />
            </div>
            <div className="profile__text">
              <h2 style={{ color: "#004777" }}>{user.name}</h2>

              <h3>{user.login}</h3>
              {user.bio && (
                <p>
                  <FcInfo /> {user.bio}
                </p>
              )}
              {user.location && (
                <p>
                  <GoLocation color="#6A0136" /> {user.location}
                </p>
              )}
              {user.email && <p>{user.email}</p>}
              {user.blog && (
                <p>
                  <AiOutlineLink color="#4464AD" /> {"  "}
                  <a
                    href={`https://${user.blog}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {user.blog}
                  </a>
                </p>
              )}
              <a
                style={{ fontSize: "16px" }}
                className="outlink"
                href={user.html_url}
                target="_blank"
              >
                Github
              </a>
            </div>
          </article>
        </div>
        <div className="col-2">
          <Repos repoNum={user.public_repos} repos={repos} loading={loading} />
        </div>
      </div>
    </>
  );
};

export default UserDetails;
