import React from "react";
import SearchSvg from "../assets/images/search.svg";
import GithubContext from "../context/GithubContext";
import { Link, useHistory } from "react-router-dom";
import { MdClear } from "react-icons/md";
// import githubReducer from "../context/GithubReducer";

const Search = () => {
  const githubContext = React.useContext(GithubContext);
  const { users, loading, searchUser, clearUsers } = githubContext;

  const [text, setText] = React.useState("");
  let history = useHistory();
  // console.log(users);

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/");

    if (text.trim()) {
      searchUser(text);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="header__search">
        <img src={SearchSvg} alt="search-logo" />
        <div style={{ width: "100%" }}>
          <input
            onChange={(e) => setText(e.target.value.trim())}
            value={text}
            type="text"
            placeholder="Search github user"
          />
          {text.length > 0 ? (
            <MdClear
              style={{
                position: "absolute",
                cursor: "pointer",
                marginLeft: "-30px",
                marginTop: "13px",
                color: "#726DA8",
              }}
              onClick={() => setText("")}
              size={25}
            />
          ) : null}
        </div>
        <button disabled={text.length > 0 ? false : true} type="submit">
          Search
        </button>
      </div>
    </form>
  );
};

export default Search;
