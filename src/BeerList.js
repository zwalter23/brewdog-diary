import { Link } from "react-router-dom";

const BeerList = ({ beers }) => {
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
            <button>Tasted</button>
            <button>Brewed</button>
          </span>
        </div>
      ))}
    </div>
  );
};

export default BeerList;
