import React from "react";
// set state of input value with onChange event. 
function Search({handleChange, searchTerm}) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input value = {searchTerm}onChange={handleChange} className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
