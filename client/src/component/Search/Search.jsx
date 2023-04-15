import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import "./Search.scss";

function Search() {
  return (
    <div className="search__container">
      <form action="" className="flex">
        <AiOutlineSearch className="search-icon" />
        <input type="text" placeholder="where are you going?" />
        <div className="close-icon-box">
          <IoClose className="close-icon" />
        </div>
      </form>
    </div>
  );
}

export default Search;
