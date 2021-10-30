import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BeerDetails = () => {
  const { id } = useParams();
  const beer = useFetch("https://api.punkapi.com/v2/beers/" + id);

  function Twist(twistData) {
    const splittedData = twistData.split(", ");
    return splittedData;
  }

  function HopSetter(hopData) {
    const hopSet = new Set();
    hopData.forEach((hop) => {
      hopSet.add(hop.name);
    });
    const results = [];
    hopSet.forEach((hopType, index) => {
      let value = 0;
      hopData.forEach((hop) => {
        if (hopType === hop.name) {
          value += hop.amount.value;
        }
      });
      results.push(`${hopType} ${value} grams`);
    });
    return results;
  }

  return (
    <div className="beer-details">
      {beer && (
        <article>
          <img src={beer[0].image_url} alt="" className="beer-image"></img>
          <p className="beer-name">{beer[0].name}</p>
          <p className="beer-tagline">{beer[0].tagline}</p>
          <p className="beer-first-brewed-date">
            First brewed at {beer[0].first_brewed}
          </p>
          <p className="beer-description">{beer[0].description}</p>
          <div className="beer-parameters">
            <span> ABV: {beer[0].abv}% </span>
            <span> IBU: {beer[0].ibu} </span>
            <span> EBC: {beer[0].ebc} </span>
            <span> SRM: {beer[0].srm} </span>
            <span>PH: {beer[0].ph}</span>
          </div>

          <div className="beer-target-gravity">
            OG: {beer[0].target_og} FG: {beer[0].target_fg}
          </div>
          <p>
            Volume: {beer[0].volume.value} {beer[0].volume.unit}
          </p>
          <div className="beer-ingredients">
            <div className="malts">
              <p>Malts:</p>
              <ul>
                {beer[0].ingredients.malt.map((malt, index) => {
                  return (
                    <li className="malt" key={`malt-type-${index}`}>
                      {malt.name} {malt.amount.value} {malt.amount.unit}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="hops">
              <p>Hops:</p>
              <ul>
                {HopSetter(beer[0].ingredients.hops).map((hop, index) => {
                  return (
                    <li className="hop-type" key={`hop-type-${index}`}>
                      {hop}
                    </li>
                  );
                })}
              </ul>
            </div>
            {beer[0].method.twist != null ? (
              <div className="twists">
                <p>Additions:</p>
                <ul>
                  {Twist(beer[0].method.twist).map((addition, index) => {
                    return (
                      <li className="addition" key={`addition-${index}`}>
                        {addition}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ) : (
              console.log("No plus additions for this beer!")
            )}
            <div className="yeast">
              <p>Yeast:</p>
              <ul>
                <li>{beer[0].ingredients.yeast}</li>
              </ul>
            </div>
          </div>
          <div className="brewers-tip">
            <p>Brewer's tip:</p>
            <p className="beer-tips">{beer[0].brewers_tips}</p>
          </div>
          <div className="beer-brewing">
            <p>Method:</p>
            <div className="mashing">
              Mash at {beer[0].method.mash_temp[0].temp.value}{" "}
              {beer[0].method.mash_temp[0].temp.unit} for{" "}
              {beer[0].method.mash_temp[0].duration} minutes
            </div>
            <div className="boiling">
              <p>
                Boil volume: {beer[0].boil_volume.value}{" "}
                {beer[0].boil_volume.unit}
              </p>
              {beer[0].ingredients.hops.map((hop, index) => {
                return (
                  <p className="hop" key={`hop-type-${index}`}>
                    {hop.name}
                    {" - "}
                    {hop.amount.value} {hop.amount.unit} at the {hop.add} of the
                    boil
                  </p>
                );
              })}
            </div>
            <div className="fermentation">
              <p>
                {" "}
                Primary fermentation temperature:{" "}
                {beer[0].method.fermentation.temp.value}{" "}
                {beer[0].method.fermentation.temp.unit}
              </p>
            </div>
          </div>
          <div className="beer-pairings">
            <p>Food pairings:</p>
            <ul>
              {beer[0].food_pairing.map((dish) => {
                return <li key={dish}>{dish}</li>;
              })}
            </ul>
          </div>
        </article>
      )}
    </div>
  );
};

export default BeerDetails;
