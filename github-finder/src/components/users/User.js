import React, { Component, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Repos from "../repos/Repos";
import GithubContext from "../../context/github/GithubContext";

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);

  const { getUser, user, repos, getUserRepos } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslink-disable-next-line
  }, []);

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  const userStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridGap: "1rem",
  };

  return (
    <div>
      <Link to="/" className="btn btn-light">
        Back to Search
      </Link>
      Hireable:{" "}
      {hireable ? (
        <i className="fas fa-check text-success" />
      ) : (
        <i className="fas fa-times-circle text-danger" />
      )}
      <div className="card" style={userStyle}>
        <div className="all-center">
          <img
            src={avatar_url}
            alt=""
            className="rounded-circle mx-auto"
            style={{ width: "150px" }}
          ></img>
          <h2>{name}</h2>
          <p>Location : {location}</p>
        </div>
        <div>
          {bio && (
            <div>
              <h3>Bio</h3>
              <p>{bio}</p>
            </div>
          )}
          <a href={html_url} className="btn btn-dark my-1">
            Visit Github Profile
          </a>
          <div>
            {login && (
              <div>
                <strong>Username : </strong>
                {login}
              </div>
            )}
          </div>
          <div>
            {company && (
              <div>
                <strong>Company : </strong>
                {company}
              </div>
            )}
          </div>
          <div>
            {blog && (
              <div>
                <strong>Website : </strong>
                {blog}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="card text-center">
        <div className="card-body">
          <span
            className="badge bg-primary col-2"
            style={{ marginRight: "5px" }}
          >
            Followers : {followers}
          </span>
          <span
            className="badge bg-success col-2"
            style={{ marginRight: "5px" }}
          >
            Following : {following}
          </span>
          <span
            className="badge bg-danger col-2"
            style={{ marginRight: "5px" }}
          >
            Public repos : {public_repos}
          </span>
          <span className="badge bg-dark col-2">
            Public Gists : {public_gists}
          </span>
        </div>
      </div>
      <Repos repos={repos} />
    </div>
  );
};

export default User;
