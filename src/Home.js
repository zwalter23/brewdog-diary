import useFetch from "./useFetch";
import BeerList from "./BeerList";

const Home = () => {
  const beers = useFetch("https://api.punkapi.com/v2/beers");
  return <div className="home">{beers && <BeerList beers={beers} />}</div>;
};

export default Home;
