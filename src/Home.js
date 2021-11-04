import useFetch from "./useFetch";
import BeerList from "./BeerList";
import { useState } from "react";

const Home = ({ tasted, setTasted, brewed, setBrewed }) => {
  const [url, setUrl] = useState(
    `https://api.punkapi.com/v2/beers?page=1&per_page=12`
  );
  const beers = useFetch(url);

  return (
    <div className="home">
      {beers && (
        <BeerList
          beers={beers}
          brewed={brewed}
          setBrewed={setBrewed}
          tasted={tasted}
          setTasted={setTasted}
          setUrl={setUrl}
        />
      )}
    </div>
  );
};

export default Home;
