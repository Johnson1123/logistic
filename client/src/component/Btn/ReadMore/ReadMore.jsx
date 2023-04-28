import React from "react";
import { Link } from "react-router-dom";
import "./ReadMore.scss";

function ReadMore(props) {
  return (
    <button className="Readmore-btn">
      <Link to={props.href}>Read more...</Link>
    </button>
  );
}

export default ReadMore;
