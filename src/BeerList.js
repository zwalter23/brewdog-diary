const BeerList = ({ beers }) => {
  return (
    <div className="beer-list">
      {beers.map((beer) => (
        <div className="beer" key={beer.id}>
          {beer.id}. {beer.name}
        </div>
      ))}
    </div>
  );
};

export default BeerList;
