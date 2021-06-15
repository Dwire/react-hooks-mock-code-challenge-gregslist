import React from "react";
import Search from "./Search";

function Header(props) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <button onClick={props.handleSort} > Sort A-Z </button>
      <Search handleSearch={props.handleSearch} term={props.term} setTerm={props.setTerm}/>
    </header>
  );
}

export default Header;
