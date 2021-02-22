import React, { useContext, useState } from "react";
import GithubContext from "../../context/github/GithubContext";
import AlertContext from "../../context/alert/AlertContext";

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alertContext.setAlert("Plase enter something", "light");
    } else {
      githubContext.searchUsers(text);
      setText("");
    }
  };

  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          name="text"
          placeholder="Search Users ..."
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          name="Search"
          className="btn btn-dark btn-block"
          style={{ marginLeft: "10px" }}
        />
        {githubContext.users.length > 0 && (
          <button
            className="btn btn-primary btn-block"
            onClick={githubContext.clearUsers}
            style={{ marginLeft: "10px" }}
          >
            Clear
          </button>
        )}
      </form>
    </div>
  );
};

export default Search;
