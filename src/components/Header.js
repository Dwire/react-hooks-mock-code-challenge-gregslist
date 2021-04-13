import React, { useState } from "react";
import Search from "./Search";

function Header({handleSearchTerm, setSearchTerm, searchTerm}) {
  const [showSearch, setShowSearch] = useState(false)


  const handleShowSearch = () => {
    setShowSearch(showSearch => !showSearch)
  }

  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <p onClick={handleShowSearch} > {showSearch ? "Hide" : "Show"}</p>
      {showSearch ? 
        <Search handleSearchTerm={handleSearchTerm} setSearchTerm={setSearchTerm} searchTerm={searchTerm}/>
        :
        null
      }
    </header>
  );
}

export default Header;
