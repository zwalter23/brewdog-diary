import { useState } from "react";
import { Link } from "react-router-dom";

const Search = () => {
  const [filter, setFilter] = useState("");
  function searchQuery() {
    let filterToPass = "";
    const filterValue = document.getElementById("filters").value;
    const queryValue = document.getElementById("query").value;

    if (queryValue === "") {
      filterToPass = "";
    } else {
      if (filterValue === "brewed_before") {
        filterToPass = `${filterValue}=12-${queryValue - 1}`;
      } else if (filterValue === "brewed_after") {
        filterToPass = `${filterValue}=01-${queryValue}`;
      } else {
        filterToPass = `${filterValue}=${queryValue}`;
      }
    }
    setFilter(filterToPass);
  }

  return (
    <div id="search-bar">
      <input id="query" type="text" placeholder="Search beer by..."></input>
      <select name="filters" id="filters">
        <option value="beer_name">Beer name</option>
        <option value="yeast">Yeast strain</option>
        <option value="hops">Hop variety</option>
        <option value="malt">Malt type</option>
        <option value="food">Food pairing</option>
        <option value="brewed_before">Brewed before</option>
        <option value="brewed_after">Brewed after</option>
        <option value="abv_gt">ABV greater than</option>
        <option value="abv_lt">ABV lower than</option>
        <option value="ibu_gt">IBU greater than</option>
        <option value="ibu_lt">IBU lower than</option>
        <option value="ebc_gt">EBC greater than</option>
        <option value="ebc_lt">EBC lower than</option>
      </select>
      <button className="search-btn" onClick={searchQuery}>
        <Link to={`/search?${filter}`}></Link>
      </button>
    </div>
  );
};

export default Search;
