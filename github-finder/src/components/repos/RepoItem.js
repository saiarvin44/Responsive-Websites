import React from "react";
import PropTypes from "prop-types";

export default function RepoItem({ repo }) {
  return (
    <div className="card">
      <div className="card-body">
        <h4>
          <a href={repo.html_url}>{repo.name}</a>
        </h4>
      </div>
    </div>
  );
}

RepoItem.propType = {
  repo: PropTypes.object.isRequired,
};
