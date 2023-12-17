import React,{useState} from "react";

function Search({onHandleChange, searchText}) {
  
  const handleChange = (e) =>{
    onHandleChange(e)
  }
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input type='text' value={searchText} onChange={handleChange} className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
