import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import "./Search.scss";
import { useState } from "react";

function Search() {
  const [close, setClose] = useState(false);
  return (
    <div className={close ? `search__container close` : `search__container`}>
      <form action="" className="flex">
        <AiOutlineSearch className="search-icon" />
        <input type="text" placeholder="where are you going?" />
        <div className="close-icon-box" onClick={() => setClose(!close)}>
          <IoClose className="close-icon" />
        </div>
      </form>
    </div>
  );
}

export default Search;
