import BeerList from "./BeerList";
import useFetch from "./useFetch";

const Results = () => {
  const url = window.location.search;
  const results = useFetch(`https://api.punkapi.com/v2/beers${url}`);

  return (
    <div>
      <BeerList beers={results} />
    </div>
  );
};

export default Results;
