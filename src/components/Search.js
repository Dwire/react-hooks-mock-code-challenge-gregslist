import React, { useState } from "react";

function Search({handleSearchTerm, setSearchTerm, searchTerm}) {
  // const [searchInput, setSearchInput] = useState("")


  // function handleSubmit(e) {
  //   e.preventDefault();
  //   handleSearchTerm(searchInput)
  //   setSearchInput("")
  // }

  return (
    <form className="searchbar">
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {/* <button type="submit">🔍</button> */}
    </form>
  );
}

export default Search;
