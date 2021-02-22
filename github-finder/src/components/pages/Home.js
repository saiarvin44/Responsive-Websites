import React, { Fragment } from "react";
import Users from "../users/Users";
import Search from "../users/Search";

export const Home = () => {
  return (
    <Fragment>
      <div
        className="container"
        style={{ marginTop: "5px", marginBottom: "5px" }}
      >
        <Search />
      </div>

      <Users />
    </Fragment>
  );
};

export default Home;
