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
          <div className="beer-detail">
            <div className="detail-ingredient-holder">
              <img src={beer[0].image_url} alt="" className="beer-image"></img>
              <div className="beer-parameters">
                <table>
                  <td> ABV: {beer[0].abv}% </td>
                  <td> IBU: {beer[0].ibu} </td>
                  <td>
                    {" "}
                    EBC: {beer[0].ebc} / SRM: {beer[0].srm}{" "}
                  </td>
                  <td>PH: {beer[0].ph}</td>
                </table>
              </div>
              <div className="beer-target-gravity">
                OG: {beer[0].target_og} FG: {beer[0].target_fg}
              </div>
              <h3>
                For {beer[0].volume.value} {beer[0].volume.unit}:
              </h3>
              <div className="beer-ingredients">
                <div className="malts">
                  <h4>Malts:</h4>
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
                  <h4>Hops:</h4>
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
                    <h4>Additions:</h4>
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
                  <h4>Yeast:</h4>
                  <ul>
                    <li>{beer[0].ingredients.yeast}</li>
                  </ul>
                </div>
              </div>
              <p className="beer-first-brewed-date">
                First brewed at {beer[0].first_brewed}
              </p>
            </div>
            <div className="detail-info">
              <h2 className="beer-name">{beer[0].name}</h2>
              <h3 className="beer-tagline">{beer[0].tagline}</h3>
              <p className="beer-description">{beer[0].description}</p>
              <div className="brewers-tip">
                <h3>Brewer's tip:</h3>
                <p className="beer-tips">{beer[0].brewers_tips}</p>
              </div>
              <div className="beer-brewing">
                <h3>Method:</h3>
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
                        {hop.amount.value} {hop.amount.unit} at the {hop.add} of
                        the boil
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
                <h3>Food pairings:</h3>
                <ul>
                  {beer[0].food_pairing.map((dish) => {
                    return <li key={dish}>{dish}</li>;
                  })}
                </ul>
              </div>
            </div>
          </div>
        </article>
      )}
    </div>
  );
};

export default BeerDetails;
