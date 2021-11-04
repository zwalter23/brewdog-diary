import { useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "./useFetch";

const BeerList = ({ beers, tasted, setTasted, brewed, setBrewed, setUrl }) => {
  const [page, setPage] = useState(1);
  const nextPageData = useFetch(
    `https://api.punkapi.com/v2/beers?page=${page + 1}&per_page=12`
  );
  function previousPage() {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
      setUrl(`https://api.punkapi.com/v2/beers?page=${page - 1}&per_page=12`);
    }
  }

  function nextPage() {
    if (nextPageData.length !== 0) {
      setPage((prevPage) => prevPage + 1);
      setUrl(`https://api.punkapi.com/v2/beers?page=${page + 1}&per_page=12`);
    }
  }
  function AddToTasted(beer, e) {
    // e.target.classList.toggle("tasted");
    setTasted(...tasted, beer);
  }
  function AddToBrewed(beer, e) {
    // e.target.classList.toggle("brewed");
    setBrewed(...brewed, beer);
  }
  return (
    <div className="beer-list">
      {beers.map((beer) => (
        <div className="beer" key={beer.id}>
          <Link to={`/beer/${beer.id}`}>
            <div className="img-holder">
              <img
                src={beer.image_url}
                alt={beer.name}
                className="beer-image"
              ></img>
            </div>
            <div className="info">
              <h2>{beer.name}</h2>
              <p>{beer.tagline}</p>
            </div>
          </Link>
          <span className="btn-holder">
            <button
              onClick={(e) => {
                AddToTasted(beer, e);
              }}
            >
              Tasted
            </button>
            <button
              onClick={(e) => {
                AddToBrewed(beer, e);
              }}
            >
              Brewed
            </button>
          </span>
        </div>
      ))}
      <div className="button-holder">
        <aside onClick={previousPage} className="prev"></aside>
        <aside onClick={nextPage} className="next"></aside>
      </div>
    </div>
  );
};

export default BeerList;
