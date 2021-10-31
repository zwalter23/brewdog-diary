import { Link } from "react-router-dom";

const Tasted = ({ tasted }) => {
  console.log(tasted);
  return (
    <div className="beer-list">
      {Array.from(tasted).map((beer) => (
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
        </div>
      ))}
    </div>
  );
};

export default Tasted;
