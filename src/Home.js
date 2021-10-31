import useFetch from "./useFetch";
import BeerList from "./BeerList";
import { useState } from "react/cjs/react.development";

const Home = ({ tasted, brewed }) => {
  const [url, setUrl] = useState("https://api.punkapi.com/v2/beers?per_page=9");
  const beers = useFetch(url);
  const [page, setPage] = useState(1);
  const nextPageData = useFetch(
    `https://api.punkapi.com/v2/beers?page=${page + 1}&per_page=9`
  );

  function previousPage() {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
      setUrl(`https://api.punkapi.com/v2/beers?page=${page - 1}&per_page=9`);
    }
  }

  function nextPage() {
    if (nextPageData.length !== 0) {
      setPage((prevPage) => prevPage + 1);
      setUrl(`https://api.punkapi.com/v2/beers?page=${page + 1}&per_page=9`);
    }
  }
  return (
    <div className="home">
      {beers && <BeerList beers={beers} brewed={brewed} tasted={tasted} />}
      <div className="button-holder">
        <aside onClick={previousPage} className="prev"></aside>
        <aside onClick={nextPage} className="next"></aside>
      </div>
    </div>
  );
};

export default Home;
