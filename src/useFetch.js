import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error("Could not fetch the data for that resource!");
        }
        return response.json();
      })
      .then((results) => {
        setData(results);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [url]);
  return data;
};

export default useFetch;
