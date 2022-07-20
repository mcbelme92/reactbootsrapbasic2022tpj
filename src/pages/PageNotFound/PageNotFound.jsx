import React from "react";
import { Button } from "react-bootstrap";
import "./PageNotFound.css";

const PageNotFound = () => {
  return (
    <div className="hide-navbar">
      <h1>Page you are looking for does not exist!!</h1>
      <a href="/">
        <Button className="m-2" variant="primary">
          Home
        </Button>
      </a>
      <br />
    </div>
  );
};

export default PageNotFound;
