import React from "react";
//set input value to state, controlled. value to be state. on Change, set state
//send this sate to parent where its state can be used to filter
//pokemon's state
function Search({handleChange, query}) {

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input value={query} onChange={handleChange} className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
