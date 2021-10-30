import { Link } from "react-router-dom";

const BeerList = ({ beers }) => {
  return (
    <div className="beer-list">
      {beers.map((beer) => (
        <div className="beer" key={beer.id}>
          <Link to={`/beer/${beer.id}`}>
            <h2>
              {beer.id}. {beer.name}
            </h2>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BeerList;
