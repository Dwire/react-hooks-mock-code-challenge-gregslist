import React from "react";
import Search from "./Search";

function Header({handleSearchTerm, setSearchTerm, searchTerm}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search handleSearchTerm={handleSearchTerm} />
    </header>
  );
}

export default Header;
