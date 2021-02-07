import { useState, useEffect } from 'react';
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error('count not fetch the data for that resouce');
        }
        return res.json();
      })
      .then((data) => {
        if (isMounted) {
          setData(data);
          setIsPending(false);
          setError(null);
        }
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
    return () => {
      isMounted = false;
    };
  }, [url]);

  return {
    data,
    isPending,
    error,
  };
};

export default useFetch;
