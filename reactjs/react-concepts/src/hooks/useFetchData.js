import { useState, useEffect } from "react";

function useFetchData(initialUrl) {
  //data states
  const [url, setUrl] = useState(initialUrl);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //logic to fetch data form url
    async function fetchData() {
      setLoading(true);
      try {
        //statement
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (error) {
        //error handling statement
        setError(error);
      } finally {
        //finally statement
        setLoading(false);
      }
    }
    fetchData();
  }, [url]);

  return [data, loading, error, setUrl];
}
export default useFetchData;
