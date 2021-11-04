import BeerList from "./BeerList";
import useFetch from "./useFetch";

const Results = () => {
  const url = window.location.search;
  console.log(url);
  const results = useFetch(`https://api.punkapi.com/v2/beers?${url}`);

  return <div>{results && <BeerList beers={results} />}</div>;
};

export default Results;
