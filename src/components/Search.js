import React from "react";

function Search({handleChange, query}) {

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input value={query} onChange={handleChange}className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
